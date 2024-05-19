import React, { FC, useState, ChangeEvent, useEffect } from "react";
import FormComponent from "../components/FormPage/FormComponent";

interface Choice {
  choice: string;
}

interface FormQuestion {
  question: string;
  choices: Choice[];
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
  const [currentPage, setCurrentPage] = useState(1);
  const [formSections, setFormSections] = useState<FormSection[]>([]);

  useEffect(() => {
    fetchFormSections();
  }, []);

  const fetchFormSections = async () => {
    // Simulate fetching data from backend
    try {
      const simulatedFormSections: FormSection[] = [
        {
          title: "Section 1",
          dropdowns: new Map(),
          questions: new Map([
            [0, { question: "Question 1?", choices: [{ choice: "Choice 1" }, { choice: "Choice 2" }] }],
            [1, { question: "Question 2?", choices: [] }]
          ]),
          customAnswer: new Map()
        },
        {
          title: "Section 2",
          dropdowns: new Map(),
          questions: new Map([
            [0, { question: "Question 3?", choices: [{ choice: "Choice A" }, { choice: "Choice B" }] }],
            [1, { question: "Question 4?", choices: [] }]
          ]),
          customAnswer: new Map()
        }
      ];
      // Replace the above with actual API call to fetch data
      // const response = await fetch('API_ENDPOINT');
      // const data = await response.json();
      // setFormSections(data);

      setFormSections(simulatedFormSections); // Using simulated data for now
    } catch (error) {
      console.error("Error fetching form sections:", error);
    }
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
      question.choices[choiceIndex].choice = e.target.value;
      updatedSections[currentPage - 1] = {
        ...updatedSections[currentPage - 1],
        questions: new Map(updatedSections[currentPage - 1].questions),
      };
      setFormSections(updatedSections);
    }
  };

  const handleNextPage = () => {
    if (currentPage < formSections.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <ol className="items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          {formSections.map((_, index) => (
            <li key={index} className={`flex items-center ${currentPage - 1 === index ? "font-bold text-yellow-600 dark:text-yellow-500" : "text-gray-500 dark:text-gray-400"} space-x-2.5`}>
              <span className={`flex items-center justify-center w-8 h-8 border ${currentPage - 1 === index ? "border-yellow-600 dark:border-yellow-500" : "border-gray-500 dark:border-gray-400"} rounded-full shrink-0`}>
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
            />
          ) : (
            <p>Loading...</p>
          )}
          <div className="mt-4 flex space-x-4">
            {currentPage > 1 && (
              <button onClick={handlePreviousPage} className="bg-blue-500 text-white py-2 px-4 rounded">Previous</button>
            )}
            {currentPage < formSections.length && (
              <button onClick={handleNextPage} className="bg-blue-500 text-white py-2 px-4 rounded">Next</button>
            )}
            {currentPage === formSections.length && (
              <button className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
