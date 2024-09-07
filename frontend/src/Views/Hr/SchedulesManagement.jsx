import React, { useContext, useEffect, useState } from 'react'
import CalendarHeader from '../../Components/Calender/CalendarHeader';
import Month from '../../Components/Calender/Month'
import { getMonth } from "../../util";
import EventModal from '../../Components/Calender/EventModal';
import { useSelector } from 'react-redux';

const SchedulesManagement = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const CalenderSlice = useSelector((state) => state.calender);

  useEffect(() => {
    setCurrentMonth(getMonth(CalenderSlice.monthIndex));
  }, [CalenderSlice.monthIndex]);

  return (
    <main className="col-xl-12 py-4">
      <div className="container-fluid">

        {CalenderSlice.showEventModal && <EventModal />}

        <div className="card border-0 rounded-4">
          <div className="card-body row col-12 align-items-center">
            <CalendarHeader />
            <div className="row">
              <Month month={currenMonth} />
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default SchedulesManagement