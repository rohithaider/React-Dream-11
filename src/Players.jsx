import PlayerCard from "./PlayerCard";

export default function Players(){
    return (
       <section className="w-11/12 mx-auto">
         <div className=" pt-4 flex justify-between items-center pb-4">
            <h1 className="font-bold">Available Players</h1>
            <div className="flex border  gap-2 rounded-lg">
                <p className="bg-[#E7FE29] p-2">Available</p>
                <p className="p-2">Selected(0)</p>
            </div>
        </div>
        <div className=" border-red-500 grid grid-cols-3 gap-5">
            <PlayerCard/>
            <PlayerCard/>
            <PlayerCard/>
            <PlayerCard/>
            <PlayerCard/>
            <PlayerCard/>

        </div>
       </section>
    );
}