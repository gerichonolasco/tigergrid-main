import React, { FC } from "react";

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
  sections: Map<number, ResponseSection>;
  users: UserInfo[];
  onClose: () => void;
}

const FormResponse: FC<FormResponseProps> = ({ formTitle, sections, users, onClose }) => {
  const sectionArray = Array.from(sections.values());
  const questions = sectionArray.length > 0 ? sectionArray[0].answers : [];

  return (
    <div className="form-response">
      <h2 className="form-title text-2xl font-bold mb-4 text-center">{formTitle}</h2>
      <table className="w-full text-md bg-white shadow-md rounded mb-4 border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-3 bg-gray-100 border-b border-gray-300 text-center">User</th>
            {questions.map((question, index) => (
              <th key={index} className="py-2 px-3 bg-gray-100 border-b border-gray-300 text-center">{question.question}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, userIndex) => (
            <tr key={userIndex} className={userIndex % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="py-2 px-3 border-b border-gray-300 text-center">{`${user.firstName} ${user.lastName}`}</td>
              {questions.map((question, questionIndex) => (
                <td key={questionIndex} className="py-2 px-3 border-b border-gray-300 text-center">
                  {sectionArray[0].answers[questionIndex].answer}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormResponse;
