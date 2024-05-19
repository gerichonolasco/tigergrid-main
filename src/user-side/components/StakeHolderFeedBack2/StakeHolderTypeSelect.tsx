// StakeholderTypeSelect.tsx
import React, { FC } from "react";

interface Props {
	value: string;
	onChange: (value: string) => void;
}

const StakeholderTypeSelect: FC<Props> = ({ value, onChange }) => {
	return (
		<>
			<p className="text-black-500 text-xl font-bold mt-3">
				Type of Internal Stakeholder
			</p>
			<select
				className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			>
				<option value="">Choose Type of Internal Stakeholder</option>
				<option value="option1">
					Administrative/Academic Official
				</option>
				<option value="option2">Academic Staff</option>
				<option value="option3">Support Staff</option>
				<option value="option4">Student</option>
				<option value="option5">Casual</option>
				<option value="option6">Other</option>
			</select>
		</>
	);
};

export default StakeholderTypeSelect;
