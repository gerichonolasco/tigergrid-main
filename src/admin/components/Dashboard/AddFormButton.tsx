import React from "react";

interface AddFormButtonProps {
  onClick: () => void;
}

const AddFormButton: React.FC<AddFormButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 mb-3 ml-1 mt-2 text-sm text-blue-100 bg-yellow-500 rounded text-white"
    >
      Add Form
    </button>
  );
};

export default AddFormButton;
