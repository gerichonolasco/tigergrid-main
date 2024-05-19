import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const IAEval2: FC = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [selectedValue2, setSelectedValue2] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(Number(event.target.value));
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue2(Number(event.target.value));
  };

  const isNextButtonDisabled = selectedValue === null || selectedValue2 === null;

  const handleNextButtonClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (isNextButtonDisabled) {
      e.preventDefault();
      alert("Please answer all questions before proceeding.");
    }
  };

  return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center justify-center">
    <div className="flex justify-center">
      <ol className="items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
        {/* Updated IDs for the steppers */}
        <li
          id="IAE-page3-step1"
          className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
        >
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"> 
            1
          </span>
        </li>
        <li
          id="IAE-page3-step1"
          className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
        >
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"> 
            2
          </span>
        </li>
        <li
          id="IAE-page3-step1"
          className="flex items-center font-bold text-yellow-600 dark:text-yellow-500 space-x-2.5"
        >
          <span className="flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0 dark:border-yellow-500">
            3
          </span>
        </li>
        <li
          id="IAE-page3-step2"
          className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
        >
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            4
          </span>
        </li>
        <li
          id="IAE-page3-step5"
          className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
        >
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            5
          </span>
        </li>
      </ol>
    </div>
      
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[700px] h-auto sm:h-[400px] flex flex-col items-center justify-center">
          <p className="text-black-500 text-xl font-bold mt-3">
            Pre-Audit Proper
          </p>
          <br />

          {/* Radio inputs for question 1 */}
          <p className="text-black-500 text-xl font-bold mt-3">
            1. The audit schedule was given at least 5 working days ahead of time.
          </p>
          <div className="flex justify-center mt-5">
            <div className="flex flex-row space-x-4">
              {[1, 2, 3, 4, 5].map((number) => (
                <div key={number} className="flex flex-col items-center">
                  <input
                    type="radio"
                    id={`IAE-page2-q1-${number}`}
                    name="rating"
                    value={number}
                    checked={selectedValue === number}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-gray-600"
                  />
                  <label
                    htmlFor={`IAE-page2-q1-${number}`}
                    className="block text-center text-gray-700 dark:text-gray-500"
                  >
                    {number}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Radio inputs for question 2 */}
          <p className="text-black-500 text-xl font-bold mt-8">
            2. The audit plan provided relevant information.
          </p>
          <div className="flex justify-center mt-5">
            <div className="flex flex-row space-x-4">
              {[1, 2, 3, 4, 5].map((number) => (
                <div key={number} className="flex flex-col items-center">
                  <input
                    type="radio"
                    id={`IAE-page2-q2-${number}`}
                    name="rating2"
                    value={number}
                    checked={selectedValue2 === number}
                    onChange={handleChange2}
                    className="form-radio h-5 w-5 text-gray-600"
                  />
                  <label
                    htmlFor={`IAE-page2-q2-${number}`}
                    className="block text-center text-gray-700 dark:text-gray-500"
                  >
                    {number}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-5">
            <Link
              to="/iaeval"
              className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
            >
              Back
            </Link>
            <Link
              to="/iaeval3"
              className={`bg-yellow-500 ${
                isNextButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-blue-700"
              } text-white font-bold py-2 px-4 rounded`}
              onClick={handleNextButtonClick}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IAEval2;
