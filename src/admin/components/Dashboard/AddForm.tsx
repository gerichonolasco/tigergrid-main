import React, { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

interface AddFormProps {
  onSubmit: (newForm: Form) => Promise<void>; // Make onSubmit return a Promise
}

interface Form {
  title: string;
  description: string;
  imageSource: string;
  userTypeVisibility: string[];
  visible: boolean;
  sections: FormSection[];
}

interface FormSection {
  id?: number;
  title: string;
  answers: FormQuestion[];
}

interface FormQuestion {
  id?: number;
  question: string;
  answer: string;
}

const AddForm: FC<AddFormProps> = ({ onSubmit }) => {
  const [formTitle, setFormTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const navigate = useNavigate(); // Use useNavigate hook

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormTitle(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const validateForm = useCallback(() => {
    return formTitle.trim() !== "" && description.trim() !== "" && file !== null;
  }, [formTitle, description, file]);

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [validateForm]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newForm: Form = {
        title: formTitle,
        description: description,
        imageSource: URL.createObjectURL(file!),
        userTypeVisibility: ["user", "admin"],
        visible: true,
        sections: [
            {
                id: undefined,
                title: formTitle, // Use formTitle for the section title for better context
                answers: [],
            },
        ],
    };

    navigate("/admin/managequestions", { state: { form: newForm } });
};


  return (
    <div>
      <form
        className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md p-6"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="formtitle"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Form Title
          </label>
          <input
            type="text"
            id="formtitle"
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Title of Form"
            value={formTitle}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="formdescription"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <input
            type="text"
            id="formdescription"
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="user_avatar"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Upload File
          </label>
          <input
            className="w-full p-2.5 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            onChange={handleFileChange}
          />
        </div>
        <button
          type="submit"
          className="w-full p-2.5 bg-yellow-500 text-white rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
          disabled={!isFormValid}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default AddForm;
