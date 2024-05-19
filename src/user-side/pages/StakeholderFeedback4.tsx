import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const StakeholderFeedback4: FC = () => {
  const [answers, setAnswers] = useState<(number | string | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const handleOptionChange = (index: number, option: number | string) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleNextClick = () => {
    if (answers.some((answer) => answer === null || answer === "")) {
      alert("Please answer all fields before submitting.");
    }
  };

  return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center mt-12">
        <ol className="items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          {/* Updated IDs for the steppers */}
          <li
            id="SF-page4-step1"
            className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          >
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              1
            </span>
          </li>
          <li
            id="SF-page4-step2"
            className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          >
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              2
            </span>
          </li>
          <li
            id="SF-page4-step3"
            className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          >
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              3
            </span>
          </li>
          <li
            id="SF-page4-step3"
            className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          >
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              4
            </span>
          </li>
          <li
            id="SF-page4-step4"
            className="flex items-center font-bold text-yellow-600 dark:text-yellow-500 space-x-2.5"
          >
            <span className="flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0 dark:border-yellow-500">
              5
            </span>
          </li>
        </ol>
      </div>

      {/* Gray Container with Questions and Radio Buttons */}
      <div className="mt-2 bg-gray-100 p-8 rounded-lg w-full sm:w-[800px]">
        <div className="flex justify-between mb-4">
          <p className="text-xl font-semibold"></p>
          <div className="flex">
            {[1, 2, 3, 4, 5, "n/a"].map((option) => (
              <div
                key={option}
                className="flex flex-col items-center mr-4 mx-3"
              >
                <label
                  className="text-center"
                  style={{
                    minHeight: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
        <QuestionWithRadioButtons
          question="Information obtained was clear."
          id="page4-q1-longradio"
          options={[1, 2, 3, 4, 5, "N/A"]}
          answer={answers[0]}
          onOptionChange={(option) => handleOptionChange(0, option)}
        />
        <QuestionWithRadioButtons
          question="Information obtained was complete."
          id="page4-q2-longradio"
          options={[1, 2, 3, 4, 5, "N/A"]}
          answer={answers[1]}
          onOptionChange={(option) => handleOptionChange(1, option)}
        />
        <QuestionWithRadioButtons
          question="Information obtained was useful."
          id="page4-q3-longradio"
          options={[1, 2, 3, 4, 5, "N/A"]}
          answer={answers[2]}
          onOptionChange={(option) => handleOptionChange(2, option)}
        />
        <QuestionWithRadioButtons
          question="Person(s) who attended to the concern was courteous."
          id="page4-q4-longradio"
          options={[1, 2, 3, 4, 5, "N/A"]}
          answer={answers[3]}
          onOptionChange={(option) => handleOptionChange(3, option)}
        />
        <QuestionWithRadioButtons
          question="Person(s) who attended to the concern was competent."
          id="page4-q5-longradio"
          options={[1, 2, 3, 4, 5, "N/A"]}
          answer={answers[4]}
          onOptionChange={(option) => handleOptionChange(4, option)}
        />
        <QuestionWithRadioButtons
          question="The time it took to complete the transaction was quick."
          id="page4-q6-longradio"
          options={[1, 2, 3, 4, 5, "N/A"]}
          answer={answers[5]}
          onOptionChange={(option) => handleOptionChange(5, option)}
        />
        <QuestionWithRadioButtons
          question="The time it took to complete the transaction was reasonable."
          id="page4-q7-longradio"
          options={[1, 2, 3, 4, 5, "N/A"]}
          answer={answers[6]}
          onOptionChange={(option) => handleOptionChange(6, option)}
        />
        <QuestionWithRadioButtons
          question="Over-all experience was pleasant."
          id="page4-q8-longradio"
          options={[1, 2, 3, 4, 5, "N/A"]}
          answer={answers[7]}
          onOptionChange={(option) => handleOptionChange(7, option)}
        />
        <QuestionWithRadioButtons
          question="Person(s) who attended to the concern was competent."
          id="page4-q9-longradio"
          options={[1, 2, 3, 4, 5, "N/A"]}
          answer={answers[8]}
          onOptionChange={(option) => handleOptionChange(8, option)}
        />
        <QuestionWithRadioButtons
          question="The time it took to complete the transaction was quick."
          id="page4-q10-longradio"
          options={[1, 2, 3, 4, 5, "N/A"]}
          answer={answers[9]}
          onOptionChange={(option) => handleOptionChange(9, option)}
        />
        <QuestionWithRadioButtons
          question="The time it took to complete the transaction was reasonable."
          id="page4-q11-longradio"
          options={[1, 2, 3, 4, 5, "N/A"]}
          answer={answers[10]}
          onOptionChange={(option) => handleOptionChange(10, option)}
        />
        <QuestionWithRadioButtons
          question="Over-all experience was pleasant."
          id="page4-q12-longradio"
          options={[1, 2, 3, 4, 5, "N/A"]}
          answer={answers[11]}
          onOptionChange={(option) => handleOptionChange(11, option)}
        />
        <p className="text-black-500 text-xs font-bold mt-8">
          How can we serve you better?
        </p>
        <textarea
          id="SF-page4-feedbackText"
          className="mt-2 mb-2 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Type here"
          style={{ width: "100%" }} // This will make the input take the full width of its container
        />

        <div className="flex items-center justify-center mt-6">
          <Link
            to="/stakeholderfeedback3"
            className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
          >
            Back
          </Link>
          <button
            onClick={handleNextClick}
            className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

interface QuestionWithRadioButtonsProps {
  question: string;
  id: string;
  options: (number | string)[];
  answer: number | string | null;
  onOptionChange: (option: number | string) => void;
}

const QuestionWithRadioButtons: FC<QuestionWithRadioButtonsProps> = ({
  question,
  id,
  options,
  answer,
  onOptionChange,
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <p>{question}</p>
      <div className="flex">
        {options.map((option) => (
          <div key={option} className="flex flex-col items-center mr-5">
            <input
              type="radio"
              id={`${id}-${option}`}
              value={option}
              checked={answer === option}
              onChange={() => onOptionChange(option)}
              style={{ width: "18px", height: "18px" }} // Increased size of radio button
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StakeholderFeedback4;
