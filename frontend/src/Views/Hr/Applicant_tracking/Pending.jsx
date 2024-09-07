import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Pending = () => {
  const pageRender = useNavigate();
  
  //react data table
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);
  //

  const [registeredApplicants, setRegisteredApplicants] = useState([
    {
      id: 1,
      name: 'krishna',
      emailID: 'kumarkrishna11231@gmail.com',
      candidateid: "NEW0001",
      mobileNum: '9787533778',
      address: 'address',
      type: 'fresher',
      resume: {}
    },
    {
      id: 2,
      name: 'krishna',
      emailID: 'kumarkrishna11231@gmail.com',
      candidateid: "NEW0002",
      mobileNum: '9787533778',
      address: 'address',
      type: 'fresher',
      resume: {}
    },
    {
      id: 3,
      name: 'krishna',
      emailID: 'kumarkrishna11231@gmail.com',
      mobileNum: '9787533778',
      candidateid: "NEW0003",
      address: 'address',
      type: 'fresher',
      resume: {}
    }
  ])

  const columns = [
    // {
    //   name: 'S.No',
    //   selector: row => row.id,
    //   sortable: true,
    //   hide: 'md',
    // },
    {
      name: 'Id',
      selector: row => row.candidateid,
      sortable: true,
      hide: 'md',
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email id',
      selector: row => row.emailID,
      sortable: true,
    },
    // {
    //   name: 'Mobile number',
    //   selector: row => row.mobileNum,
    //   sortable: true,
    // },
    // {
    //   name: 'Address',
    //   selector: row => row.address,
    //   sortable: true,
    // },
    {
      name: 'Type',
      selector: row => row.type,
      sortable: true,
    },
    {
      name: 'Portfolio',
      button: true,
      cell: row => (
        <button type='button' className='btn btn-sm ' onClick={() => handleClickbtn(row)}><MdOutlineRemoveRedEye className='fs-5' /></button>
      )
    }
  ];

  const handleClickbtn = (id) => {
    pageRender('/hr_dashboard/home/applicant_details')
  }

  return (
    <div className="container-fluid p-xl-0">
      <div className="row align-items-stretch">

        <div className="col-12 col-xxl-5 applicant-page-table-height">
          <div className='card border-0 rounded-4 w-100 h-100 py-3'>
            <div className="card-body row w-100">
              <div className="col-12 h-100 row align-items-center">
                <p className="text-center">No actions taken from software team</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-xxl-7 ps-xxl-2 applicant-page-table-height">
          <div className='card border-0 rounded-4 h-100'>
            <div className="container-fluid h-100 applicant-table-Overflow">
              <DataTable title="Pending" className="dataTables_wrapper" columns={columns} data={registeredApplicants} progressPending={pending} pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pending