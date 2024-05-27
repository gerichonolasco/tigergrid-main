import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ResponseAnswer {
  question: string;
  answer: number | string;
}

interface ResponseSection {
  id: number;
  title: string;
  answers: ResponseAnswer[];
}

interface UserInfo {
  firstName: string;
  lastName: string;
}

interface FormResponseProps {
  formTitle: string;
  users: UserInfo[];
  onClose: () => void;
}

const FormResponse: FC<FormResponseProps> = ({ formTitle, users = [], onClose }) => {
  const location = useLocation();
  const form = location.state?.form;

  const [formSections, setFormSections] = useState<ResponseSection[]>([]);

  useEffect(() => {
    if (form && form.id) {
      const fetchFormSections = async () => {
        try {
          const response = await fetch(`http://localhost:8080/question/getByForm/${form.id}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch questions. Server responded with status: ${response.status}`);
          }

          const data = await response.json();
          setFormSections(data);
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      };

      fetchFormSections();
    }
  }, [form]);

  if (!form) {
    return <div>Error: Form data is missing</div>;
  }

  return (
    <div className="form-response">
      <h2 className="form-title text-2xl font-bold mb-4 text-center">{formTitle}</h2>
      <div className="overflow-auto">
        <table className="w-full text-md bg-white shadow-md rounded mb-4 border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-3 bg-gray-100 border-b border-gray-300 text-center">User</th>
              {formSections.length > 0 && formSections[0].answers && formSections[0].answers.map((question, index) => (
                <th key={`q-${index}`} className="py-2 px-3 bg-gray-100 border-b border-gray-300 text-center">
                  {question.question}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, userIndex) => (
              <tr key={`user-${userIndex}`} className={userIndex % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="py-2 px-3 border-b border-gray-300 text-center">{`${user.firstName} ${user.lastName}`}</td>
                {formSections.flatMap(section =>
                  section.answers && section.answers.map((answer, answerIndex) => (
                    <td key={`a-${userIndex}-${section.id}-${answerIndex}`} className="py-2 px-3 border-b border-gray-300 text-center">
                      {answer.answer}
                    </td>
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default FormResponse;
