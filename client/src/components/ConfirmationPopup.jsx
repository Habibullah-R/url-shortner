import React from "react";

const ConfirmationPopup = ({
  isOpen,
  onConfirm,
  onCancel,
  message,
  loading,
  actionType,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-md p-6 relative">
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl text-center font-semibold text-gray-800">
            {message}
          </h3>

          <div className="flex justify-evenly mt-4">
            <button
              onClick={onConfirm}
              className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition"
            >
              {loading
                ? actionType === "Update"
                  ? "Updating..."
                  : "Deleting..."
                : ""}
                {!loading
                ? actionType === "Update"
                  ? "Update"
                  : "Delete"
                : ""}
            </button>
            <button
              onClick={onCancel}
              className="bg-gray-500 cursor-pointer text-white px-4 py-2 rounded-md shadow hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
