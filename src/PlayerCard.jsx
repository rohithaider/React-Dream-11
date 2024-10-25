import Virat from "./assets/players-images/virat-kohli.png";
import Profile from "../assets/profile.png";
import Flag from '../assets/flag.png'
export default function PlayerCard() {
  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={Virat} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">
          <img src={Profile} alt="" />
          <h2 className="card-title">Virat Kohli</h2>
        </div>
        <div className="flex justify-between gap-24">
        <div className="flex items-center gap-2 ">
          <img src={Flag} alt="" className="w-4 "/>
          <p>India</p>

        </div>
        <p className="bg-gray-100 p-2 rounded-lg">All-Rounder</p>

        </div>
        <hr />
        <h1 className="font-bold">Rating</h1>
        <div className="flex justify-between">
          <h1>Batting-type:</h1>
          <h1>Left-hand</h1>
        </div>
        <div className="flex justify-between">
          <h1>Bowling-type:</h1>
          <h1>Fast-medium</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1>Price:$150000</h1>
          <a href="#" className="border p-1 rounded-lg">Choose Player</a>
        </div>
        
        
      </div>
    </div>
  );
}
