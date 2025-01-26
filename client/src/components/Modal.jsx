import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import ConfirmationPopup from "./ConfirmationPopup";
import { toast } from "react-toastify";

const Modal = ({ isOpen, onClose, url }) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [actionType, setActionType] = useState("");
  const [loading , setLoading] = useState(false)

  const updateShortUrl = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/url/update/${url._id}`, {
        method: "PUT"
      });
      const data = await response.json();
      if (!data.success) {
        toast.error(data.message);
        return;
      }
      setLoading(false);
      onClose();
      toast.success(data.message)
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteUrl = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/url/delete/${url._id}`, {
        method: "DELETE"
      });
      const data = await response.json();
      if (!data.success) {
        toast.error(data.message);
        return;
      }
      setLoading(false);
      onClose();
      toast.success(data.message)
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleActionClick = (action) => {
    setActionType(action);
    setIsConfirmationOpen(true);
  };

  const handleConfirm = async () => {
    if (actionType === "Update") {
      await updateShortUrl();
    } else if (actionType === "Delete") {
      await deleteUrl();
    }
    setIsConfirmationOpen(false);
  };

  const handleCancel = () => {
    setIsConfirmationOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-2xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-purple-500 hover:text-purple-700"
        >
          <IoClose size={24} />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col space-y-2">
          {/* Header */}
          <h2 className="text-2xl font-extrabold text-purple-600 text-center">
            URL Details
          </h2>

          {/* Long URL */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-gray-600">
              Long URL
            </label>
            <textarea
              value={url?.longUrl || ""}
              readOnly
              className="w-full focus:ring-2 focus:ring-purple-400 focus:outline-none p-2 border border-gray-300 rounded-lg bg-purple-50 text-gray-700 resize-none"
              rows={2}
            />
          </div>

          {/* Short URL */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Short URL
            </label>
            <input
              value={url?.shortUrl || ""}
              readOnly
              className="w-full focus:ring-2 focus:ring-purple-400 focus:outline-none p-2 border border-gray-300 rounded-lg bg-purple-50 text-gray-700"
            />
          </div>

          {/* Access counts */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Total clicks / Accesses
            </label>
            <input
              value={url?.accessCount || "0"}
              readOnly
              className="w-full focus:ring-2 focus:ring-purple-400 focus:outline-none p-2 border border-gray-300 rounded-lg bg-purple-50 text-gray-700"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
              onClick={() => handleActionClick("Update")}
              disabled={loading}
            >
              Update
            </button>
            <button
              className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition"
              onClick={() => handleActionClick("Delete")}
              disabled={loading}
            >
              Delete
            </button>
          </div>
        </div>

        {/* Confirmation Popup */}
        <ConfirmationPopup
          isOpen={isConfirmationOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          message={`Are you sure you want to ${actionType === "Update" ? `${actionType.toLowerCase()} short url`    :actionType.toLowerCase()} this URL?`}
          loading={loading}
          actionType={actionType}
        />
      </div>
    </div>
  );
};

export default Modal;
