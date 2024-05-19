import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const AcademicFormDo: FC = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [selectedValue2, setSelectedValue2] = useState<number | null>(null);
  const [selectedValue3, setSelectedValue3] = useState<number | null>(null);
  const [selectedValue4, setSelectedValue4] = useState<number | null>(null);
  const [selectedValue5, setSelectedValue5] = useState<number | null>(null);
  const [selectedValue6, setSelectedValue6] = useState<number | null>(null);
  const [selectedValue7, setSelectedValue7] = useState<number | null>(null);
  const [selectedValue8, setSelectedValue8] = useState<number | null>(null);
  const [selectedValue9, setSelectedValue9] = useState<number | null>(null);
  const [selectedValue10, setSelectedValue10] = useState<number | null>(null);
  const [selectedValue11, setSelectedValue11] = useState<number | null>(null);
  const [selectedValue12, setSelectedValue12] = useState<number | null>(null);
  const [selectedValue13, setSelectedValue13] = useState<number | null>(null);
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

  const handleChange9 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue9(Number(event.target.value));
    checkCompletion();
  };

  const handleChange10 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue10(Number(event.target.value));
    checkCompletion();
  };
  const handleChange11 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue11(Number(event.target.value));
    checkCompletion();
  };

  const handleChange12 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue12(Number(event.target.value));
    checkCompletion();
  };

  const handleChange13 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue13(Number(event.target.value));
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
      selectedValue8 !== null &&
      selectedValue9 !== null &&
      selectedValue10 !== null &&
      selectedValue11 !== null &&
      selectedValue12 !== null &&
      selectedValue13 !== null
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
          <li className="flex items-center font-bold text-yellow-600 dark:text-yellow-500 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0 dark:border-yellow-500">
              3
            </span>
          </li>
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
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
          <div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[700px] h-auto sm:h-[2200px] flex flex-col items-center justify-center">
            <p className="text-black-500 text-xl font-bold mt-3">2. Do</p>
            <br></br>
            <p className="text-black-500 text-xl font-bold mt-3">
              2.1. Policies, processes, and practices in the delivery of
              services relevant to the following are clear and communicated to
              concerned parties:
            </p>
            <p className="text-black-500 text-xl font-bold mt-3">
              a. Instruction
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-do-q1a-${number}`}
                      name="rating"
                      value={number}
                      checked={selectedValue === number}
                      onChange={handleChange}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`radio-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">b. Research</p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-do-q1b-${number}`}
                      name="rating2"
                      value={number}
                      checked={selectedValue2 === number}
                      onChange={handleChange2}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-do-q1b-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              c. Community Service
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-do-q1c-${number}`}
                      name="rating3"
                      value={number}
                      checked={selectedValue3 === number}
                      onChange={handleChange3}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-do-q1c-${number}`}
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
              2.2. Criteria, standards, and expectations that must be met in the
              delivery of services are disseminated and upheld.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-do-q2-${number}`}
                      name="rating4"
                      value={number}
                      checked={selectedValue4 === number}
                      onChange={handleChange4}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-do-q2-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              2.3. Documented information, whenever applicable or necessary, are
              available, up-to-date, protected, and suitably managed.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-do-q3-${number}`}
                      name="rating5"
                      value={number}
                      checked={selectedValue5 === number}
                      onChange={handleChange5}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-do-q3-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              2.4. Authority, responsibilities, and accountability to ensure the
              delivery of services and performance of tasks are well-defined and
              clear to concerned parties.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-do-q4-${number}`}
                      name="rating6"
                      value={number}
                      checked={selectedValue6 === number}
                      onChange={handleChange6}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-do-q4-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              2.5. Both vertical and horizontal coordinations are considered to
              facilitate implementation of planned programs and activities.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-do-q5-${number}`}
                      name="rating7"
                      value={number}
                      checked={selectedValue7 === number}
                      onChange={handleChange7}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-do-q5-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              2.6. Competences of administrative, academic, and support
              personnel are identified, developed, and evaluated to meet
              workplace needs and expectations.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-do-q6-${number}`}
                      name="rating8"
                      value={number}
                      checked={selectedValue8 === number}
                      onChange={handleChange8}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-do-q6-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              2.7. External networks and partnerships are explored, established,
              and optimized to achieve quality objectives.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-do-q7-${number}`}
                      name="rating9"
                      value={number}
                      checked={selectedValue9 === number}
                      onChange={handleChange9}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-do-q7-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <br></br>
            <p className="text-black-500 text-xl font-bold mt-8">
              2.8. The following resources are sufficient and are optimized to
              support attainment of targets:
            </p>
            <p className="text-black-500 text-xl font-bold mt-8">a. Human</p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-do-q8a-${number}`}
                      name="rating10"
                      value={number}
                      checked={selectedValue10 === number}
                      onChange={handleChange10}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-do-q8a-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              b. Financial
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-do-q8b-${number}`}
                      name="rating11"
                      value={number}
                      checked={selectedValue11 === number}
                      onChange={handleChange11}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-do-q8b-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">c. Physical</p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-do-q8c-${number}`}
                      name="rating12"
                      value={number}
                      checked={selectedValue12 === number}
                      onChange={handleChange12}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-do-q8c-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-black-500 text-xl font-bold mt-8">
              d. Technological
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-do-q8d-${number}`}
                      name="rating13"
                      value={number}
                      checked={selectedValue13 === number}
                      onChange={handleChange13}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-do-q8d-${number}`}
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
                to="/academicformplan"
                className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
              >
                Back
              </Link>
              <Link
                to={nextDisabled ? "#" : "/academicformcheck"}
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

export default AcademicFormDo;
