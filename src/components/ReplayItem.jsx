import { TbTriangleFilled } from "react-icons/tb";

const ReplayIteam = ({ title, description, votesCount, onSetModal }) => {
  return (
    <div
      onClick={onSetModal}
      className="px-6 py-2 cursor-pointer hover:bg-slate-50 duration-200"
    >
      <div className="flex items-center gap-8">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>

        <div>
          <button className="flex space-x-1 justify-center items-center shadow p-2 rounded-lg border">
            <TbTriangleFilled className="text-slate-400" />
            <span className="text-slate-500">{votesCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplayIteam;
