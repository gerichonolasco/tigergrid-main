
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Form {
  id: number;
  title: string;
  description: string;
  sections: Map<number, any>;
}

const LandingPage: FC = () => {
  const [forms, setForms] = useState<Form[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const response = await fetch("http://localhost:8080/form/getAll");
      if (!response.ok) {
        throw new Error("Failed to fetch forms. Server responded with status: " + response.status);
      }
      const result: Form[] = await response.json();
      setForms(result);
    } catch (error) {
      console.error("Error fetching forms:", error);
    }
  };

  const handleAddFeedbackClick = (formId: number) => {
    navigate(`/form/${formId}`);
  };

  return (
    <>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 mx-4">
        {forms.map((form) => (
          <div
            key={form.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {form.title}
              </h3>
              <p className="text-gray-600">{form.description}</p>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => handleAddFeedbackClick(form.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-500"
                >
                  Add Feedback
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingPage;