import React, { useEffect } from 'react'
import CalendarHeader from '../../Components/Calender/CalendarHeader';
import Month from '../../Components/Calender/Month'
import EventModal from '../../Components/Calender/EventModal';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from '../../Storage/Action/hrCalenderAction';
import { toast } from 'react-toastify';

const SchedulesManagement = () => {
  const CalenderSlice = useSelector((state) => state.hrCalenderState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (CalenderSlice.error) {
      toast(CalenderSlice.error, {
        position: "top-right",
        type: 'error',
        onOpen: () => { dispatch(clearErrors) }
      })
      return
    }
  }, [CalenderSlice.error])

  return (
    <main className="col-xl-12 py-4">
      <div className="container-fluid">

        {CalenderSlice.showEventModal && <EventModal />}

        <div className="card border-0 rounded-4">
          <div className="card-body row col-12 align-items-center">
            <CalendarHeader />
            <div className="row">
              <Month month={CalenderSlice.currentMonthArray} />
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default SchedulesManagement