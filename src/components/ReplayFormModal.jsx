import { useState } from "react";
import Button from "./Button";
import Popup from "./Popup";

const ReplayFormModal = ({ onSetModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // HANDLE CREATE POST
  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/replay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      onSetModal(false);

      if (response.ok) {
        const data = await response.json();
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // HANDLE FILE ATTACHMENT
  const handleAttachment = async (e) => {
    const files = [...e.target.files];
    const data = new FormData();
    for (const file of files) {
      data.append("file", file);
    }

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: data, // Send FormData directly
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        console.error("Failed to upload files");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
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
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border w-full p-2 rounded-md"
          placeholder="Please include any details"
        ></textarea>

        <div className="mt-4 flex justify-end gap-4">
          <label className="flex items-center text-slate-500 cursor-pointer">
            <span>Attach file</span>
            <input
              multiple
              onChange={handleAttachment}
              type="file"
              className="hidden"
            />
          </label>
          <Button primary onClick={handleCreatePost}>
            Create post
          </Button>
        </div>
      </form>
    </Popup>
  );
};

export default ReplayFormModal;
