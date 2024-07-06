import { TbTriangleFilled } from "react-icons/tb";

const Replayiteam = () => {
  return (
    <div className="px-6 py-2">
      <div className="flex items-center gap-8">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Post more videos</h2>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            reprehenderit blanditiis porro expedita asperiores omnis voluptatum
            voluptas a sint, rerum atque ut delectus officia rem nihil amet
            commodi sequi molestiae?
          </p>
        </div>

        <div>
          <button className="flex space-x-1 justify-center items-center shadow p-2 rounded-lg border">
            <TbTriangleFilled className="text-slate-400" />
            <span className="text-slate-500">50</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Replayiteam;
