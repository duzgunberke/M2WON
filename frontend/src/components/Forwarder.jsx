import React from "react"
import ReactDOM from "react-dom/client";
import {
  useNavigate
} from "react-router-dom";

const Forwarder = () => {

  const navigate = useNavigate();
  const handleClick = () => navigate('/login');
  return (


    <button class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    onClick = {
      handleClick
    } >
    UPDATE DISCORD ID 
    </button>
  )

}




export default Forwarder;