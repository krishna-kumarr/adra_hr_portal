import React from "react";
import plusImg from "../assets/plus.svg";
import { useDispatch } from "react-redux"; 
import { handleupdateShowEventModal } from "../../Storage/Action/hrCalenderAction";


export default function CreateEventButton() {
  const dispatch = useDispatch();

  const handleEventModal = () =>{
    dispatch(handleupdateShowEventModal(true))
  }
  
  return (
    <button
      onClick={handleEventModal}
      className="btn border-2 shadow rounded-2"
    >
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
}
