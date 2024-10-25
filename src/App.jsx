import Header from "./Header";
import Players from "./Players";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [balance, setBalance] = useState(0);
  const [selectedPlayer, setSelectedPlayer]=useState([])

  function handleClick() {
    setBalance(balance + 60000000);
    notify();
  }
  function notify() {
    toast("60000000 coins has been added to your balance!");
  }

  function error(player) {
    toast.warn(`${player.name} is already selected! Please select another player.`,{position: "top-right"});
  }
  function success(player) {
    toast.success(`${player.name} is selected!`,{position: "top-right"});
  }
  function errorBalance() {
    toast.error(`Please add credits first`,{position: "top-right"});
  }
  function errorSelection() {
    toast.error(`Only six players can be selected`,{position: "top-right"});
  }



  function handleSelect(e,player){
    e.stopPropagation();
    const found = selectedPlayer.find((item)=>{
      return  item.id === player.id
     });

     if(balance ===0 || player.biddingPrice>balance ){
      errorBalance();
      return;
     }
     if (selectedPlayer.length >= 6) {
      errorSelection();
      return;
    }
     

     if(!found){
      setBalance(balance-player.biddingPrice)
      setSelectedPlayer([...selectedPlayer,player])
      success(player);
    }else{
      error(player)
    }

    

  }

  function handleDelete(deletedPlayer){
    const filteredIPlayers = selectedPlayer.filter((player)=>(player.id!==deletedPlayer.id))
    setSelectedPlayer([...filteredIPlayers])
    
  }
  

  return (
    <>
      <ToastContainer position="top-center"/>
      <Header balance={balance} onChange={handleClick} />
      <main>
        <Players selectedPlayer={selectedPlayer} onSelect={handleSelect} onDelete={handleDelete}/>
      </main>
    </>
  );
}
