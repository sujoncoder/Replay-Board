import { useState } from "react";
import Avatar from "./Avatar";
import Button from "./Button";

const ReplayItemPopupComment = () => {
  const [commentText, setCommentText] = useState("");
  return (
    <div className="px-6 space-y-4 border-t mt-4">
      <div className="flex gap-4 pb-8 pt-6">
        <Avatar />
        <div>
          <p className="text-slate-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quasi
            officiis harum laborum ipsam ducimus suscipit consectetur eos.
            Voluptas voluptates accusantium dolorum illum eos similique
            accusamus odio consectetur exercitationem incidunt.
          </p>

          <div className="flex gap-4 items-center mt-3 text-sm">
            <h4 className="text-slate-500">Sujon Sheikh</h4>
            <span className="text-slate-400">Just now</span>
          </div>
        </div>
      </div>

      <form>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="let us know what you think..."
          className="border-2 w-full h-20 px-2 rounded-md"
        />
        <div className="flex justify-end items-center mt-2 gap-4">
          <Button>Attach files</Button>
          <Button primary disabled={commentText === ""}>
            Comment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReplayItemPopupComment;
