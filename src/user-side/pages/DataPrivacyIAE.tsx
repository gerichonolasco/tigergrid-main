import React, { FC } from "react";
import { Link } from "react-router-dom";

const DataPrivacyIAE: FC = () => {
  return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center justify-center">
      {/* Stepper Component */}
      <div className="flex justify-center">
        <ol className="items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          <li className="flex items-center font-bold text-yellow-600 dark:text-yellow-500 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0 dark:border-yellow-500">
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
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              5
            </span>
          </li>
        </ol>
      </div>

      {/* Gray Container */}
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="bg-gray-100 p-8 rounded-lg w-2/3 flex flex-col items-center justify-center">
          <p className="text-black-500 text-xl font-bold mt-3">Data Privacy</p>
          <p className="text-neutral-500 text-xl mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="flex justify-center mt-5">
            {/* Use Link instead of button with "to" attribute */}
            <Link
              to="/landingpage"
              className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-32"
            >
              Disagree
            </Link>
            <Link
              to="/iaeval"
              className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Agree
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPrivacyIAE;
