import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { getMonth } from "../../util";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDaySelected, updateSmallCalendarMonth } from "../../Storage/CalenderSlice/CalenderSlice";
import { handleCurrentMonthArray, handleDaySelected, handleNextMonthAction, handlePrevMonthAction, hanldeupdateSmallCalendarMonth } from "../../Storage/Action/hrCalenderAction";

export default function SmallCalendar() {
  const CalenderSlice = useSelector((state) => state.hrCalenderState);
  const location = useLocation();
  const dispatch = useDispatch();

  function handlePrevMonth() {
    dispatch(handlePrevMonthAction(CalenderSlice.monthIndex - 1));
  }

  function handleNextMonth() {
    dispatch(handleNextMonthAction(CalenderSlice.monthIndex + 1));
  }

  useEffect(() => {
    dispatch(handleCurrentMonthArray(getMonth(CalenderSlice.monthIndex)))
  }, [CalenderSlice.monthIndex]);

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = CalenderSlice.daySelected;

    //date comparison
    const comparisionformat = "YYYY-MM-DD";
    const comparisionNowDay = dayjs().format(comparisionformat);
    const comparisionCurrDay = day.format(comparisionformat);

    if (nowDay === currDay) {
      return day.format("D").length === 1 ? `small-calender-date-today` : `small-calender-date-today-double-dight`;
    } else if (currDay === slcDay) {
      return day.format("D").length === 1 ? `small-calender-date-selected` : `small-calender-date-selected-double-dight`;
    } else if (new Date(comparisionCurrDay) > new Date(comparisionNowDay) && location.pathname === '/hr_dashboard/home/employee_details') {
      return "text-muted"
    }
    else {
      return "";
    }
  }

  const hanldeIsEventAvailable = (day) => {
    const events = CalenderSlice.savedEvents.filter((evt) => evt.day === day.format("DD-MM-YY"));

    return <span className={`${events.length > 0 ? "absolute-colander-dot" : ""}`}></span>
  }

  const handleSelectedDay = (selecDay) => {
    const format = "DD-MM-YY";
    const currDay = selecDay.format(format);

    dispatch(hanldeupdateSmallCalendarMonth(CalenderSlice.monthIndex));
    dispatch(handleDaySelected(currDay))
  }

  const hanldeButton = (day, idx) => {
    //date comparison
    const comparisionformat = "YYYY-MM-DD";
    const comparisionNowDay = dayjs().format(comparisionformat);
    const comparisionCurrDay = day.format(comparisionformat);

    return <button
      key={idx}
      onClick={new Date(comparisionCurrDay) > new Date(comparisionNowDay) && location.pathname === '/hr_dashboard/home/employee_details' ?
        null
        :
        () => {
          handleSelectedDay(day)
        }}
      className={"small-calender-column bg-transparent border-0 position-relative"}
    >
      <span className={`${getDayClass(day)}`}>{day.format("D")}</span>

      {hanldeIsEventAvailable(day)}
    </button>
  }


  return (
    <div>
      <header className="d-flex justify-content-between align-items-center mb-3">
        <p className="text-secondary fw-bold mb-2">
          {dayjs(new Date(dayjs().year(), CalenderSlice.monthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <div className="mb-2">
          <button onClick={handlePrevMonth} className="btn border-0">
            <IoIosArrowBack />
          </button>
          <button onClick={handleNextMonth} className="btn border-0">
            <IoIosArrowForward />
          </button>
        </div>
      </header>

      <div className="w-100 d-flex flex-wrap text-center">
        {CalenderSlice.currentMonthArray.length > 0 ?
          CalenderSlice.currentMonthArray[0].map((day, i) => (
            <span key={i} className="small-calender-column row align-items-center justify-content-center">
              {day.format("dd").charAt(0)}
            </span>
          ))
          :
          null}
      </div>

      <div className="w-100 d-flex flex-wrap ">
        {CalenderSlice.currentMonthArray.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => {
              return hanldeButton(day, idx)
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
