// NavigationButtons.tsx
import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
	onNextClick: () => void;
	isFormComplete: boolean;
}

const NavigationButtons: FC<Props> = ({ onNextClick, isFormComplete }) => {
	return (
		<div className="flex justify-center mt-5">
			{/* Navigation Buttons */}
			<Link
				to="/stakeholderfeedback"
				className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
			>
				Back
			</Link>
			<button
				onClick={onNextClick}
				disabled={!isFormComplete}
				className={`bg-yellow-500 ${
					isFormComplete
						? "hover:bg-blue-700"
						: "cursor-not-allowed opacity-50"
				} text-white font-bold py-2 px-4 rounded`}
			>
				Next
			</button>
		</div>
	);
};

export default NavigationButtons;
