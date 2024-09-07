import dayjs from "dayjs";
import React, { useContext } from "react";
import Images from "../../Utils/Images";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Labels from "./Labels";
import { useDispatch, useSelector } from "react-redux";
import { updatemonthIndex } from "../../Storage/CalenderSlice/CalenderSlice";

export default function CalendarHeader() {
  const CalenderSlice = useSelector((state) => state.calender);
  const dispatch = useDispatch();

  function handlePrevMonth() {
    dispatch(updatemonthIndex(CalenderSlice.monthIndex - 1));
  }
  
  function handleNextMonth() {
    dispatch(updatemonthIndex(CalenderSlice.monthIndex + 1));
  }

  function handleReset() {
    dispatch(updatemonthIndex(
      CalenderSlice.monthIndex === dayjs().month()
        ? CalenderSlice.monthIndex + Math.random()
        : dayjs().month())
    );
  }
  return (
    <>
      <header className="py-2 row align-items-center justify-content-between w-100">
        <div className="col col-md-6">
          <img src={Images.calenderLogo} alt="calendar" width={"60px"} />
          <h5 className="ps-3 text-secondary fond-bold d-inline-block">
            Calendar
          </h5>
        </div>


        <div className="col col-md-6 col-lg-3 row justify-content-end">
          <div className="col text-end">
            <button
              onClick={handleReset}
              className="btn btn-outline-secondary rounded py-2 px-4 ms-5"
            >
              Today
            </button>
          </div>

          <div className="col text-end">
            <button onClick={handlePrevMonth} className="btn border-0">
              <IoIosArrowBack />
            </button>
            <button onClick={handleNextMonth} className="btn border-0">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </header>

      <div className="col-12 col-md-6 mb-4">
        <h4 className="text-secondary fw-bold ps-3 pt-2">
          {dayjs(new Date(dayjs().year(), CalenderSlice.monthIndex)).format(
            "MMMM YYYY"
          )}
        </h4>
      </div>

      <div className="col-12 col-md-6 row">
        <Labels />
      </div>
    </>
  );
}
