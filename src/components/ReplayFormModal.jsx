import Button from "./Button";
import Popup from "./Popup";

const ReplayFormModal = ({ onSetModal }) => {
  return (
    <Popup onSetModal={onSetModal} title={"Make a suggestion"}>
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
    </Popup>
  );
};

export default ReplayFormModal;
