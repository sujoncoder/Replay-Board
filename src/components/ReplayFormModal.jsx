import { IoCloseCircleOutline } from "react-icons/io5";
import Button from "./Button";

const ReplayFormModal = ({ onSetModal }) => {
  return (
    <div className="fixed inset-0 bg-opacity-80 flex items-center bg-black">
      {/* close */}
      <div
        onClick={() => onSetModal()}
        className="fixed top-2 right-4 hover:bg-red-500 duration-200 p-1 hover:bg-opacity-50 rounded-full text-slate-100 cursor-pointer"
      >
        <IoCloseCircleOutline className="w-10 h-10" />
      </div>
      {/* ------------------- */}
      <div className="w-full">
        <div className="bg-white md:max-w-2xl mx-auto py-4 md:rounded-lg">
          <h2 className="text-lg text-slate-500 font-semibold text-center border-b pb-2">
            Make a suggestion
          </h2>
          <form className="p-8">
            <label className="text-lg text-slate-600 block pb-2">Title</label>
            <input
              type="text"
              placeholder="a short descriptive title"
              className="w-full p-2 border rounded-md"
            />
            <label className="text-lg text-slate-600 block pt-4 pb-2">
              Descrption
            </label>
            <textarea
              className="border w-full p-2 rounded-md"
              placeholder="Please include any details"
            ></textarea>

            <div className="mt-4 flex justify-end gap-4">
              <Button>Attach file</Button>
              <Button primary>Create post</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReplayFormModal;
