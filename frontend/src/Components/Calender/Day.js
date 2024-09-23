import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDaySelected, handleupdateShowEventModal, updateSelectedEvent } from "../../Storage/Action/hrCalenderAction";

export default function Day({ day, rowIdx }) {
  const CalenderSlice = useSelector((state) => state.hrCalenderState);
  const dispatch = useDispatch();

  const [dayEvents, setDayEvents] = useState([]);

  useEffect(() => {
    const events = CalenderSlice.savedEvents.filter((evt) => {
      return evt.day === day.format("DD-MM-YY")
    });

    setDayEvents(events);
  }, [day, CalenderSlice.savedEvents]);

  function getCurrentDayClass() {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = CalenderSlice.daySelected;
    if (nowDay === currDay) {
      return `date-today`;
    } else if (currDay === slcDay) {
      return `date-selected`;
    } else {
      return "";
    }
  }

  const handleAddEvent = (dayclicked) => {
    const format = "DD-MM-YY";
    const currDay = dayclicked.format(format);

    dispatch(handleDaySelected(currDay));
    dispatch(handleupdateShowEventModal(true));
  }

  const handleSelectedEvent = (evt) =>{
    dispatch(updateSelectedEvent(evt))
  }

  return (
    <div className={`d-flex flex-wrap col-12 h-100 ${getCurrentDayClass(day)}`} onClick={() => { handleAddEvent(day) }}>
      <header className="text-center w-100 py-2">
        {/* {rowIdx === 0 && ( */}
        <p className="w-100 mb-1">
          {day.format("ddd").toUpperCase()}
        </p>
        {/* )} */}
        <p
          className={`text-sm p-1 my-1 text-center`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div className="w-100 calendar-title-min-height px-3">
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => handleSelectedEvent(evt)}
            className={`bg-${evt.label} rounded-2 px-2 cursorPointer text-light mb-2 text-break`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}
