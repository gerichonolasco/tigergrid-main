import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const AcademicFormPlan: FC = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [selectedValue2, setSelectedValue2] = useState<number | null>(null);
  const [selectedValue3, setSelectedValue3] = useState<number | null>(null);
  const [selectedValue4, setSelectedValue4] = useState<number | null>(null);
  const [selectedValue5, setSelectedValue5] = useState<number | null>(null);
  const [selectedValue6, setSelectedValue6] = useState<number | null>(null);
  const [selectedValue7, setSelectedValue7] = useState<number | null>(null);
  const [selectedValue8, setSelectedValue8] = useState<number | null>(null);
  const [selectedValue9, setSelectedValue9] = useState<number | null>(null);
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
      selectedValue9 !== null
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
          <li className="flex items-center font-bold text-yellow-600 dark:text-yellow-500 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0 dark:border-yellow-500">
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
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              5
            </span>
          </li>
        </ol>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 mb-6">
        <div>
          <div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[700px] h-auto sm:h-[1580px] flex flex-col items-center justify-center">
            <p className="text-black-500 text-xl font-bold mt-3">1. Plan</p>
            <br></br>

            <p className="text-black-500 text-xl font-bold mt-3">
              1.1. Unit plans are consistent with the mission, vision, and core
              values of the University.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-plan-q1-${number}`}
                      name="rating"
                      value={number}
                      checked={selectedValue === number}
                      onChange={handleChange}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-plan-q1-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-black-500 text-xl font-bold mt-8">
              1.2. Policies, procedures, and proposed activities are aligned
              with the University’s quality objectives, i.e. the strategic
              directional areas, and their key results areas and key performance
              indicators.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-plan-q2-${number}`}
                      name="rating2"
                      value={number}
                      checked={selectedValue2 === number}
                      onChange={handleChange2}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-plan-q2-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-black-500 text-xl font-bold mt-8">
              1.3. Both internal and external stakeholders provide inputs for
              planning.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-plan-q3-${number}`}
                      name="rating3"
                      value={number}
                      checked={selectedValue3 === number}
                      onChange={handleChange3}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-plan-q3-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-black-500 text-xl font-bold mt-8">
              1.4.Plans include identification and management of both risks and
              opportunities.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-plan-q4-${number}`}
                      name="rating4"
                      value={number}
                      checked={selectedValue4 === number}
                      onChange={handleChange4}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-plan-q4-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-black-500 text-xl font-bold mt-8">
              1.5. Criteria, standards, and expectations that must be met in the
              delivery of services are identified, communicated, and upheld.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-plan-q5-${number}`}
                      name="rating5"
                      value={number}
                      checked={selectedValue5 === number}
                      onChange={handleChange5}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-plan-q5-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-black-500 text-xl font-bold mt-8">
              1.6. Targets are set according to available and adequate evidence
              and information.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-plan-q6-${number}`}
                      name="rating6"
                      value={number}
                      checked={selectedValue6 === number}
                      onChange={handleChange6}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-plan-q6-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-black-500 text-xl font-bold mt-8">
              1.7. Plans are communicated to, and are understood by, concerned
              stakeholders/parties.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-plan-q7-${number}`}
                      name="rating7"
                      value={number}
                      checked={selectedValue7 === number}
                      onChange={handleChange7}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-plan-q7-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-black-500 text-xl font-bold mt-8">
              1.8. There are existing protocols to address changes in plans and
              these are clear and communicated to concerned parties.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-plan-q8-${number}`}
                      name="rating8"
                      value={number}
                      checked={selectedValue8 === number}
                      onChange={handleChange8}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-plan-q8-${number}`}
                      className="block text-center text-gray-700 dark:text-gray-500"
                    >
                      {number}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-black-500 text-xl font-bold mt-8">
              1.9. The existing organizational structure supports the delivery
              of the plan.
            </p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-row space-x-4">
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number} className="flex flex-col items-center">
                    <input
                      type="radio"
                      id={`acad-plan-q9-${number}`}
                      name="rating9"
                      value={number}
                      checked={selectedValue9 === number}
                      onChange={handleChange9}
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <label
                      htmlFor={`acad-plan-q9-${number}`}
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
                to="/acadoradminform"
                className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
              >
                Back
              </Link>
              <Link
                to={nextDisabled ? "#" : "/academicformdo"}
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

export default AcademicFormPlan;
