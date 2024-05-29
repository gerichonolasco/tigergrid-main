import { ChangeEvent, FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormComponent from "../components/FormPage/FormComponent";

interface FormQuestion {
  id: number;
  newQuestion: string;
  newDropdownChoices: string[];
  newInputType: 'text' | 'radio button' | 'dropdown';
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

interface Form {
  id: number;
  title: string;
  description: string;
  visible: boolean;
  sections: FormSection[];
}

const FormPage: FC = () => {
  const { formId } = useParams<{ formId: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const [formSections, setFormSections] = useState<FormSection[]>([]);
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean | null>(null);

  useEffect(() => {
    if (formId) {
      fetchFormSections(formId);
    }
  }, [formId]);

  const fetchFormSections = async (formId: string) => {
    try {
      const response = await fetch(`http://localhost:8080/form/getFormWithQuestions/${formId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch questions. Status: ${response.status}`);
      }
      const form: Form = await response.json();
      console.log("Form:", form);
      setIsVisible(form.visible);

      if (form.visible) {
        const sections: FormSection[] = form.sections.map((section: any) => ({
          id: section.id,
          title: section.title,
          dropdowns: section.dropdowns.map((dropdown: any) => ({
            id: dropdown.id,
            newQuestion: dropdown.newQuestion,
            newInputType: dropdown.newInputType.toLowerCase() as 'text' | 'radio button' | 'dropdown',
            newDropdownChoices: dropdown.newDropdownChoices,
          })),
          questions: section.questions.map((question: any) => ({
            id: question.id,
            newQuestion: question.newQuestion,
            newDropdownChoices: question.newDropdownChoices,
            newInputType: question.newInputType.toLowerCase() as 'text' | 'radio button' | 'dropdown',
          })),
          customAnswers: section.questions.map(() => ({ answer: '' })),
        }));
        setFormSections(sections);
      }
    } catch (error) {
      console.error("Error fetching form sections:", error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    sectionIndex: number,
    questionIndex: number
  ) => {
    const updatedSections = [...formSections];
    const updatedCustomAnswers = [...updatedSections[sectionIndex].customAnswers];
    updatedCustomAnswers[questionIndex] = { answer: e.target.value };
    updatedSections[sectionIndex] = {
      ...updatedSections[sectionIndex],
      customAnswers: updatedCustomAnswers,
    };
    setFormSections(updatedSections);
  };

  const handleRadioChange = (value: string, sectionIndex: number, questionIndex: number) => {
    const updatedSections = [...formSections];
    const updatedCustomAnswers = [...updatedSections[sectionIndex].customAnswers];
    updatedCustomAnswers[questionIndex] = { answer: value };
    updatedSections[sectionIndex] = {
      ...updatedSections[sectionIndex],
      customAnswers: updatedCustomAnswers,
    };
    setFormSections(updatedSections);
  };

  const handleNextPage = () => {
    if (currentPage < formSections.length && isNextEnabled) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = () => {
    if (isNextEnabled) {
      console.log("Form submitted:", formSections);
    }
  };

  const handleValidation = (valid: boolean) => {
    setIsNextEnabled(valid);
  };

  if (isVisible === null) {
    return <p>Loading...</p>;
  }

  if (!isVisible) {
    return <p>This form is not visible.</p>;
  }

  return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <ol className="items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          {formSections.map((_, index) => (
            <li key={index} className={`flex items-center ${currentPage - 1 === index ? "font-bold text-yellow-600 dark:text-yellow-500" : "text-gray-500 dark:text-gray-400"} space-x-2.5`}>
              <span className={`flex items-center justify-center w-8 h-8 border rounded-full ${currentPage - 1 === index ? "border-yellow-600 dark:border-yellow-500" : "border-gray-200 dark:border-gray-700"} shrink-0`}>
                {index + 1}
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[700px] h-auto sm:h-[500px] flex flex-col items-center justify-center">
          {formSections.length > 0 ? (
            <FormComponent
              formSection={formSections[currentPage - 1]}
              handleInputChange={handleInputChange}
              handleRadioChange={handleRadioChange}
              handleValidation={handleValidation}
              sectionIndex={currentPage - 1}
            />
          ) : (
            <p>Loading...</p>
          )}
          <div className="mt-4 flex space-x-4">
            {currentPage > 1 && (
              <button onClick={handlePreviousPage} className="bg-blue-500 text-white py-2 px-4 rounded">Previous</button>
            )}
            {currentPage < formSections.length && (
              <button onClick={handleNextPage} className={`bg-blue-500 text-white py-2 px-4 rounded ${!isNextEnabled ? "opacity-50 cursor-not-allowed" : ""}`} disabled={!isNextEnabled}>Next</button>
            )}
            {currentPage === formSections.length && (
              <button onClick={handleSubmit} className={`bg-blue-500 text-white py-2 px-4 rounded ${!isNextEnabled ? "opacity-50 cursor-not-allowed" : ""}`} disabled={!isNextEnabled}>Submit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;