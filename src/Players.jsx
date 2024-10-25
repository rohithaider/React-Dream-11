import { getPlayersData } from "./data/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";
import SelectedPlayers from "./SelectedPlayers";

export default function Players({ selectedPlayer, onSelect, onDelete }) {
  const players = getPlayersData();
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <section className="w-11/12 mx-auto">
      <div className="pt-4 flex justify-between items-center pb-4 ">
        {isAvailable ? (
          <h1 className="font-bold">Available Players</h1>
        ) : (
          <h1 className="font-bold">
            Selected Players: {selectedPlayer.length}/6
          </h1>
        )}
        <div className="flex border rounded-2xl ">
          <p
            className={`p-2 ${isAvailable ? "bg-[#E7FE29]" : "bg-gray-300"} rounded-l-2xl`}
            onClick={() => setIsAvailable(true)}
          >
            Available
          </p>
          <p
            className={`p-2 ${!isAvailable ? "bg-[#E7FE29]" : "bg-gray-300"} rounded-r-2xl`}
            onClick={() => setIsAvailable(false)}
          >
            Selected({selectedPlayer.length})
          </p>
        </div>
      </div>

      {isAvailable && (
        <div className="border-red-500 grid grid-cols-1 md:grid-cols-3 gap-5">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} onSelect={onSelect} />
          ))}
        </div>
      )}

      {!isAvailable && (
        <div className="space-y-4">
          {selectedPlayer.length === 0 ? (
            <p className="text-center font-bold text-orange-600 text-3xl">No players have been selected. Click on Add More bellow for adding players. </p>
          ) : (
            selectedPlayer.map((player) => (
              <SelectedPlayers
                key={player.id}
                player={player}
                onDelete={onDelete}
              />
            ))
          )}
          <button
            className="btn bg-[#E7FE29] mt-5"
            onClick={() => setIsAvailable(true)}
          >
            Add More
          </button>
        </div>
      )}
    </section>
  );
}
