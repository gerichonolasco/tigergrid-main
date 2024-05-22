import { ChangeEvent, FC, useEffect, useState } from "react";
import EditFormPage1 from "../components/Dashboard/EditForm/EditFormPage1";
import EditFormPage2 from "../components/Dashboard/EditForm/EditFormPage2";
import EditFormPage3 from "../components/Dashboard/EditForm/EditFormPage3";
import EditFormPage4 from "../components/Dashboard/EditForm/EditFormPage4";

interface NewQuestion {
	id?: number; // Added id property for question
	newQuestion: string;
	newInputType: string;
	newDropdownChoices: string[];
	page: number; // Added page property
}

const ManageQuestions: FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [questions, setQuestions] = useState<NewQuestion[]>([]);
	const [question, setQuestion] = useState<NewQuestion>({
		newQuestion: "",
		newInputType: "",
		newDropdownChoices: [],
		page: 1,
	});
	const [error, setError] = useState<string>("");

	useEffect(() => {
		fetch("http://localhost:8080/form/getAll")
			.then((res) => res.json())
			.then((result: NewQuestion[]) => {
				setQuestions(result);
			})
			.catch((error) => {
				console.error("Error fetching questions:", error);
			});
	}, []);

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		field: keyof NewQuestion
	) => {
		const { value } = e.target;
		setQuestion((prevQuestion) => ({
			...prevQuestion,
			[field]: value,
		}));
	};

	const handleDropdownChange = (
		index: number,
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { value } = e.target;
		setQuestion((prevQuestion) => {
			const updatedDropdownChoices = [...prevQuestion.newDropdownChoices];
			updatedDropdownChoices[index] = value;
			return {
				...prevQuestion,
				newDropdownChoices: updatedDropdownChoices,
			};
		});
	};

	const addDropdownChoice = () => {
		setQuestion((prevQuestion) => ({
			...prevQuestion,
			newDropdownChoices: [...prevQuestion.newDropdownChoices, ""],
		}));
	};

	const removeDropdownChoice = (index: number) => {
		setQuestion((prevQuestion) => {
			const updatedDropdownChoices = [...prevQuestion.newDropdownChoices];
			updatedDropdownChoices.splice(index, 1);
			return {
				...prevQuestion,
				newDropdownChoices: updatedDropdownChoices,
			};
		});
	};

	const addQuestion = () => {
		if (question.newQuestion && question.newInputType) {
			const newQuestion = { ...question, page: currentPage };

			fetch("http://localhost:8080/form/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newQuestion),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error(
							"Failed to add question. Server responded with status: " +
								response.status
						);
					}
					return response.json();
				})
				.then((data) => {
					newQuestion.id = data.id;
					setQuestions([...questions, newQuestion]);
				})
				.catch((error) => {
					console.error("Error adding question:", error);
					setError(error.message);
				});

			setQuestion({
				newQuestion: "",
				newInputType: "",
				newDropdownChoices: [],
				page: currentPage,
			});
			setError(""); // Reset error message
		} else {
			setError("Please complete all fields before adding.");
		}
	};

	const editQuestion = (index: number, updatedQuestion: NewQuestion) => {
		fetch("http://localhost:8080/form/update", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedQuestion),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						"Failed to update question. Server responded with status: " +
							response.status
					);
				}
				setQuestions((prevQuestions) => {
					const newQuestions = [...prevQuestions];
					newQuestions[index] = updatedQuestion; // Replace old question with updated question
					return newQuestions;
				});
				setQuestion({
					newQuestion: "", // Clear the question text
					newInputType: "", // Clear the input type selection
					newDropdownChoices: [], // Clear the dropdown choices array
					page: currentPage, // Reset page to current page
				});
			})
			.catch((error) => {
				console.error("Error updating question:", error);
				setError(error.message);
			});
	};

	const deleteQuestion = (id: number) => {
		fetch(`http://localhost:8080/form/delete/${id}`, {
			method: "DELETE",
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						"Failed to delete question. Server responded with status: " +
							response.status
					);
				}
				setQuestions((prevQuestions) =>
					prevQuestions.filter((q) => q.id !== id)
				);
			})
			.catch((error) => {
				console.error("Error deleting question:", error);
				setError(error.message);
			});
	};

	const handlePageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setCurrentPage(Number(e.target.value));
		setQuestion({
			newQuestion: "",
			newInputType: "",
			newDropdownChoices: [],
			page: Number(e.target.value),
		}); // Reset the question state for the new page
	};

	const handleSubmit = () => {
		// Handle form submission logic here
		console.log("Submitting questions:", questions);
	};

	// Filter questions by the current page
	const filteredQuestions = questions.filter((q) => q.page === currentPage);

	return (
		<div className="flex justify-center items-center bg-cover bg-center bg-main-building">
			<div>
				<div className="text-gray-900 bg-gray-200 mt-8">
					<div className="p-4 flex">
						<h1 className="text-2xl">Manage Questions</h1>
					</div>
					<div className="px-3 py-4 flex justify-center">
						<div className="mb-4">
							<label htmlFor="pageSelector" className="mr-2">
								Select Page:
							</label>
							<select
								id="pageSelector"
								value={currentPage}
								onChange={handlePageChange}
							>
								<option value={1}>Page 1</option>
								<option value={2}>Page 2</option>
								<option value={3}>Page 3</option>
								<option value={4}>Page 4</option>
							</select>
						</div>
					</div>
				</div>
				{currentPage === 1 && (
					<EditFormPage1
						questions={filteredQuestions}
						question={question}
						handleInputChange={handleInputChange}
						handleDropdownChange={handleDropdownChange}
						addDropdownChoice={addDropdownChoice}
						removeDropdownChoice={removeDropdownChoice}
						addQuestion={addQuestion}
						editQuestion={editQuestion}
						deleteQuestion={deleteQuestion}
						error={error}
					/>
				)}
				{currentPage === 2 && (
					<EditFormPage2
						questions={filteredQuestions}
						question={question}
						handleInputChange={handleInputChange}
						handleDropdownChange={handleDropdownChange}
						addDropdownChoice={addDropdownChoice}
						removeDropdownChoice={removeDropdownChoice}
						addQuestion={addQuestion}
						editQuestion={editQuestion}
						deleteQuestion={deleteQuestion}
						error={error}
					/>
				)}
				{currentPage === 3 && (
					<EditFormPage3
						questions={filteredQuestions}
						question={question}
						handleInputChange={handleInputChange}
						handleDropdownChange={handleDropdownChange}
						addDropdownChoice={addDropdownChoice}
						removeDropdownChoice={removeDropdownChoice}
						addQuestion={addQuestion}
						editQuestion={editQuestion}
						deleteQuestion={deleteQuestion}
						error={error}
					/>
				)}
				{currentPage === 4 && (
					<EditFormPage4
						questions={filteredQuestions}
						question={question}
						handleInputChange={handleInputChange}
						handleDropdownChange={handleDropdownChange}
						addDropdownChoice={addDropdownChoice}
						removeDropdownChoice={removeDropdownChoice}
						addQuestion={addQuestion}
						editQuestion={editQuestion}
						deleteQuestion={deleteQuestion}
						error={error}
					/>
				)}
				<div className="flex justify-center mt-4">
					<button
						className="px-4 py-2 bg-blue-500 text-white rounded"
						onClick={handleSubmit}
					>
						Submit All Questions
					</button>
				</div>
			</div>
		</div>
	);
};

export default ManageQuestions;
