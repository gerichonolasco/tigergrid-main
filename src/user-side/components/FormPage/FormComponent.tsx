import { ChangeEvent, FC, useEffect } from "react";

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

interface FormComponentProps {
  formSection: FormSection;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    sectionIndex: number,
    questionIndex: number
  ) => void;
  handleRadioChange: (value: string, sectionIndex: number, questionIndex: number) => void;
  handleValidation: (valid: boolean) => void;
  sectionIndex: number;
}

const FormComponent: FC<FormComponentProps> = ({
  formSection,
  handleInputChange,
  handleRadioChange,
  handleValidation,
  sectionIndex,
}) => {
  const mergedQuestions = [...formSection.questions, ...formSection.dropdowns].sort((a, b) => a.id - b.id);
  console.log("Merged questions:", mergedQuestions);

  return (
    <div className="form-section">
      <h2 className="text-2xl font-bold mb-4">{formSection.title}</h2>
      {mergedQuestions.map((question, questionIndex) => (
        <div key={question.id} className="question-block mb-6">
          <label className="text-lg mb-2">{question.newQuestion}</label>
          <br></br>
          {question.newInputType === 'text' && (
            <input
              type="text"
              value={formSection.customAnswers[questionIndex]?.answer || ''}
              onChange={(e) => handleInputChange(e, sectionIndex, questionIndex)}
              className="form-input block w-full p-2 border border-gray-300 rounded"
            />
          )}
          {question.newInputType === 'dropdown' && (
            <select
              value={formSection.customAnswers[questionIndex]?.answer || ''}
              onChange={(e) => handleInputChange(e, sectionIndex, questionIndex)}
              className="form-select block w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select...</option>
              {question.newDropdownChoices.map((choice, choiceIndex) => (
                <option key={choiceIndex} value={choice}>
                  {choice}
                </option>
              ))}
            </select>
          )}
          {question.newInputType === 'radio button' && (
            <div className="flex" style={{alignItems: "center", justifyContent: "center", margin: "10px"}}>
              <input type="radio" value="MALE" name="gender" style={{marginRight: "5px"}}/> <label style={{marginRight: "15px"}}>Male</label>
              <input type="radio" value="FEMALE" name="gender"/> <label>Female</label>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FormComponent;