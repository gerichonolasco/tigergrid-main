import { FC } from "react";

interface FormQuestion {
  id: number;
  newQuestion: string;
  newInputType: string;
  newDropdownChoices: string[];
  page: number;
  placeholder?: string;
}

interface FormDropdown {
  id: number;
  newQuestion: string;
  newInputType: string;
  newDropdownChoices: string[];
  page: number;
  placeholder?: string;
}

interface CustomAnswer {
  id: number;
  answer: string;
}

interface FormSection {
  id: number,
  title: string,
  description: string,
  visible: boolean,
  sections: FormSection[],
  dropdowns: FormDropdown[],
  questions: FormQuestion[],
  customAnswers: CustomAnswer[]
}

interface FormResponseProps {
  id: number;
  title: string;
  sections: FormSection[];
}

const FormResponse: FC<FormResponseProps> = ({ id, title, sections = [] }) => {
  return (
    <div className="form-response">
      {sections.map((section, sectionIndex) => (
        <div key={`section-${sectionIndex}`} className="mb-4">
          <table className="w-full text-md bg-white shadow-md rounded mb-4 border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-3 bg-gray-100 border-b border-gray-300 text-center">User</th>
                {[...section.questions, ...section.dropdowns].sort((a, b) => a.id - b.id).map((item, itemIndex) => (
                  <th key={`i-${sectionIndex}-${itemIndex}`} className="py-2 px-3 bg-gray-100 border-b border-gray-300 text-center">
                    {item.newQuestion}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
      ))}
    </div>
  );
};

export default FormResponse;
