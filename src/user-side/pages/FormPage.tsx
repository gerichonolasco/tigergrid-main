import { ChangeEvent, FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormComponent from "../components/FormPage/FormComponent";

interface Choice {
  choice: string;
}

interface FormQuestion {
  id: number;
  newQuestion: string;
  newDropdownChoices: Choice[];
  newInputType: 'text' | 'radio' | 'dropdown';
  sectionTitle: string;
}

interface CustomAnswer {
  answer: string;
}

interface FormDropdown {
  placeholder: string;
}

interface FormSection {
  title: string;
  dropdowns: Map<number, FormDropdown>;
  questions: Map<number, FormQuestion>;
  customAnswer: Map<number, CustomAnswer>;
}

const FormPage: FC = () => {
  const { formId } = useParams<{ formId: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const [formSections, setFormSections] = useState<FormSection[]>([]);
  const [isNextEnabled, setIsNextEnabled] = useState(false);

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
      const form = await response.json();
      const sections: FormSection[] = processQuestionsIntoSections(form.sections);
      setFormSections(sections);
    } catch (error) {
      console.error("Error fetching form sections:", error);
    }
  };

  const processQuestionsIntoSections = (sectionsData: any[]): FormSection[] => {
    return sectionsData.map(sectionData => {
      const questionsMap = new Map<number, FormQuestion>();
      sectionData.questions.forEach((question: any) => {
        questionsMap.set(question.id, {
          id: question.id,
          newQuestion: question.newQuestion,
          newDropdownChoices: question.newDropdownChoices.map((choice: string) => ({ choice })),
          newInputType: question.newInputType,
          sectionTitle: sectionData.title
        });
      });

      return {
        title: sectionData.title,
        dropdowns: new Map(),
        questions: questionsMap,
        customAnswer: new Map()
      };
    });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    questionIndex: number
  ) => {
    const updatedSections = [...formSections];
    const updatedCustomAnswer = new Map(updatedSections[currentPage - 1].customAnswer);
    updatedCustomAnswer.set(questionIndex, { answer: e.target.value });
    updatedSections[currentPage - 1] = {
      ...updatedSections[currentPage - 1],
      customAnswer: updatedCustomAnswer,
    };
    setFormSections(updatedSections);
  };

  const handleDropdownChange = (
    e: ChangeEvent<HTMLSelectElement>,
    questionIndex: number,
    choiceIndex: number
  ) => {
    const updatedSections = [...formSections];
    const question = updatedSections[currentPage - 1].questions.get(questionIndex);
    if (question) {
      question.newDropdownChoices[choiceIndex].choice = e.target.value;
      updatedSections[currentPage - 1] = {
        ...updatedSections[currentPage - 1],
        questions: new Map(updatedSections[currentPage - 1].questions),
      };
      setFormSections(updatedSections);
    }
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
              handleDropdownChange={handleDropdownChange}
              isNextEnabled={handleValidation}
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
              <button onClick={handleSubmit} className={`bg-green-500 text-white py-2 px-4 rounded ${!isNextEnabled ? "opacity-50 cursor-not-allowed" : ""}`} disabled={!isNextEnabled}>Submit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
