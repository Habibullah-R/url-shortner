import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, url }) => {
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
              onClick={() => alert("Update functionality")}
            >
              Update
            </button>
            <button
              className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition"
              onClick={() => alert("Delete functionality")}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
