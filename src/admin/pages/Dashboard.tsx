import React, { FC, useState, useEffect } from "react";
import FormItem from "../components/Dashboard/FormItem";
import AddFormButton from "../components/Dashboard/AddFormButton";
import FormResponse from "../components/Dashboard/FormResponse";
import EditForm from "../components/Dashboard/EditForm";
import AddForm from "../components/Dashboard/AddForm";

interface Form {
	id?: number;
	title: string;
	description: string;
	imageSource: string;
	userTypeVisibility: string[];
	visible: boolean;
	sections: Map<number, FormSection>;
}

interface FormSection {
	id: number;
	title: string;
	answers: FormQuestion[];
}

interface FormQuestion {
	id: number;
	question: string;
	answer: string;
}

interface UserInfo {
	firstName: string;
	lastName: string;
}

const Dashboard: FC = () => {
	const [forms, setForms] = useState<Form[]>([]);
	const [viewingFormIndex, setViewingFormIndex] = useState<number | null>(
		null
	);
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [editingFormIndex, setEditingFormIndex] = useState<number | null>(
		null
	);
	const [loading, setLoading] = useState<boolean>(false);
	const [users, setUsers] = useState<UserInfo[]>([]);
	const [isAddingForm, setIsAddingForm] = useState<boolean>(false);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		fetch("http://localhost:8080/form/getAll")
			.then((res) => res.json())
			.then((result: Form[]) => {
				setForms(result);
			})
			.catch((error) => {
				console.error("Error fetching forms:", error);
			});
	}, []);

	const toggleVisibility = (index: number) => {
		const updatedForm = { ...forms[index], visible: !forms[index].visible };
		fetch("http://localhost:8080/form/update", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedForm),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						"Failed to update form visibility. Server responded with status: " +
							response.status
					);
				}
				const updatedForms = [...forms];
				updatedForms[index] = updatedForm;
				setForms(updatedForms);
			})
			.catch((error) => {
				console.error("Error updating form visibility:", error);
				setError(error.message);
			});
	};

	const submitForm = async (form: Form) => {
		try {
			const response = await fetch("http://localhost:8080/form/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(form),
			});

			if (!response.ok) {
				throw new Error(
					"Failed to submit form. Server responded with status: " +
						response.status
				);
			}

			const result = await response.json();
			return result;
		} catch (error) {
			console.error("Error submitting form:", error);
			setError(error.message);
		}
	};

	const addForm = async (newForm: Form) => {
		const result = await submitForm(newForm);
		if (result) {
			setForms([...forms, result]);
			setIsAddingForm(false);
		}
	};

	const editForm = (index: number) => {
		setIsEditing(true);
		setEditingFormIndex(index);
	};

	const deleteForm = (id: number) => {
		fetch(`http://localhost:8080/form/delete/${id}`, {
			method: "DELETE",
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						"Failed to delete form. Server responded with status: " +
							response.status
					);
				}
				setForms(forms.filter((form) => form.id !== id));
			})
			.catch((error) => {
				console.error("Error deleting form:", error);
			});
	};

	const viewForm = (index: number) => {
		setViewingFormIndex(index);
		setLoading(true);

		// Simulate fetching form responses
		setTimeout(() => {
			const dummyUsers = [
				{ firstName: "John", lastName: "Doe" },
				{ firstName: "Jane", lastName: "Doe" },
				{ firstName: "Alice", lastName: "Smith" },
				{ firstName: "Bob", lastName: "Johnson" },
			];

			const dummySections = new Map<number, FormSection>();
			dummySections.set(1, {
				id: 1,
				title: "Section 1",
				answers: [
					{ id: 1, question: "Question 1", answer: "3" },
					{ id: 2, question: "Question 2", answer: "2" },
					{ id: 3, question: "Question 3", answer: "5" },
				],
			});

			const updatedForms = [...forms];
			updatedForms[index].sections = dummySections;

			setUsers(dummyUsers);
			setForms(updatedForms);
			setLoading(false);
		}, 1000);
	};

	const closeFormResponse = () => {
		setViewingFormIndex(null);
	};

	const handleSubmit = async (formData: any) => {
		console.log(formData);
		setIsEditing(false);
		setEditingFormIndex(null);
	};

	return (
		<>
			<div className="relative overflow-x-auto">
				<AddFormButton onClick={() => setIsAddingForm(true)} />
			</div>
			<div className="grid gap-2 lg:grid-cols-4">
				{isAddingForm ? (
					<AddForm onSubmit={addForm} />
				) : isEditing ? (
					<div className="flex justify-center items-center w-full h-full fixed inset-0 z-50 bg-gray-900 bg-opacity-50">
						<EditForm
							form={forms[editingFormIndex!]}
							onSubmit={handleSubmit}
						/>
					</div>
				) : (
					<>
						{forms.map((form, index) => (
							<FormItem
								key={index}
								title={form.title}
								img={form.imageSource}
								content={form.description}
								showOnUserSide={form.visible}
								toggleShowOnUserSide={() =>
									toggleVisibility(index)
								}
								onEdit={() => editForm(index)}
								onView={() => viewForm(index)}
								onDelete={() => deleteForm(form.id!)}
							/>
						))}
					</>
				)}
			</div>
			{viewingFormIndex !== null && (
				<div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
					<div className="relative w-full max-w-3xl bg-white p-4 rounded-lg">
						<button
							className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 bg-gray-200 rounded-full p-2"
							onClick={closeFormResponse}
						>
							Close
						</button>
						{loading ? (
							<div>Loading...</div>
						) : (
							<FormResponse
								formTitle={forms[viewingFormIndex].title}
								sections={forms[viewingFormIndex].sections}
								users={users}
								onClose={closeFormResponse}
							/>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default Dashboard;
