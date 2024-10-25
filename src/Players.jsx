export default function Players(){
    return (
        <div className="w-11/12 mx-auto pt-4 flex justify-between items-center pb-4">
            <h1 className="font-bold">Available Players</h1>
            <div className="flex border  gap-2 rounded-lg">
                <p className="bg-[#E7FE29] p-2">Available</p>
                <p className="p-2">Selected(0)</p>
            </div>
        </div>
        
    );
}