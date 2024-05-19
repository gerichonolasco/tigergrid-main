import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const StakeholderFeedback3: FC = () => {
  // State variables to track selected values
  const [academicUnit, setAcademicUnit] = useState<string>("");
  const [transactionPurpose, setTransactionPurpose] = useState<string>("");
  const [concern, setConcern] = useState<string>("");
  const [designation, setDesignation] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  // Function to handle Next button click
  const handleNextClick = () => {
    if (
      !academicUnit ||
      !transactionPurpose ||
      !concern ||
      !designation ||
      !details
    ) {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center mt-12">
        <ol className="items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          {/* Updated IDs for the steppers */}
          <li
            id="SF-page3-step1"
            className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          >
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              1
            </span>
          </li>
          <li
            id="SF-page3-step2"
            className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          >
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              2
            </span>
          </li>
          <li
            id="SF-page3-step3"
            className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          >
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              3
            </span>
          </li>
          <li
            id="SF-page3-step4"
            className="flex items-center font-bold text-yellow-600 dark:text-yellow-500 space-x-2.5"
          >
            <span className="flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0 dark:border-yellow-500">
              4
            </span>
          </li>
          <li
            id="SF-page3-step5"
            className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          >
            <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              5
            </span>
          </li>
        </ol>
      </div>

      <div className="flex flex-col items-center justify-center mt-6">
        <div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[700px] h-auto sm:h-[800px] flex flex-col items-center justify-center">
          <p className="text-black-500 text-xl font-bold mt-1">
            Specific ACADEMIC UNIT/OFFICE you transacted business with:
          </p>
          {/* Updated ID for the select element */}
          <select
            id="page3-academicUnit"
            className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={academicUnit}
            onChange={(e) => setAcademicUnit(e.target.value)}
          >
            <option value="">Choose specific Academic Unit/Office</option>
            <option value="option1">ACOUNTANCY, College of</option>
            <option value="option2">ARCHITECTURE, College of</option>
            <option value="option3">ARTS AND LETTERS, College of</option>
            <option value="option4">CIVIL LAW, College of</option>
            <option value="option5">
              COMMERCE AND BUSINESS ADMINISTRATION, College of
            </option>
            <option value="option6">EDUCATION, College of</option>
            <option value="option7">ENGINEERING, College of</option>
            <option value="option8">FINE ARTS AND DESIGN, College of</option>
            <option value="option9">GRADUATE SCHOOL</option>
            <option value="option10">GRADUATE SCHOOL OF LAW</option>
            <option value="option11">
              INFORMATION AND COMPUTING SCIENCES, College of
            </option>
            <option value="option12">MEDICINE AND SURGERY, Faculty of</option>
            <option value="option13">MUSIC, Conservatory of</option>
            <option value="option14">NURSING, College of</option>
            <option value="option15">PHARMACY, Faculty of</option>
            <option value="option16">
              PHYSICAL EDUCATION AND ATHLETICS, Institute of
            </option>
            <option value="option17">
              REHABILITATION SCIENCES, College of
            </option>
            <option value="option18">RELIGION, Institute of</option>
            <option value="option19">SCIENCE, College of</option>
            <option value="option20">
              TOURISM AND HOSPITALITY MANAGEMENT, College of
            </option>
            <option value="option21">SENIOR HIGH SCHOOL</option>
            <option value="option22">JUNIOR HIGH SCHOOL</option>
            <option value="option23">EDUCATION HIGH SCHOOL</option>
          </select>

          <p className="text-black-500 text-xl font-bold mt-3">
            Purpose of Transaction
          </p>
          {/* Updated ID for the select element */}
          <select
            id="page3-transactionPurpose"
            className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={transactionPurpose}
            onChange={(e) => setTransactionPurpose(e.target.value)}
          >
            <option value="" disabled selected>
              Choose Purpose of Transaction
            </option>
            <option value="option1">Inquiry</option>
            <option value="option2">Follow-up</option>
            <option value="option3">Request</option>
            <option value="option4">Compliance</option>
            <option value="option5">Complaint</option>
            <option value="option6">Other</option>
          </select>

          <p className="text-black-500 text-xl font-bold mt-3">
            Choose specific concern
          </p>
          {/* Updated ID for the select element */}
          <select
            id="page3-concern"
            className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
          >
            <option value="" disabled selected>
              Choose Concern
            </option>
            <option value="option1">Admission</option>
            <option value="option2">Application</option>
            <option value="option3">Benchmarking</option>
            <option value="option4">
              Co-curricular/Extra-curricular Activities
            </option>
            <option value="option5">Course Requirements</option>
            <option value="option6">Curriculum</option>
            <option value="option7">Documentary Requirements</option>
            <option value="option8">Enrollment</option>
            <option value="option9">Grading System</option>
            <option value="option10">Graduation</option>
            <option value="option11">Instructional Facilities</option>
            <option value="option12">Partnership/Networking</option>
            <option value="option13">Payment</option>
            <option value="option14">Policies and Processes</option>
            <option value="option15">Refund</option>
            <option value="option16">Safety and Security</option>
            <option value="option17">Student Records</option>
            <option value="option18">Other</option>
          </select>

          <p className="text-black-500 text-xl font-bold mt-3">
            Designation of person who attended to your transaction
          </p>
          {/* Updated ID for the select element */}
          <select
            id="page3-designation"
            className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          >
            <option value="" disabled selected>
              Designation of Person
            </option>
            <option value="option1">Administrative/Academic Official</option>
            <option value="option2">Support Staff</option>
            <option value="option3">Official and Support Staff</option>
          </select>

          <p className="text-black-500 text-xl font-bold mt-3">
            You can provide more details about your concern here:
          </p>
          <textarea
            id="page3-details"
            className="mt-3 mb-4 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Type here"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={8} // You can adjust the number of visible rows here
            style={{ width: "100%", maxWidth: "100%", resize: "vertical" }} // Adjust width and allow vertical resizing
          />

          <div className="flex justify-center mt-8">
            {/* Navigation buttons */}
            <Link
              to="/stakeholderfeedback2"
              className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
            >
              Back
            </Link>
            <Link
              to={
                academicUnit &&
                transactionPurpose &&
                concern &&
                designation &&
                details
                  ? "/stakeholderfeedback4"
                  : "#"
              }
              onClick={handleNextClick}
              className={`bg-yellow-500 ${
                academicUnit &&
                transactionPurpose &&
                concern &&
                designation &&
                details
                  ? "hover:bg-blue-700"
                  : "cursor-not-allowed opacity-50"
              } text-white font-bold py-2 px-4 rounded`}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeholderFeedback3;
