import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import EditNextButton from "./EditForm/EditNextButton";

interface EditFormProps {
  form: {
    title: string;
    description: string;
    sections: Map<number, FormSection>;
  };
  onSubmit: (formData: any) => void;
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

const EditForm: FC<EditFormProps> = ({ form, onSubmit }) => {
  const [formTitle, setFormTitle] = useState<string>(form.title);
  const [description, setDescription] = useState<string>(form.description);
  const [sections, setSections] = useState<Map<number, FormSection>>(form.sections);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormTitle(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleQuestionChange = (event: ChangeEvent<HTMLInputElement>, sectionId: number, questionId: number) => {
    const updatedSections = new Map(sections);
    const section = updatedSections.get(sectionId);
    if (section) {
      const questionIndex = section.answers.findIndex(q => q.id === questionId);
      if (questionIndex !== -1) {
        section.answers[questionIndex].question = event.target.value;
        setSections(updatedSections);
      }
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      title: formTitle,
      description: description,
      sections: Array.from(sections.values()),
    };
    onSubmit(formData);
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <form
        className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md p-6"
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
        {/* Add fields for questions here */}
        <EditNextButton to="/admin/editmanagequestions" />
      </form>
    </div>
  );
};

export default EditForm;
