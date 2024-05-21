import React, { FC, useState, ChangeEvent, useEffect } from "react";
import NextButton from "../AddForm/NextButton";

interface NewQuestion {
  newQuestion: string;
  newInputType: string;
  newDropdownChoices: string[];
}

interface AddFormProps {
  onSubmit: (newForm: Form) => void;
}

interface Form {
  title: string;
  description: string;
  imageSource: string;
  userTypeVisibility: string[];
  visible: boolean;
  sections: Map<number, FormSection>;
}

interface FormSection {
  id: number;
  title: string;
  answers: FormQuestion[];
}

interface FormQuestion {
  id: number;
  question: string;
  answer: string;
}

const AddForm: FC<AddFormProps> = ({ onSubmit }) => {
  const [formTitle, setFormTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [questions, setQuestions] = useState<NewQuestion[]>([]);
  const [question, setQuestion] = useState<NewQuestion>({
    newQuestion: "",
    newInputType: "",
    newDropdownChoices: [],
  });
  const [error, setError] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

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

  const handleQuestionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion({
      ...question,
      [event.target.name]: event.target.value,
    });
  };

  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setQuestion({
      ...question,
      newDropdownChoices: event.target.value.split(","),
    });
  };

  const validateForm = () => {
    return formTitle.trim() !== "" && description.trim() !== "" && file !== null;
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [formTitle, description, file]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newForm: Form = {
      title: formTitle,
      description: description,
      imageSource: URL.createObjectURL(file!),
      userTypeVisibility: ["user", "admin"],
      visible: true,
      sections: new Map([
        [
          1,
          {
            id: 1,
            title: "Section 1",
            answers: questions.map((q, index) => ({
              id: index + 1,
              question: q.newQuestion,
              answer:
                q.newInputType === "dropdown"
                  ? q.newDropdownChoices.join(",")
                  : q.newInputType,
            })),
          },
        ],
      ]),
    };

    onSubmit(newForm);
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
        {/* Add fields for questions here */}
        <NextButton to="/admin/managequestions" disabled={!isFormValid} />
      </form>
    </div>
  );
};

export default AddForm;