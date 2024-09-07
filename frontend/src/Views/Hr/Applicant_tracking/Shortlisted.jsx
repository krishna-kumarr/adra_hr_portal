import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { IoCallOutline } from "react-icons/io5";

const Shortlisted = () => {
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
    {
      name: 'Mobile number',
      selector: row => row.mobileNum,
      sortable: true,
    },
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
      name: 'Call for interview',
      button: true,
      cell: row => (
        <button type='button' className='btn btn-sm ' onClick={() => handleClickbtn(row)}><IoCallOutline className='fs-5' /></button>
      )
    }
  ];

  const handleClickbtn = () => {

  }



  return (
    <div className="container-fluid p-xl-0">
      <div className="row align-items-stretch">

        <div className="col-12 col-xxl-5 applicant-page-table-height">
          <div className='card border-0 rounded-4 w-100 h-100 py-3'>
            <div className="card-body row w-100">
              <div className="col-12 row align-content-center">
                <h5 className="text-center text-dark mb-4">Call for interview</h5>
                <div className="row">
                  <div class="mb-3 ">
                    <label htmlFor="CandidateName" class="form-label">Candidate name</label>
                    <input type="text" class={`form-control`} value="krishna kumar" disabled id="CandidateName" placeholder="Candidate name" />
                  </div>
                  <div class="mb-3">
                    <label htmlFor="Candidateemail" class="form-label">Email id</label>
                    <input type="text" class={`form-control `} value="kumarkrishna11231@gmail.com" disabled id="Candidateemail" placeholder="Candidate email id" />
                  </div>
                  <div class="mb-3">
                    <label htmlFor="CandidateMobNum" class="form-label">Mobile number</label>
                    <input type="text" class={`form-control`} value="9787533778" disabled id="CandidateMobNum" placeholder="Candidate Mobile number" />
                  </div>
                  <div class="mb-3 col-12 col-lg-6 p-2">
                    <label htmlFor="CandidateinterviewData" class="form-label">Interview date</label>
                    <input type="date" class={`form-control `} id="CandidateinterviewData" placeholder="Candidate email id" />
                  </div>
                  <div class="mb-3 col-12 col-lg-6 p-2">
                    <label htmlFor="Candidateinterviewtime" class="form-label">Interview time</label>
                    <input type="time" class={`form-control`} id="Candidateinterviewtime" placeholder="Candidate Mobile number" />
                  </div>

                  <div className="col-12">
                    <button type="button" className="btn btn-primary w-100">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-xxl-7 ps-xxl-2 applicant-page-table-height">
          <div className='card border-0 rounded-4 h-100'>
            <div className="container-fluid h-100 applicant-table-Overflow">
              <DataTable title="Call for interview" className="dataTables_wrapper" columns={columns} data={registeredApplicants} progressPending={pending} pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shortlisted