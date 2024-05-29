import { ChangeEvent, FC, FormEvent, useState } from "react";
import EditNextButton from "./EditForm/EditNextButton";

interface EditFormProps {
  form: {
    id: number;
    title: string;
    description: string;
    sections: FormSection[];
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
  const [sections, setSections] = useState<FormSection[]>(form.sections || []);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormTitle(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      title: formTitle,
      description: description,
      sections: sections,
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
        <EditNextButton to="/admin/editmanagequestions" formId={form.id} />
      </form>
    </div>
  );
};

export default EditForm;
