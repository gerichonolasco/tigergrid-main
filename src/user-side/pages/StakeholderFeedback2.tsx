import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import StakeholderTypeSelect from "../components/StakeHolderFeedBack2/StakeHolderTypeSelect";
import TransactionTypeSelect from "../components/StakeHolderFeedBack2/TransactionTypeSelect";
import OfficeTypeSelect from "../components/StakeHolderFeedBack2/OfficeTypeSelect";
import NavigationButtons from "../components/StakeHolderFeedBack2/NavigationButtons";

const StakeholderFeedback2: FC = () => {
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

			<div className="flex flex-col items-center justify-center mt-10">
				<div className="bg-gray-100 p-8 rounded-lg w-full sm:w-[700px] h-auto sm:h-[500px] flex flex-col items-center justify-center">
					<StakeholderTypeSelect
						value={stakeholderType}
						onChange={setStakeholderType}
					/>
					<TransactionTypeSelect
						value={transactionType}
						onChange={setTransactionType}
					/>
					<OfficeTypeSelect
						value={officeType}
						onChange={setOfficeType}
					/>
					<NavigationButtons
						onNextClick={handleNextClick}
						isFormComplete={isFormComplete}
					/>
				</div>
			</div>
		</div>
	);
};

export default StakeholderFeedback2;
