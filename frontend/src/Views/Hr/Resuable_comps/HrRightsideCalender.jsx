import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import SmallCalendar from '../../../Components/Calender/SmallCalendar';
import { useSelector } from 'react-redux';
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Images from '../../../Utils/Images';

const HrRightsideCalender = () => {
    // const CalenderSlice = useSelector((state) => state.calender)
    const navigate = useNavigate();

    const [todaysEvent, setTodaysEvent] = useState([]);
    const [eventDay, setEventDay] = useState('')
    const [eventDate, setEventDate] = useState('')


    // useEffect(() => {
    //     const format = "DD-MM-YY";
    //     const slcDay = CalenderSlice.daySelected && CalenderSlice.daySelected;
    //     const events = CalenderSlice.savedEventsDupli.filter((evt) => evt.day === slcDay);
    //     const nowDay = dayjs().format(format);

    //     console.log(dayjs().day())

    //     setEventDay(slcDay === nowDay ? `Todays Event` : `Events on ${slcDay}`)
    //     setTodaysEvent(events)

    // }, [CalenderSlice.daySelected, CalenderSlice.savedEventsDupli])

    const dynamicEventClass = (label) => {
        switch (label) {
            case "info":
                return 'bg-info text-light'

            case "secondary":
                return 'bg-secondary text-light'

            case "success":
                return 'bg-success text-light'

            case "primary":
                return 'bg-primary text-light'

            case "danger":
                return 'bg-danger text-light'

            default:
                break
        }
    }


    return (
        <div className="container-fluid">
            <div className="row right-side-cntent-overall-height pt-xl-3 pe-xl-1">
                <div className="col-12 card border rounded-4 hr-home-calender-min-height">
                    <div className="card-body">
                        <SmallCalendar />
                    </div>
                </div>

                <div className="col-12 card bg-transparent border-0 pb-3">
                    <div class="card-header sticky-top bg-transparent border-0 p-1 mb-2">
                        <h6 className='mb-0'>Events</h6>
                    </div>
                    <div className="card-body p-0 border rounded-4 hr-home-ticket-min-height bg-white">


                        {
                            todaysEvent.length ?
                                <div className="d-flex flex-wrap py-4 px-3">
                                    {todaysEvent.map((event, eventIndex) => {
                                        return <div className={`col-12 py-3 rounded mb-2 ${dynamicEventClass(event.label)}`} key={eventIndex}>
                                            <h6 className='ps-2 fw-bold'>{event.title}</h6>
                                            <p className='ps-2 mb-0'>{event.time}</p>
                                            <p className='ps-2 mb-0'>{event.description}</p>
                                        </div>
                                    })
                                    }
                                </div>
                                :
                                null
                        }


                        {
                            todaysEvent.length ?
                                null
                                :
                                <div className="d-flex flex-wrap py-4 px-3 h-100">
                                    <div className='w-100 row align-items-center '>
                                        <div className="col text-center">
                                            <img src={Images.calenderNoEventFound} alt="no events found" width={250} height={200} />
                                            <p>No Events found for today</p>

                                            <button type="button" className='btn btn-md btn-primary w-75 ' onClick={() => navigate('/hr_dashboard/home/schedules')}>
                                                <AiOutlinePlus className='me-1' />
                                                Schedule events
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HrRightsideCalender