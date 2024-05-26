import React from 'react';
import { useNavigate } from 'react-router-dom';

interface EditNextButtonProps {
  to: string;
  formId: number; // Add formId as a prop
}

const EditNextButton: React.FC<EditNextButtonProps> = ({ to, formId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${to}/${formId}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Next
    </button>
  );
};

export default EditNextButton;
