import Virat from "./assets/players-images/virat-kohli.png";
import Profile from "../assets/profile.png";
import Flag from '../assets/flag.png'
import { getImgUrl } from "./utils/utility";
export default function PlayerCard({player,onSelect}) {
  return (
    <div className="card bg-base-100 w-[100] shadow-xl">
      <figure className="px-10 pt-10 max-w-full h-96 ">
        <img src={getImgUrl(player.image)} alt="Shoes" className="rounded-2xl border object-cover w-full h-full" />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">
          <img src={Profile} alt="" />
          <h2 className="card-title">{player.name}</h2>
        </div>
        <div className="flex justify-between gap-24">
        <div className="flex items-center gap-2 ">
          <img src={Flag} alt="" className="w-4 "/>
          <p>{player.country}</p>

        </div>
        <p className="bg-gray-100 p-2  rounded-lg text-center ">{player.role}</p>

        </div>
        <hr />
        <h1 className="font-bold">Rating</h1>
        <div className="flex justify-between">
          <h1>Batting-type:</h1>
          <h1>{player.battingType}</h1>
        </div>
        <div className="flex justify-between">
          <h1>Bowling-type:</h1>
          <h1>{player.bowlingType}</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1>Price:${player.biddingPrice}</h1>
          <button href="#" className="border p-1 rounded-lg " onClick={(e)=>onSelect(e,player)}>Choose Player</button>
        </div>
        
        
      </div>
    </div>
  );
}
