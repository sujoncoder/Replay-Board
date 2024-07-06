import { IoCloseCircleOutline } from "react-icons/io5";

const Popup = ({ onSetModal, children, title }) => {
  return (
    <div
      onClick={() => onSetModal(false)}
      className="fixed inset-0 bg-opacity-80 flex items-center bg-black"
    >
      {/* close */}
      <div
        onClick={() => onSetModal()}
        className="fixed top-2 right-4 hover:bg-red-500 duration-200 p-1 hover:bg-opacity-50 rounded-full text-slate-100 cursor-pointer"
      >
        <IoCloseCircleOutline className="w-10 h-10" />
      </div>
      {/* ------------------- */}
      <div className="w-full">
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white md:max-w-2xl mx-auto py-4 md:rounded-lg"
        >
          <h2 className="text-lg text-slate-500 font-semibold text-center border-b pb-2">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
