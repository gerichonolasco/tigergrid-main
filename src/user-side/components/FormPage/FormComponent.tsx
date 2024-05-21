import React, { FC, ChangeEvent, useState, useEffect } from "react";

interface Choice {
  choice: string;
}

interface FormQuestion {
  question: string;
  choices: Choice[];
  type?: 'text' | 'radio' | 'dropdown';
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

interface FormComponentProps {
  formSection: FormSection;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    questionIndex: number
  ) => void;
  handleDropdownChange: (
    e: ChangeEvent<HTMLSelectElement>,
    questionIndex: number,
    choiceIndex: number
  ) => void;
  isNextEnabled: (valid: boolean) => void;
}

const FormComponent: FC<FormComponentProps> = ({
  formSection,
  handleInputChange,
  handleDropdownChange,
  isNextEnabled
}) => {
  const validateForm = () => {
    let allAnswered = true;
    formSection.questions.forEach((question, index) => {
      if (question.choices.length && question.type === 'dropdown') {
        const selectedValue = (document.querySelector(`select[data-index="${index}"]`) as HTMLSelectElement)?.value;
        if (!selectedValue) allAnswered = false;
      } else if (question.type === 'radio') {
        const selectedValue = (document.querySelector(`input[name="radio-${index}"]:checked`) as HTMLInputElement)?.value;
        if (!selectedValue) allAnswered = false;
      } else {
        const inputValue = formSection.customAnswer.get(index)?.answer;
        if (!inputValue) allAnswered = false;
      }
    });
    return allAnswered;
  };

  useEffect(() => {
    isNextEnabled(validateForm());
  }, [formSection]);

  return (
    <div className="form-section">
      <h2 className="text-2xl font-bold mb-4">{formSection.title}</h2>
      {Array.from(formSection.questions.entries()).map(([index, question]) => (
        <div key={index} className="question-block mb-6">
          <p className="text-lg mb-2">{question.question}</p>
          {question.type === 'dropdown' ? (
            <select
              data-index={index}
              onChange={(e) => handleDropdownChange(e, index, 0)}
              className="form-select block w-full p-2 border border-gray-300 rounded"
            >
              <option value="" disabled selected>
                Select an option
              </option>
              {question.choices.map((choice, i) => (
                <option key={i} value={choice.choice}>
                  {choice.choice}
                </option>
              ))}
            </select>
          ) : question.type === 'radio' ? (
            <div>
              <div className="flex space-x-4">
                {question.choices.map((choice, i) => (
                  <label key={i} className="block text-center">
                    <input
                      type="radio"
                      name={`radio-${index}`}
                      value={choice.choice}
                      onChange={(e) => handleInputChange(e, index)}
                      className="mb-1"
                    />
                    <div className="mt-1">{choice.choice}</div>
                  </label>
                ))}
              </div>
            </div>
          ) : (
            <input
              type="text"
              value={formSection.customAnswer.get(index)?.answer ?? ""}
              onChange={(e) => handleInputChange(e, index)}
              className="form-input block w-full p-2 border border-gray-300 rounded"
              placeholder="Type your answer"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FormComponent;
