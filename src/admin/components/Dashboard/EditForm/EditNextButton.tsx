import React from 'react';
import { useNavigate } from 'react-router-dom';

interface EditNextButtonProps {
  to: string;
  form: {
    id?: number;
    title: string;
    description: string;
    imageSource: string;
    visible: boolean;
    sections: FormSection[];
  };
}

interface NewQuestion {
  id?: number;
  newQuestion: string;
  newInputType: string;
  newDropdownChoices: string[];
  page: number;
  form: Form;
}

interface Form {
  id?: number;
  title: string;
  description: string;
  imageSource: string;
  visible: boolean;
  sections: FormSection[];
}

type FormSection = {
  id?: number;
  title: string;
  dropdowns: FormDropdown[];
  customAnswers: CustomAnswer[];
  questions: FormQuestion[];
};

interface FormDropdown {
  id: number;
  newQuestion: string;
  newInputType: string;
  newDropdownChoices: string[];
  page: number;
  placeholder: string | null;
}

type CustomAnswer = {
  answer: string;
};

interface FormQuestion {
  id?: number;
  question: string;
  answer: string;
}

const EditNextButton: React.FC<EditNextButtonProps> = ({ to, form }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${to}/${form.id}`, { state: { form } });
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
