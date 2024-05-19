import React from "react";

interface EditNextButtonProps {
  to: string; // The URL to navigate to when the button is clicked
}

const NextButton: React.FC<EditNextButtonProps> = ({ to }) => {
  const handleClick = () => {
    window.location.href = to; // Redirect to the specified URL
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 mb-3 ml-1 mt-2 text-sm text-blue-100 bg-yellow-500 rounded text-white"
    >
      Next
    </button>
  );
};

export default NextButton;
