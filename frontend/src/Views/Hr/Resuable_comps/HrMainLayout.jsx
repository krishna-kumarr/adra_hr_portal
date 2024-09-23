import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { Outlet, useLocation } from 'react-router-dom';
import HrNav from '../../../Components/NavBar/HrNav';
import HrRightsideCalender from './HrRightsideCalender';
import BreadCrumbs from '../../Common/BreadCrumbs';
import { useDispatch } from 'react-redux';
import { getSchedules, updateMonthAction } from '../../../Storage/Action/hrCalenderAction';

const HrMainLayout = () => {
    const location = useLocation();
    const dispatch = useDispatch(); 

    useEffect(()=>{
        dispatch(updateMonthAction(dayjs().month()))
        dispatch(getSchedules())
    },[])

    return (
        <section className="hr-page-background-clr">
            <div className="row h-100">
                <div className="col-12 col-xl-8 col-xxl hr-home-scrollbar px-xl-4 pe-xl-1 py-2">
                    <div className='row '>
                        <section className='col-xl-12 p-2 pb-0'>
                            <nav class="navbar navnar-height rounded shadow-sm">
                                <HrNav />
                            </nav>
                        </section>

                        <div className="main-content-overall-height p-1">
                            {
                                location.pathname !== "/hr_dashboard/home" ?
                                    <div className="col-12 p-3 pt-4 pb-0">
                                        <BreadCrumbs />
                                    </div>
                                    :
                                    null
                            }
                            <Outlet />
                        </div>
                    </div>
                </div>

                <div className="d-none d-xl-block col-xl-4 calender-sidebar-width">
                    <HrRightsideCalender />
                </div>
            </div>
        </section>
    )
}

export default HrMainLayout