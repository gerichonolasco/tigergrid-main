// OfficeTypeSelect.tsx
import React, { FC } from "react";

interface Props {
	value: string;
	onChange: (value: string) => void;
}

const OfficeTypeSelect: FC<Props> = ({ value, onChange }) => {
	return (
		<>
			<p className="text-black-500 text-xl font-bold mt-3">
				Type of Office
			</p>
			<select
				className="mt-3 mb-5 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			>
				<option value="">Choose Type of Field</option>
				<option value="option1">Academic Unit</option>
				<option value="option2">Administrative Unit</option>
			</select>
		</>
	);
};

export default OfficeTypeSelect;
