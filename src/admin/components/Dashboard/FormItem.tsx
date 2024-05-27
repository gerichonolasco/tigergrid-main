import { FC } from "react";

interface FormItemProps {
  title: string;
  content: string;
  showOnUserSide: boolean;
  toggleShowOnUserSide: () => void;
  onEdit: () => void;
  onView: () => void;
  onDelete: () => void; // Add onDelete prop
}

const FormItem: FC<FormItemProps> = ({
  title,
  content,
  showOnUserSide,
  toggleShowOnUserSide,
  onEdit,
  onView,
  onDelete, // Include onDelete prop
}) => {
  return (
    <div className="border border-gray-300 rounded p-3">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <p className="mb-2">{content}</p>
      <div className="flex justify-between items-center">
        <button
          className={`px-4 py-2 rounded ${
            showOnUserSide ? "bg-green-500" : "bg-gray-300"
          } text-white`}
          onClick={toggleShowOnUserSide}
        >
          {showOnUserSide ? "Hide" : "Show"}
        </button>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white"
            onClick={onView}
          >
            View
          </button>
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white"
            onClick={onEdit}
          >
            Edit
          </button>
          <button
            className="px-4 py-2 rounded bg-red-500 text-white"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormItem;