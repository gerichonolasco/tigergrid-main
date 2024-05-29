import { ChangeEvent, FC, useEffect, useState } from "react";

interface FormQuestion {
  id: number;
  newQuestion: string;
  newDropdownChoices: string[];
  page: number;
  newInputType: 'text' | 'radio button' | 'dropdown';
}

type FormSection = {
  id?: number;
  title: string;
  dropdowns: FormDropdown[];
  questions: FormQuestion[];
  customAnswers: {
    [questionId: number]: {
      answer: string;
    };
  };
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
  sectionIndex: number;
  currentPage: number;
  isNextEnabled: (valid: boolean) => void;
}

const FormComponent: FC<FormComponentProps> = ({
  formSection,
  handleInputChange,
  handleRadioChange,
  sectionIndex,
  currentPage,
  isNextEnabled,
}) => {
  const [answers, setAnswers] = useState<FormSection['customAnswers']>({});

  const validateForm = () => {
    let allAnswered = true;
    return allAnswered;
  };

  const handleSubmit = () => {
    console.log(answers);
  };

  useEffect(() => {
    isNextEnabled(validateForm());
  }, [formSection]);

  const mergedQuestions = [...formSection.questions, ...formSection.dropdowns].sort((a, b) => a.id - b.id);

  return (
    <div className="form-section">
      <h2 className="text-2xl font-bold mb-4">{formSection.title}</h2>
      <form onSubmit={handleSubmit}>
        {mergedQuestions.map((question, questionIndex) => (
          question.page === currentPage && (
            <div key={question.id} className="question-block mb-6">
              <label className="text-lg mb-2">{question.newQuestion}</label>
              <br />
              {question.newInputType === 'text' && (
                <input
                  type="text"
                  value={answers[question.id]?.answer || ''}
                  onChange={(e) => {
                    handleInputChange(e, sectionIndex, questionIndex);
                    setAnswers((prevAnswers) => ({
                      ...prevAnswers,
                      [question.id]: { answer: e.target.value },
                    }));
                  }}
                  className="form-input block w-full p-2 border border-gray-300 rounded"
                />
              )}
              {question.newInputType === 'dropdown' && (
                <select
                  value={answers[question.id]?.answer || ''}
                  onChange={(e) => {
                    handleInputChange(e, sectionIndex, questionIndex);
                    setAnswers((prevAnswers) => ({
                      ...prevAnswers,
                      [question.id]: { answer: e.target.value },
                    }));
                  }}
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
                <div className="flex" style={{ alignItems: "center", justifyContent: "center", margin: "10px" }}>
                  <input
                    type="radio"
                    value={true}
                    name={question.newQuestion}
                    style={{ marginRight: "5px" }}
                    onChange={(e) => {
                      handleRadioChange(e, sectionIndex, questionIndex);
                      setAnswers((prevAnswers) => ({
                        ...prevAnswers,
                        [question.id]: { answer: e.target.value },
                      }));
                    }}
                  />{' '}
                  <label style={{ marginRight: "15px" }}>True</label>
                  <input
                    type="radio"
                    value={false}
                    name={question.newQuestion}
                    onChange={(e) => {
                      handleRadioChange(e, sectionIndex, questionIndex);
                      setAnswers((prevAnswers) => ({
                        ...prevAnswers,
                        [question.id]: { answer: e.target.value },
                      }));
                    }}
                  />
                  <label>False</label>
                </div>
              )}
            </div>
          )
        ))}
      </form>
    </div>
  );
};

export default FormComponent;