import React from "react";

interface NextButtonProps {
  to: string; // The URL to navigate to when the button is clicked
  disabled: boolean; // Whether the button should be disabled
}

const NextButton: React.FC<NextButtonProps> = ({ to, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      window.location.href = to; // Redirect to the specified URL if not disabled
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 mb-3 ml-1 mt-2 text-sm text-blue-100 bg-yellow-500 rounded text-white ${
        disabled ? "opacity-50 cursor-not-allowed" : "" // Add disabled styles if disabled
      }`}
      disabled={disabled} // Set disabled attribute based on disabled prop
    >
      Next
    </button>
  );
};

export default NextButton;
