import React, { FC, ChangeEvent } from "react";

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
}

const FormComponent: FC<FormComponentProps> = ({
  formSection,
  handleInputChange,
  handleDropdownChange,
}) => {
  return (
    <div className="form-section">
      <h2 className="text-2xl font-bold mb-4">{formSection.title}</h2>
      {Array.from(formSection.questions.entries()).map(([index, question]) => (
        <div key={index} className="question-block mb-6">
          <p className="text-lg mb-2">{question.question}</p>
          {question.choices.length ? (
            <select
              onChange={(e) => handleDropdownChange(e, index, 0)}
              className="form-select block w-full p-2 border border-gray-300 rounded"
            >
              <option value="" disabled selected>Select an option</option>
              {question.choices.map((choice, i) => (
                <option key={i} value={choice.choice}>
                  {choice.choice}
                </option>
              ))}
            </select>
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
