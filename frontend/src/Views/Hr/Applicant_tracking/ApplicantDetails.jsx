import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Chart from 'react-google-charts';
import Pdf from '../../Common/Pdf';

const ApplicantDetails = () => {

    const pageRender = useNavigate();

    const jobLists = [
        {
            title: "Front end",
            btnClr: "btn-outline-primary "
        },
        {
            title: "Back end",
            btnClr: "btn-outline-secondary"
        }, {
            title: "UI/UX",
            btnClr: "btn-outline-success"
        },
        {
            title: "QA",
            btnClr: "btn-outline-danger"
        },
        {
            title: "Data scientist",
            btnClr: "btn btn-outline-warning"
        }
    ]

    const [recommendedJob, setRecommendedJob] = useState('');

    const data = [
        ["Deleoper", "Prediction percentage", { role: "style" }],
        ["Front end", 100,"#0d6efd"],
        ["Back end", 80,"#6c757d"],
        ["QA", 60,"#dc3545"],
        ["Data scientist", 40,"#ffc107"],
        ["UI/UX", 20,"#198754"],
    ];

    const options = {
        title: "AI Prediction",
        chartArea: { width: "50%" },
        hAxis: {
            title: "Percentage",
            minValue: 0,
        },
        vAxis: {
            title: "Our Team",
        },
    };

    const candidateSkills = [
        {
            fe: "Html",
            be: "",
            qa: "",
            ds: "",
            ui: ""
        },
        {
            fe: "Css",
            be: "",
            qa: "",
            ds: "",
            ui: ""
        },
        {
            fe: "Javascript",
            be: "",
            qa: "",
            ds: "",
            ui: ""
        },
        {
            fe: "React",
            be: "python",
            qa: "",
            ds: "",
            ui: ""
        },
        {
            fe: "Redux",
            be: "",
            qa: "",
            ds: "",
            ui: ""
        },
        {
            fe: "Context",
            be: "",
            qa: "",
            ds: "",
            ui: ""
        },
        {
            fe: "Redux thunk",
            be: "",
            qa: "",
            ds: "",
            ui: ""
        }
    ]

    return (
        <div className="home-height main-content header-default-background" >
            <div className="container-fluid admin-dashboard">
                <div className="developer-cards ">
                    <div className="container-fluid ">
                        <div className='col-12 pt-4'>
                            <button type="button" className='btn btn-secondary' onClick={() => pageRender("/hr_dashboard/home/applicant_tracking")}>Back</button>
                        </div>
                        <div className="col-12 h-100 row align-items-stretch">
                            <div className="col-6 p-3">
                                <div className="col-12 pdfMinHeight">
                                    <Pdf pdfUrl={require('../../Common/resume-sample.pdf')} />
                                </div>
                            </div>

                            <div className="col-6 bg-white p-3 rounded-3">
                                <div className="applicantCardScroll">
                                    <div className="col-12 row">
                                        <h5 className='text-dark px-0'>Recommend For</h5>
                                        {
                                            jobLists.map((jobs, jobIndex) => {
                                                return <div className="col p-1 d-flex" key={jobIndex}>
                                                    <button type="button" className={`btn ${jobs.btnClr} w-100`} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setRecommendedJob(jobs.title)}>{jobs.title}</button>
                                                </div>
                                            })
                                        }

                                        <div className="w-100 mt-3 py-3 h-100">
                                            <h5 className='text-dark text-center text-decoration-underline'>ADRA AI PREDICTION</h5>

                                            <div className="w-100 row">
                                                <div className="col-12">
                                                    <Chart
                                                        chartType="BarChart"
                                                        width="100%"
                                                        height="400px"
                                                        data={data}
                                                        options={options}
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <h6>Candidate skills</h6>
                                                    <table style={{ verticalAlign: 'middle' }} className="table table-bordered text-center table-hover mt-3 employee-data-table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">S.No</th>
                                                                <th scope="col">Front end</th>
                                                                <th scope="col">Back end</th>
                                                                <th scope="col">QA</th>
                                                                <th scope="col">Data scientist</th>
                                                                <th scope="col">UI/UX</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                candidateSkills.map((skills, index) => {
                                                                    return (
                                                                        <tr key={index}>
                                                                            <td>{index+1}</td>
                                                                            <td>{skills.fe!=='' ? skills.fe : '-'}</td>
                                                                            <td>{skills.be!=='' ? skills.be : '-'}</td>
                                                                            <td>{skills.qa!=='' ? skills.qa : '-'}</td>
                                                                            <td>{skills.ds!=='' ? skills.ds : '-'}</td>
                                                                            <td>{skills.ui!=='' ? skills.ui : '-'}</td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p className='mb-0'>Do you recommend this profile to {recommendedJob} Team ?</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Recommend</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ApplicantDetails