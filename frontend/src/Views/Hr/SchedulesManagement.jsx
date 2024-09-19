import React, { useEffect } from 'react'
import CalendarHeader from '../../Components/Calender/CalendarHeader';
import Month from '../../Components/Calender/Month'
import { getMonth } from "../../util";
import dayjs from "dayjs";
import EventModal from '../../Components/Calender/EventModal';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../Services/axiosInstance';
import { updateMonthAction } from '../../Storage/Action/hrCalenderAction';

const SchedulesManagement = () => {  
  const CalenderSlice = useSelector((state) => state.hrCalenderState);
  const dispatch = useDispatch();

  useEffect(() => { 
    // dispatch(updateMonthAction(getMonth()))
    dispatch(updateMonthAction(dayjs().month()))
    // fetchSechedule()
  }, []);

  const fetchSechedule = async() =>{
    try{
      const res = await axiosInstance.get("/get_schedules")
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }

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