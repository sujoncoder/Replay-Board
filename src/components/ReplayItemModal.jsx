import { TbTriangleFilled } from "react-icons/tb";
import Button from "./Button";
import Popup from "./Popup";

const ReplayItemModal = ({ onSetModal, title, description, votesCount }) => {
  return (
    <Popup onSetModal={onSetModal}>
      <div className="px-6 py-4 space-y-2">
        <h1 className="text-slate-700 text-xl">{title}</h1>
        <p className="text-slate-500">{description}</p>
      </div>

      <div className="px-6 flex justify-end">
        <Button primary className="flex space-x-2 items-center">
          <TbTriangleFilled className="text-slate-100" />
          <span>{votesCount}</span>
        </Button>
      </div>
    </Popup>
  );
};

export default ReplayItemModal;
