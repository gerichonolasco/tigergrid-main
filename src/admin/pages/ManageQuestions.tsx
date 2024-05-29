import { ChangeEvent, FC, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EditFormPage1 from "../components/Dashboard/EditForm/EditFormPage1";
import EditFormPage2 from "../components/Dashboard/EditForm/EditFormPage2";
import EditFormPage3 from "../components/Dashboard/EditForm/EditFormPage3";
import EditFormPage4 from "../components/Dashboard/EditForm/EditFormPage4";

interface NewQuestion {
  id?: number;
  newQuestion: string;
  newInputType: string;
  newDropdownChoices: string[];
  page: number;
  form: Form;
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
  questions: FormQuestion[];
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

const ManageQuestions: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentForm = location.state?.form as Form;

  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [questions, setQuestions] = useState<NewQuestion[]>([]);
  const [question, setQuestion] = useState<NewQuestion>({
    newQuestion: "",
    newInputType: "",
    newDropdownChoices: [],
    page: 1,
    form: currentForm,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
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

  const addQuestion = async () => {
    const currentForm = location.state?.form as Form;
    if (question.newQuestion && question.newInputType) {
      const newQuestion = { ...question, page: currentPage };
      newQuestion.form = currentForm;

      console.log(newQuestion);

      try {
        const response = await fetch("http://localhost:8080/question/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newQuestion),
        });

        if (!response.ok) {
          throw new Error(
            `Failed to add question. Server responded with status: ${response.status}`
          );
        }

        const data = await response.json();
        newQuestion.id = data.id;
        setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);

        setQuestion({
          newQuestion: "",
          newInputType: "",
          newDropdownChoices: [],
          page: currentPage,
          form: currentForm,
        });
        setError("");
      } catch (error) {
        console.error("Error adding question:", error);
        setError("Failed to add question. Please try again later.");
      }
    } else {
      setError("Please complete all fields before adding.");
    }
  };

  const editQuestion = async (index: number, updatedQuestion: NewQuestion) => {
    const currentForm = location.state?.form as Form;

    try {
      const response = await fetch("http://localhost:8080/question/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedQuestion),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to update question. Server responded with status: ${response.status}`
        );
      }

      setQuestions((prevQuestions) => {
        const newQuestions = [...prevQuestions];
        newQuestions[index] = updatedQuestion; // Replace old question with updated question
        return newQuestions;
      });

      setQuestion({
        newQuestion: "",
        newInputType: "",
        newDropdownChoices: [],
        page: currentPage,
        form: currentForm,
      });
      setError("");
    } catch (error) {
      console.error("Error updating question:", error);
      setError("Failed to update question. Please try again later.");
    }
  };

  const deleteQuestion = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8080/question/delete/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(
          `Failed to delete question. Server responded with status: ${response.status}`
        );
      }

      setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
    } catch (error) {
      console.error("Error deleting question:", error);
      setError("Failed to delete question. Please try again later.");
    }
  };

  const filteredQuestions = useMemo(
    () => questions.filter((q) => q.page === currentPage),
    [questions, currentPage]
  );

  const handlePageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentForm = location.state?.form as Form;

    setCurrentPage(Number(e.target.value));
    setQuestion({
      newQuestion: "",
      newInputType: "",
      newDropdownChoices: [],
      page: Number(e.target.value),
      form: currentForm
    });
  };

  const handleSubmitAllQuestions = async () => {
    try {
      const textQuestions = questions.filter(q => q.newInputType === 'Text' || q.newInputType === 'Radio Button');
      const dropdownQuestions = questions.filter(q => q.newInputType === 'Dropdown');
      const customAnswerQuestions = questions.filter(q => q.newInputType === 'Custom Answer');

      textQuestions.forEach(question => {
          const response = fetch(`http://localhost:8080/form-sections/${question.form.id}/questions/${question.id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(questions),
        });

        if (!response) {
          throw new Error(
            `Failed to update question. Server responded with status: ${response}`
          );
        }
      });

      dropdownQuestions.forEach(question => {
          const response = fetch(`http://localhost:8080/form-sections/${question.form.id}/dropdowns/${question.id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(questions),
        });

        if (!response) {
          throw new Error(
            `Failed to update question. Server responded with status: ${response}`
          );
        }
      });

      customAnswerQuestions.forEach(question => {
          const response = fetch(`http://localhost:8080/form-sections/${question.form.id}/custom_answers/${question.id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(questions),
        });

        if (!response) {
          throw new Error(
            `Failed to update question. Server responded with status: ${response}`
          );
        }
      });

      console.log(questions)
  
      console.log("All questions submitted successfully!");
      navigate("/admin/dashboard");

      setQuestions([]);
    } catch (error) {
      if (error instanceof TypeError) {
        console.error("Network error or CORS issue:", error);
        setError("Network error or CORS issue. Please check the server and try again.");
      } else {
        console.error("Error submitting all questions:", error);
        setError("Failed to submit all questions. Please try again later.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-2xl bg-gray-300 p-6 rounded-lg">
        <div className="text-gray-900 mt-4 rounded-lg overflow-hidden">
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-2xl">Manage Questions</h1>
            <div className="mb-4">
              <label htmlFor="pageSelector" className="mr-2">
                Select Page:
              </label>
              <select
                id="pageSelector"
                value={currentPage}
                onChange={handlePageChange}
                className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {[1, 2, 3, 4].map((page) => (
                  <option key={page} value={page}>
                    Page {page}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          {[
            <EditFormPage1
              key="page1"
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
            />,
            <EditFormPage2
              key="page2"
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
            />,
            <EditFormPage3
              key="page3"
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
            />,
            <EditFormPage4
              key="page4"
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
            />,
          ][currentPage - 1]}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            onClick={handleSubmitAllQuestions}
          >
            Submit All Questions
          </button>
        </div>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageQuestions;
