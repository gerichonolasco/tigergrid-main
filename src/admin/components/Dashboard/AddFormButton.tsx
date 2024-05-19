// AddFormButton.tsx
import React from "react";

const AddFormButton: React.FC = () => {
  const handleClick = () => {
    window.location.href = "/admin/addform"; // Redirect to the specified URL
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 mb-3 ml-1 mt-2 text-sm text-blue-100 bg-yellow-500 rounded text-white"
    >
      Add Form
    </button>
  );
};

export default AddFormButton;
