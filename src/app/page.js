"use client";

import Button from "@/components/Button";
import ReplayFormModal from "@/components/ReplayFormModal";
import Replayiteam from "@/components/Replayiteam";
import { useState } from "react";

export default function Home() {
  const [showReplayPopup, setShowReplayPopup] = useState(false);

  // HANDLE SHOW REPLAY POPUP
  const handleOpenReplayPopup = () => {
    setShowReplayPopup(!false);
  };

  return (
    <main className="bg-white md:max-w-2xl shadow mx-auto md:rounded-lg md:mt-8 overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-6">
        <h1 className="text-xl font-bold">Sujon Sheikh</h1>
        <p className="text-opacity-90 text-slate-700">I am Softwar engineer</p>
      </div>

      {/* Filter button area  */}
      <div className="bg-gray-100 px-6 py-4 border-b flex">
        <div className="grow"></div>

        <div>
          <Button
            primary
            onClick={handleOpenReplayPopup}
            className="bg-blue-500 px-4 py-1.5 shadow hover:brightness-105 duration-200 active:bg-blue-600 rounded-full text-white text-opacity-90"
          >
            Make a suggestion
          </Button>
        </div>
      </div>

      {/* Replay Item  */}
      <div className="py-6">
        <Replayiteam />
        <Replayiteam />
        <Replayiteam />
        <Replayiteam />
      </div>

      {showReplayPopup && <ReplayFormModal onSetModal={setShowReplayPopup} />}
    </main>
  );
}
