import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
      <h2 className="form-title text-2xl font-bold mb-4 text-center">{title}</h2>
      {sections.map((section, sectionIndex) => (
        <div key={`section-${sectionIndex}`} className="mb-4">
          <h3 className="section-title text-xl font-bold mb-2">{section.title}</h3>
          <table className="w-full text-md bg-white shadow-md rounded mb-4 border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-3 bg-gray-100 border-b border-gray-300 text-center">Question</th>
              </tr>
            </thead>
            <tbody>
              {section.questions.map((question, questionIndex) => (
                <tr key={`q-${sectionIndex}-${questionIndex}`} className={questionIndex % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-2 px-3 border-b border-gray-300 text-center">{question.newQuestion}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="w-full text-md bg-white shadow-md rounded mb-4 border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-3 bg-gray-100 border-b border-gray-300 text-center">Dropdown</th>
              </tr>
            </thead>
            <tbody>
              {section.dropdowns.map((question, questionIndex) => (
                <tr key={`q-${sectionIndex}-${questionIndex}`} className={questionIndex % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-2 px-3 border-b border-gray-300 text-center">{question.newQuestion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default FormResponse;
