import React, { useState } from 'react';
import Images from '../../Utils/Images';
import { NavLink, Outlet } from 'react-router-dom';


const EmployeesListingPage = () => {

    return (
        <main className="col-xl-12 ">

            <div className="card py-2 mb-2 employer-card rounded">
                <div className="col-12 row text-center">
                    <div className="col">
                        <NavLink end to={'/hr_dashboard/home/employee_details'} className={"navLink-active"}>
                            <button type="button" className='btn btn-transparent border-0'>Full time</button>
                        </NavLink>
                    </div>

                    <div className="col">
                        <NavLink to={'/hr_dashboard/home/employee_details/probation'} className={"navLink-active"}>
                            <button type="button" className='btn btn-transparent border-0'>Probation</button>
                        </NavLink>
                    </div>

                    <div className="col">
                        <NavLink to={'/hr_dashboard/home/employee_details/Intern'} className={"navLink-active"}>
                            <button type="button" className='btn btn-transparent border-0'>Intern</button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className='selected-card-active overflow-scroll table-scrollbar'>
                <Outlet />
            </div>

        </main>
    )
}

export default EmployeesListingPage