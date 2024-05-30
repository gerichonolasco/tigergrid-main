import { ChangeEvent, FC, FormEvent, useState } from "react";
import EditNextButton from "./EditForm/EditNextButton";
import { useNavigate } from "react-router-dom";

interface EditFormProps {
  form: {
    id?: number;
    title: string;
    description: string;
    imageSource: string;
    visible: boolean;
    sections: FormSection[];
  };
  onSubmit: (formData: Form) => void;
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

const EditForm: FC<EditFormProps> = ({ form, onSubmit }) => {
  const navigate = useNavigate()

  const [formTitle, setFormTitle] = useState<string>(form.title);
  const [description, setDescription] = useState<string>(form.description);
  const [sections, setSections] = useState<FormSection[]>(form.sections || []);

  console.log("Form:", form);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormTitle(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      id: form.id,
      title: formTitle,
      description: description,
      imageSource: form.imageSource,
      visible: form.visible,
      sections: form.sections,
    };
    
    console.log(JSON.stringify(formData));
    await fetch("http://localhost:8080/form/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })

    
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
        <EditNextButton to="/admin/editmanagequestions" form={form}/>
      </form>
    </div>
  );
};

export default EditForm;
