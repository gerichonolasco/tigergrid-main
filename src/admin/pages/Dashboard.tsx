import { FC, useEffect, useState } from "react";
import AddForm from "../components/Dashboard/AddForm";
import AddFormButton from "../components/Dashboard/AddFormButton";
import EditForm from "../components/Dashboard/EditForm";
import FormItem from "../components/Dashboard/FormItem";
import FormResponse from "../components/Dashboard/FormResponse";
import { useNavigate } from "react-router-dom";

interface FormData {
  id: number;
  title: string;
  description: string;
  visible: boolean;
  sections: {
    id: number;
    title: string;
    dropdowns: {
      id: number;
      newQuestion: string;
      newInputType: string;
      newDropdownChoices: string[];
      page: number;
      placeholder: string | null;
    }[];
    questions: {
      id: number;
      newQuestion: string;
      newInputType: string;
      newDropdownChoices: string[];
      page: number;
    }[];
    customAnswers: any[];
  }[];
}

interface FormSectionProps {
  section: FormData['sections'][0];
}

const FormSection: React.FC<FormSectionProps> = ({ section }) => {
  return (
    <div>
      <h2>{section.title}</h2>
      <ul>
        {section.dropdowns.map((dropdown) => (
          <li key={dropdown.id}>
            <strong>Dropdown:</strong> {dropdown.newQuestion}
            <ul>
              {dropdown.newDropdownChoices.map((choice) => (
                <li key={choice}>{choice}</li>
              ))}
            </ul>
          </li>
        ))}
        {section.questions.map((question) => (
          <li key={question.id}>
            <strong>Question:</strong> {question.newQuestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface FormProps {
  data: FormData;
}

interface Form {
  id?: number;
  title: string;
  description: string;
  imageSource: string;
  visible: boolean;
  sections: FormSection[];
}

type FormSection = {
  id?: number;
  title: string;
  dropdowns: FormDropdown[];
  customAnswers: CustomAnswer[];
  questions: FormQuestion[]; // Add the questions property
};

interface FormDropdown {
  id: number;
  newQuestion: string;
  newInputType: string;
  newDropdownChoices: string[];
  page: number;
  placeholder: string | null;
}

type CustomAnswer = {
  answer: string;
};

interface FormQuestion {
  id?: number;
  question: string;
  answer: string;
}

interface UserInfo {
  firstName: string;
  lastName: string;
}

const Dashboard: FC = () => {
  const [forms, setForms] = useState<Form[]>([]);
  const [viewingFormIndex, setViewingFormIndex] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingFormIndex, setEditingFormIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [isAddingForm, setIsAddingForm] = useState<boolean>(false);

  const navigate = useNavigate()

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

  const toggleVisibility = async (index: number) => {
    const updatedForm = { ...forms[index], visible: !forms[index].visible };
    const endpoint = !updatedForm.visible ? 'http://localhost:8080/form/hide' : 'http://localhost:8080/form/show';
    const url = `${endpoint}/${updatedForm.id}`;
  
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(
          `Failed to update form visibility. Server responded with status: ${response.status}`
        );
      }
  
      const updatedForms = [...forms];
      updatedForms[index] = updatedForm;
      setForms(updatedForms);
    } catch (error) {
      console.error("Error updating form visibility:", error);
    }
  };

  const submitForm = async (form: Form) => {
    try {
      console.log("Form to be submitted:", form);
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
      console.log("Form submitted successfully:", result);
      return result;
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const addForm = async (newForm: Form) => {
    const result = await submitForm(newForm);
    console.log("Result:", result);
    if (result) {
      setForms([...forms, result]);
      setIsAddingForm(false);
      navigate("/admin/managequestions", { state: { form: result } });
    } else {
      console.error("Failed to add form");
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
          return response.text().then(text => { throw new Error(text) });
        }
        setForms(forms.filter((form) => form.id !== id));
      })
      .catch((error: unknown) => {
        console.error("Error deleting form:", error);
        alert("Please delete all questions before deleting form.");
      });
  };

  const viewForm = async (index: number) => {
    setViewingFormIndex(index);
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:8080/form/getFormWithQuestions/${forms[index].id}`);
      if (!response.ok) {
        throw new Error(
          "Failed to fetch form details. Server responded with status: " +
          response.status
        );
      }
      const updatedForm: Form = await response.json();

      console.log(updatedForm)

      const updatedForms = [...forms];
      updatedForms[index] = updatedForm;

      setForms(updatedForms);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching form details:", error);
      setLoading(false);
    }
  };

  const closeFormResponse = () => {
    setViewingFormIndex(null);
  };

  const handleSubmit = async (formData: Form) => {
    console.log(JSON.stringify(formData));
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
                toggleShowOnUserSide={() => toggleVisibility(index)}
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
                id={forms[viewingFormIndex!].id}
                title={forms[viewingFormIndex!].title}
                sections={forms[viewingFormIndex!]?.sections?.map((section, index) => ({
                  id: index,
                  title: section.title,
                  questions: section.questions || [],
                  dropdowns: Array.from(section.dropdowns.values()),
                  customAnswers: Array.from(section.customAnswers.values())
                })) || []}
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
