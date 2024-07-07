import axios from "axios";
import { useState } from "react";
import Button from "./Button";
import Popup from "./Popup";

const ReplayFormModal = ({ onSetModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // HANDLE CREATE POST
  const hadnleCreatePost = () => {
    axios.post("", { title, description }).then((res) => console.log(res));
  };

  return (
    <Popup onSetModal={onSetModal} title={"Make a suggestion"}>
      <form className="p-8">
        <label className="text-lg text-slate-600 block pb-2">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="a short descriptive title"
          className="w-full p-2 border rounded-md"
        />

        <label className="text-lg text-slate-600 block pt-4 pb-2">
          Descrption
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border w-full p-2 rounded-md"
          placeholder="Please include any details"
        ></textarea>

        <div className="mt-4 flex justify-end gap-4">
          <Button>Attach file</Button>
          <Button primary onClick={hadnleCreatePost}>
            Create post
          </Button>
        </div>
      </form>
    </Popup>
  );
};

export default ReplayFormModal;
