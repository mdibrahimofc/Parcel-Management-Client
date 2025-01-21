import toast from "react-hot-toast";

const CustomToast = ({ id, onConfirm, onCancel }) => {
    return (
      <div className="flex items-center space-x-4">
        <span>Are you sure you want to delete this item?</span>
        <button
          onClick={() => {
            toast.dismiss(id); // Close the toast
            onConfirm(); // Perform delete action
          }}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Yes
        </button>
        <button
          onClick={() => toast.dismiss(id)} // Close the toast without deleting
          className="px-3 py-1 bg-gray-300 text-black rounded"
        >
          No
        </button>
      </div>
    );
  };

  export default CustomToast