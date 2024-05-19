import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const StakeholderFeedback3ver2: FC = () => {
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
            Specific ADMINISTRATIVE UNIT/OFFICE you transacted business with:
          </p>
          {/* Updated ID for the select element */}
          <select
            id="page3-academicUnit"
            className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={academicUnit}
            onChange={(e) => setAcademicUnit(e.target.value)}
          >
            <option value="">Choose specific Administrative Unit/Office</option>
            <option value="option1">Office of the Rector</option>
            <option value="option2">Office of the Vice-Rector</option>
            <option value="option3">Office of the Vice-Rector for Academic Affairs</option>
            <option value="option4">Office of the Vice-Rector for Research and Innovation</option>
            <option value="option5">
                Office of the Vice-Rector for Religious Affairs
            </option>
            <option value="option6">Office of the Vice-Rector for Finance</option>
            <option value="option7">Office of the Secretary General</option>
            <option value="option8">Academic Programs Quality Assurance</option>
            <option value="option9">Admissions</option>
            <option value="option10">Alumni Relations</option>
            <option value="option11">
              Archives
            </option>
            <option value="option12">Campus Ministry</option>
            <option value="option13">Communications Bureau</option>
            <option value="option14">Community Development</option>
            <option value="option15">Conservation of Cultural Property and Environment in the Tropics (CCCPET), Center for</option>
            <option value="option16">
              Continuing Professional Education and Development (CCPED), Center for
            </option>
            <option value="option17">
              Counciling and Career
            </option>
            <option value="option18">Creative Writing and Literary Studies</option>
            <option value="option19">Culture, Arts, and Humanities, Research Center for</option>
            <option value="option20">
              DMST/ROTC
            </option>
            <option value="option21">e-Service Providers (sTePs)</option>
            <option value="option22">Educational Technology</option>
            <option value="option23">Facilities Management</option>
            <option value="option24">Faculty Evaluation and Development</option>
            <option value="option25">General Shops and Merchandise</option>
            <option value="option26">Grants, Endowments, and Partnerships</option>
            <option value="option27">Health Service</option>
            <option value="option28">Human Resource</option>
            <option value="option29">Information and Communications Technology, Office of</option>
            <option value="option30">Innovation and Technology Support Office</option>
            <option value="option31">Innovation Center</option>
            <option value="option32">Innovative Teaching and Educational Delivery, Center for</option>
            <option value="option33">Internal Audit</option>
            <option value="option23">International Relations and Programs</option>
            <option value="option34">Laboratory Equipment and Supplies</option>
            <option value="option35">Library</option>
            <option value="option36">Museum</option>
            <option value="option37">Natural and Applied Sciences, Research Center for</option>
            <option value="option38">Planning and Quality Management</option>
            <option value="option39">Property Custodian</option>
            <option value="option40">Public Affairs</option>
            <option value="option41">Publishing House</option>
            <option value="option42">QS/THE Rankings</option>
            <option value="option43">Registrar</option>
            <option value="option44">Safety and Security</option>
            <option value="option45">Social Sciences and Education, Research Center for</option>
            <option value="option46">UST-General Santos</option>
            <option value="option47">UST-Santa Rosa</option>
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
              Designation of person
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

export default StakeholderFeedback3ver2;
