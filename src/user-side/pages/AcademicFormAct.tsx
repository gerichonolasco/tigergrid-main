import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const AcademicFormAct: FC = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [selectedValue2, setSelectedValue2] = useState<number | null>(null);
  const [selectedValue3, setSelectedValue3] = useState<number | null>(null);
  const [selectedValue4, setSelectedValue4] = useState<number | null>(null);
  const [selectedValue5, setSelectedValue5] = useState<number | null>(null);
  const [nextDisabled, setNextDisabled] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(Number(event.target.value));
    checkCompletion();
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue2(Number(event.target.value));
    checkCompletion();
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue3(Number(event.target.value));
    checkCompletion();
  };

  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue4(Number(event.target.value));
    checkCompletion();
  };

  const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue5(Number(event.target.value));
    checkCompletion();
  };

  const checkCompletion = () => {
    if (
      selectedValue !== null &&
      selectedValue2 !== null &&
      selectedValue3 !== null &&
      selectedValue4 !== null &&
      selectedValue5 !== null
    ) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  };

  return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center mt-12">
        <ol className="items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              1
            </span>
          </li>
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              2
            </span>
          </li>
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              3
            </span>
          </li>
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              4
            </span>
          </li>
          <li className="flex items-center font-bold text-yellow-600 dark:text-yellow-500 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0 dark:border-yellow-500">
              5
            </span>
          </li>
        </ol>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 mb-6">
        <div>
          <div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[700px] h-auto sm:h-[970px] flex flex-col items-center justify-center">
            <p className="text-black-500 text-xl font-bold mt-3">4. Act</p>
            <br></br>
            <p className="text-black-500 text-xl font-bold mt-3">
              4.1. Improvements in the status of quality objectives are visible
              and supported by evidence.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-act-q1-${number}`}
                      name="rating"
                      value={number}
                      checked={selectedValue === number}
                      onChange={handleChange}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-act-q1-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              4.2. Developmental training and similar activities to enhance the
              competences of administrative, academic, and support personnel are
              sustained.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-act-q2-${number}`}
                      name="rating2"
                      value={number}
                      checked={selectedValue2 === number}
                      onChange={handleChange2}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-act-q2-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              4.3. Problems and gaps that have been previously encountered or
              identified are prevented from recurring.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-act-q3-${number}`}
                      name="rating3"
                      value={number}
                      checked={selectedValue3 === number}
                      onChange={handleChange3}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-act-q3-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>{" "}
            <br></br>
            <p className="text-black-500 text-xl font-bold mt-8">
              4.4. Risk levels are lowered due to concrete measures implemented.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-act-q4-${number}`}
                      name="rating4"
                      value={number}
                      checked={selectedValue4 === number}
                      onChange={handleChange4}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-act-q4-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              4.5 Results of feedback mechanisms are utilized for improvement of
              outputs and services.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-act-q5-${number}`}
                      name="rating5"
                      value={number}
                      checked={selectedValue5 === number}
                      onChange={handleChange5}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-act-q5-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <Link
                to="/academicformcheck"
                className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
              >
                Back
              </Link>
              <Link
                to={nextDisabled ? "#" : "/landingpage"}
                className={`bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                  nextDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {" "}
                Submit{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicFormAct;
