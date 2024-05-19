import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const AcademicFormCheck: FC = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [selectedValue2, setSelectedValue2] = useState<number | null>(null);
  const [selectedValue3, setSelectedValue3] = useState<number | null>(null);
  const [selectedValue4, setSelectedValue4] = useState<number | null>(null);
  const [selectedValue5, setSelectedValue5] = useState<number | null>(null);
  const [selectedValue6, setSelectedValue6] = useState<number | null>(null);
  const [selectedValue7, setSelectedValue7] = useState<number | null>(null);
  const [selectedValue8, setSelectedValue8] = useState<number | null>(null);
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

  const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue6(Number(event.target.value));
    checkCompletion();
  };

  const handleChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue7(Number(event.target.value));
    checkCompletion();
  };

  const handleChange8 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue8(Number(event.target.value));
    checkCompletion();
  };

  const checkCompletion = () => {
    if (
      selectedValue !== null &&
      selectedValue2 !== null &&
      selectedValue3 !== null &&
      selectedValue4 !== null &&
      selectedValue5 !== null &&
      selectedValue6 !== null &&
      selectedValue7 !== null &&
      selectedValue8 !== null
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
          <li className="flex items-center font-bold text-yellow-600 dark:text-yellow-500 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0 dark:border-yellow-500">
              4
            </span>
          </li>
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              5
            </span>
          </li>
        </ol>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 mb-6">
        <div>
          <div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[700px] h-auto sm:h-[1500px] flex flex-col items-center justify-center">
            <p className="text-black-500 text-xl font-bold mt-3">3. Check</p>
            <br></br>
            <p className="text-black-500 text-xl font-bold mt-3">
              3.1. Quantitative and qualitative monitoring of the attainment of
              the quality objectives is implemented.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-check-q1-${number}`}
                      name="rating"
                      value={number}
                      checked={selectedValue === number}
                      onChange={handleChange}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-check-q1-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              3.2. Review of the status of quality objectives, including
              analysis of the issues, challenges, or factors preventing their
              attainment, is implemented.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-check-q2-${number}`}
                      name="rating2"
                      value={number}
                      checked={selectedValue2 === number}
                      onChange={handleChange2}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-check-q2-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              3.3. Tools/instruments for monitoring and measuring internal and
              external conformity to quality criteria and standards are
              available, adequate, and utilized.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-check-q3-${number}`}
                      name="rating3"
                      value={number}
                      checked={selectedValue3 === number}
                      onChange={handleChange3}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-check-q3-${number}`}
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
              3.4. Systems, processes, and activities are benchmarked with local
              and international counterparts to ensure their improvement.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-check-q4-${number}`}
                      name="rating4"
                      value={number}
                      checked={selectedValue4 === number}
                      onChange={handleChange4}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-check-q4-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              3.5. There are feedback mechanisms implemented to know the various
              stakeholders’ satisfaction levels.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-check-q5-${number}`}
                      name="rating5"
                      value={number}
                      checked={selectedValue5 === number}
                      onChange={handleChange5}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-check-q5-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              3.6. Results of feedback mechanisms are analyzed and disseminated
              to concerned parties.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-check-q6-${number}`}
                      name="rating6"
                      value={number}
                      checked={selectedValue6 === number}
                      onChange={handleChange6}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-check-q6-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              3.7. Review of policies affecting academic and administrative
              services is done on a regular basis.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-check-q7-${number}`}
                      name="rating7"
                      value={number}
                      checked={selectedValue7 === number}
                      onChange={handleChange7}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-check-q7-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              3.8. Changes in plans, policies, and procedures are made part of
              documented information, and are retrievable for future reference.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-check-q8-${number}`}
                      name="rating8"
                      value={number}
                      checked={selectedValue8 === number}
                      onChange={handleChange8}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-check-q8-${number}`}
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
                to="/academicformdo"
                className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
              >
                Back
              </Link>
              <Link
                to={nextDisabled ? "#" : "/academicformact"}
                className={`bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                  nextDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {" "}
                Next{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicFormCheck;
