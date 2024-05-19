import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const StakeholderFeedback2ver2: FC = () => {
  const [stakeholderType, setStakeholderType] = useState<string>("");
  const [transactionType, setTransactionType] = useState<string>("");
  const [officeType, setOfficeType] = useState<string>("");

  const handleNextClick = () => {
    if (!stakeholderType || !transactionType || !officeType) {
      alert("Please select options for all fields.");
      return;
    }

    // Redirect based on selected officeType
    if (officeType === "option1") {
      window.location.href = "/stakeholderfeedback3"; // Academic Unit
    } else if (officeType === "option2") {
      window.location.href = "/stakeholderfeedback3ver2"; // Administrative Unit
    }
  };

  const isFormComplete = stakeholderType && transactionType && officeType;

  return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <ol className="items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          {/* Steps */}
          <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5">
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

      <div className="flex flex-col items-center justify-center mt-10">
        <div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[700px] h-auto sm:h-[500px] flex flex-col items-center justify-center">
          <p className="text-black-500 text-xl font-bold mt-3">
            Type of External Stakeholder
          </p>
          <select
            className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={stakeholderType}
            onChange={(e) => setStakeholderType(e.target.value)}
          >
            <option value="">Choose Type of External Stakeholder</option>
            <option value="option1">Parent/Guardian</option>
            <option value="option2">Alumni</option>
            <option value="option3">Industry Partner</option>
            <option value="option4">From another Dominican institution</option>
            <option value="option5">From another HEI</option>
            <option value="option6">From a government agency</option>
          </select>

          <p className="text-black-500 text-xl font-bold mt-3">
            Type of Transaction
          </p>
          <select
            className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="">Choose Type of Transaction</option>
            <option value="option1">Online</option>
            <option value="option2">Onsite</option>
          </select>

          <p className="text-black-500 text-xl font-bold mt-3">
            Type of Office
          </p>
          <select
            className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={officeType}
            onChange={(e) => setOfficeType(e.target.value)}
          >
            <option value="">Choose Type of Field</option>
            <option value="option1">Academic Unit</option>
            <option value="option2">Administrative Unit</option>
          </select>

          <div className="flex justify-center mt-5">
            {/* Navigation buttons */}
            <Link
              to="/stakeholderfeedback"
              className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
            >
              Back
            </Link>
            <button
              onClick={handleNextClick}
              disabled={!isFormComplete}
              className={`bg-yellow-500 ${
                isFormComplete ? "hover:bg-blue-700" : "cursor-not-allowed opacity-50"
              } text-white font-bold py-2 px-4 rounded`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeholderFeedback2ver2;
