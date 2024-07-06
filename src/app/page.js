"use client";

import Button from "@/components/Button";
import ReplayFormModal from "@/components/ReplayFormModal";
import ReplayItem from "@/components/ReplayItem";
import ReplayItemModal from "@/components/ReplayItemModal";
import replays from "@/utils/data/replay";
import { useState } from "react";

export default function Home() {
  const [showReplayPopupForm, setShowReplayPopupForm] = useState(false);
  const [showReplayPopupItem, setShowReplayPopupItem] = useState(null);

  // HANDLE SHOW REPLAY POPUP
  const handleOpenReplayPopupForm = () => {
    setShowReplayPopupForm(true);
  };

  // HANDLE SHOW REPLAY ITEM POPUP
  const handleOpenReplayPopupItem = (replay) => {
    setShowReplayPopupItem(replay);
  };

  return (
    <main className="bg-white md:max-w-2xl shadow mx-auto md:rounded-lg md:mt-8 overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-6">
        <h1 className="text-xl font-bold">Sujon Sheikh</h1>
        <p className="text-opacity-90 text-slate-700">
          I am a Software Engineer
        </p>
      </div>

      {/* Filter button area */}
      <div className="bg-gray-100 px-6 py-4 border-b flex">
        <div className="grow"></div>

        <div>
          <Button primary onClick={handleOpenReplayPopupForm}>
            Make a suggestion
          </Button>
        </div>
      </div>

      {/* Replay Item */}
      <div className="py-6">
        {replays.map((replay) => (
          <ReplayItem
            key={replay.id}
            {...replay}
            onSetModal={() => handleOpenReplayPopupItem(replay)}
          />
        ))}
      </div>

      {showReplayPopupForm && (
        <ReplayFormModal onSetModal={setShowReplayPopupForm} />
      )}

      <div>
        {showReplayPopupItem && (
          <ReplayItemModal
            {...showReplayPopupItem}
            onSetModal={setShowReplayPopupItem}
          />
        )}
      </div>
    </main>
  );
}
