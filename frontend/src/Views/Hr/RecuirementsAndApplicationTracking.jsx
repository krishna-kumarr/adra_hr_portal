import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RecuirementsAndApplicationTracking = () => {
  return (
    <main className="col-xl-12 ">

      <div className="container-fluid p-lg-0">
        <div className="card py-2 mb-2 border-0 rounded-4">
          <div className="col-12 row gy-3 text-center">
            <div className="col-4 col-sm-3 col-md">
              <NavLink end to={'/hr_dashboard/applicant_tracking'} className={"navLink-active"}>
                <button type="button" className='btn btn-transparent border-0'>New Applicant</button>
              </NavLink>
            </div>

            <div className="col-4 col-sm-3 col-md">
              <NavLink to={'/hr_dashboard/applicant_tracking/recommended'} className={"navLink-active"}>
                <button type="button" className='btn btn-transparent border-0'>Recommended</button>
              </NavLink>
            </div>

            <div className="col-4 col-sm-3 col-md">
              <NavLink to={'/hr_dashboard/applicant_tracking/pending'} className={"navLink-active"}>
                <button type="button" className='btn btn-transparent border-0'>Pending</button>
              </NavLink>
            </div>

            <div className="col-4 col-sm-3 col-md">
              <NavLink to={'/hr_dashboard/applicant_tracking/shortlisted'} className={"navLink-active"}>
                <button type="button" className='btn btn-transparent border-0'>Shortlisted</button>
              </NavLink>
            </div>

            <div className="col-4 col-sm-3 col-md">
              <NavLink to={'/hr_dashboard/applicant_tracking/rejected'} className={"navLink-active"}>
                <button type="button" className='btn btn-transparent border-0'>Rejected</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className='col-12'>
        <Outlet />
      </div>

    </main>
  )
}

export default RecuirementsAndApplicationTracking