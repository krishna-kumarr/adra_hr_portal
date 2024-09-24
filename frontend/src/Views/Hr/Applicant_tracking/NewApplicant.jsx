import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const NewApplicant = () => {
    const pageRender= useNavigate()
    const [applicantRegInputErr, setApplicantRegInputErr] = useState(false);
    const [registrationEdit, setRegistrationEdit] = useState(false);
    const [registrationEditIndex, setRegistrationEditIndex] = useState(Number);
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
            name: 'Type',
            selector: row => row.type,
            sortable: true,
        },
        {
            name: 'Edit',
            button: true,
            cell: row => (
                <button type='button' className='btn btn-sm ' onClick={() => {
                    setRegistrationEditIndex(row.id)
                    setRegistrationEdit(true)
                    setApplicantRegistration(row)
                }}><MdModeEditOutline className='fs-5' /></button>
            )
        },        
        {
            name: 'Portfolio',
            button: true,
            cell: row => (
                <button type='button' className='btn btn-sm ' onClick={() => handleClickbtn(row)}><MdOutlineRemoveRedEye className='fs-5' /></button>
            )
        }
    ];

    const [applicantRegistration, setApplicantRegistration] = useState({
        name: '',
        emailID: '',
        mobileNum: '',
        address: '',
        type: '',
        resume: {}
    })

    //react data table
    const [pending, setPending] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setPending(false);
      }, 500);
      return () => clearTimeout(timeout);
    }, []);
    //

    const handleUploadResume = e => {
        if (e.target.files.length > 0) {
            setApplicantRegistration({ ...applicantRegistration, resume: e.target.files[0] })
        } else {
            setApplicantRegistration({ ...applicantRegistration, resume: {} })
        }
    }

    const handleSubmitApplicantRegistration = () => {
        if (applicantRegistration.name !== '' && applicantRegistration.emailID !== '' && applicantRegistration.mobileNum !== '' && applicantRegistration.mobileNum.length === 10 &&
            applicantRegistration.address !== '' && applicantRegistration.type !== '' && applicantRegistration.resume.name !== undefined) {
            setApplicantRegInputErr(false)

            if (registrationEdit) {
                let edtzRegistration = registeredApplicants.filter((v, index) => {
                    return index === registrationEditIndex ? applicantRegistration : v
                })


                setRegisteredApplicants(edtzRegistration)
                setRegistrationEdit(false)
            } else {
                registeredApplicants[registeredApplicants.length] = applicantRegistration
                setRegisteredApplicants(registeredApplicants)
            }

            setApplicantRegistration({
                name: '',
                emailID: '',
                mobileNum: '',
                address: '',
                type: '',
                resume: {}
            })
        } else {
            setApplicantRegInputErr(true)
        }
    }

    const handleClickbtn = (id) => {
        pageRender('/hr_dashboard/home/applicant_details')
    }

    return (
        <div className="container-fluid p-xl-0">
            <div className="row align-items-stretch">
                <div className="d-none d-xxl-block col-xxl-5 applicant-page-table-height">
                    <div className='card border-0 rounded-4 w-100 py-3 h-100'>
                        <div className="card-body h-100 d-flex flex-wrap">
                            <h5 className="text-center text-dark mb-4 col-12">New Applicant Registration</h5>
                            <div class="mb-3 col-12 col-lg-6 p-1">
                                <label htmlFor="CandidateName" class="form-label">Candidate name</label>
                                <input type="text" class={`form-control ${applicantRegInputErr && applicantRegistration.name === '' ? "border-danger" : ''}`} onChange={(e) => setApplicantRegistration({ ...applicantRegistration, name: e.target.value })} value={applicantRegistration.name} id="CandidateName" placeholder="Candidate name" />
                            </div>
                            <div class="mb-3 col-12 col-lg-6 p-1">
                                <label htmlFor="Candidateemail" class="form-label">Email id</label>
                                <input type="text" class={`form-control ${applicantRegInputErr && applicantRegistration.emailID === '' ? "border-danger" : ''}`} onChange={(e) => setApplicantRegistration({ ...applicantRegistration, emailID: e.target.value })} value={applicantRegistration.emailID} id="Candidateemail" placeholder="Candidate email id" />
                            </div>
                            <div class="mb-3 col-12 p-1">
                                <label htmlFor="CandidateMobNum" class="form-label">Mobile number</label>
                                <input type="text" class={`form-control ${applicantRegInputErr && (applicantRegistration.mobileNum === '' || applicantRegistration.mobileNum.length !== 10) ? "border-danger" : ''}`} onChange={(e) => setApplicantRegistration({ ...applicantRegistration, mobileNum: e.target.value })} value={applicantRegistration.mobileNum} id="CandidateMobNum" placeholder="Candidate Mobile number" />
                            </div>
                            <div class="mb-3 col-12 p-1">
                                <label htmlFor="CandidateAddress" class="form-label">Address</label>
                                <input type="text" class={`form-control ${applicantRegInputErr && applicantRegistration.address === '' ? "border-danger" : ''}`} onChange={(e) => setApplicantRegistration({ ...applicantRegistration, address: e.target.value })} value={applicantRegistration.address} id="CandidateAddress" placeholder="Candidate address" />
                            </div>
                            <div class="mb-3 col-12 p-1">
                                <p className="text-secondary">Fresher/Experienced</p>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" onChange={(e) => setApplicantRegistration({ ...applicantRegistration, type: e.target.value })} checked={applicantRegistration.type === "Fresher"} name="FresherOrExperiencedRadio" id="inlineCheckbox1" value="Fresher" />
                                    <label class="form-check-label" for="inlineCheckbox1">Fresher</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" onChange={(e) => setApplicantRegistration({ ...applicantRegistration, type: e.target.value })} checked={applicantRegistration.type === "Experienced"} name="FresherOrExperiencedRadio" id="inlineCheckbox2" value="Experienced" />
                                    <label class="form-check-label" for="inlineCheckbox2">Experienced</label>
                                </div>
                            </div>
                            <div class="mb-3 col-12 p-1">
                                <label htmlFor="CandidateName" class="form-label">Resume</label>
                                <input type="file" class={`form-control ${applicantRegInputErr && applicantRegistration.resume.name === undefined ? "border-danger" : ''}`} accept="application/pdf" id="CandidateName" onChange={handleUploadResume} placeholder="Candidate name" />
                            </div>
                            <div className="col-12 mt-3">
                                <button type="button" className="btn btn-primary w-100 txet-center" onClick={handleSubmitApplicantRegistration}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-xxl-7 ps-xxl-2 applicant-page-table-height">
                    <div className='card border-0 rounded-4 h-100'>
                        <div className="container-fluid h-100 applicant-table-Overflow">
                            <DataTable title="New Applicants" className="dataTables_wrapper" columns={columns} data={registeredApplicants} progressPending={pending} pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewApplicant