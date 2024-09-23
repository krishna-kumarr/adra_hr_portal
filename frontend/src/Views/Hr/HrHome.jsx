import React, { useEffect } from 'react';

import { SiMessenger } from "react-icons/si";
import { GoProject } from "react-icons/go";
import Images from '../../Utils/Images';
import { useNavigate } from 'react-router-dom';
import { Chart } from "react-google-charts";
import Slider from "react-slick";
import { GoPeople } from "react-icons/go"; 
import { TbUsersGroup } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { TbCreditCardRefund } from "react-icons/tb";
import { TbCreditCardPay } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";
import { BsCalendar2Date } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";
import { LuUserCheck2 } from "react-icons/lu";
import { PiUserList } from "react-icons/pi";


const HrHome = () => { 
    const navigate = useNavigate();

    const widthh = [
        { type: "full time", percentage: 45, bg: '#483BD6' },
        { type: "probation", percentage: 25, bg: '#A7B1FA' },
        { type: "intern", percentage: 30, bg: '#E8EBFE' }
    ]

    const cardsArray = [
        {
            icon: <GoProject />,
            title: "Employee details",
            class: "employee_details",
            text: "text",
            statusIcon: Images.allEmployers,
            count: 10,
            pageLink: "/hr_dashboard/employee_details",
            cardIcon: [
                { icon: <TbUsersGroup className='fs-5'/>, count: 15 },
                { icon: <GoPeople className='fs-5'/>, count: 10 },
                { icon: <AiOutlineUser className='fs-5'/>, count: 5 },
            ]
        },

        {
            icon: <SiMessenger />,
            title: "Recruitment and Applicant tracking",
            class: "recruitment_tracking",
            text: "text",
            statusIcon: Images.requirementIcon,
            count: 4,
            pageLink: "/hr_dashboard/applicant_tracking",
            cardIcon: [
                { icon: <BiNotepad className='fs-5'/>, count: 15 },
                { icon: <PiUserList className='fs-5'/>, count: 15 },
                { icon: <LuUserCheck2 className='fs-5'/>, count: 15 },
            ]
        },
        {
            icon: <SiMessenger />,
            title: "Expenses History",
            class: "expenses_history",
            text: "text",
            statusIcon: Images.expenseHitorIcon,
            count: 4,
            pageLink: "/hr_dashboard/expense_history",
            cardIcon: [
                { icon: <IoWalletOutline className='fs-5'/>, count: "15k" },
                { icon: <TbCreditCardRefund className='fs-5'/>, count: "15k" },
                { icon: <TbCreditCardPay className='fs-5'/>, count: "1k" },
            ]
        },
        {
            icon: <SiMessenger />,
            title: "Schedules Management",
            class: "schedules_management",
            text: "text",
            statusIcon: Images.scheduleManagementIcon,
            count: 4,
            pageLink: "/hr_dashboard/schedules",
            cardIcon: [
                { icon: <FaRegCalendarAlt className='fs-5'/>, count: 15 },
                { icon: <TbCalendarTime className='fs-5'/>, count: 15 },
                { icon: <BsCalendar2Date className='fs-5'/>, count: 15 },
            ]
        },
    ];

    const pageRender = useNavigate();

    const tickets = [
        {
            name: "Angu siva",
            role: "FED",
            date: '3/09/2024',
            durattion: '9 Hrs',
            profile_img: require('../../assets/images/Photo-Siva.jpg'),
            status: "approved",
            req: "Leave"
        },
        {
            name: "Pradeep",
            role: "FED",
            date: '3/09/2024',
            durattion: '9 Hrs',
            profile_img: require('../../assets/images/pradeep.jpg'),
            status: "approved",
            req: "Leave"
        },
        {
            name: "Krishna kumar",
            durattion: '1 Hrs',
            role: "FED",
            date: '3/09/2024',
            profile_img: require('../../assets/images/krishna.jpg'),
            status: "rejected",
            req: "Permission"
        },
        {
            name: "Suresh Krishna",
            durattion: '1 Hrs',
            role: "FED",
            date: '3/09/2024',
            profile_img: require('../../assets/images/suresh.jpg'),
            status: "rejected",
            req: "Permission"
        },
        {
            name: "Anand",
            durattion: '1 Hrs',
            role: "BED",
            date: '3/09/2024',
            profile_img: require('../../assets/images/anand.jpeg'),
            status: "pending",
            req: "Permission"
        },
        {
            name: "Lalith kesav",
            durattion: '1 Hrs',
            date: '3/09/2024',
            role: "BED",
            profile_img: require('../../assets/images/lalith.jpg'),
            status: "pending",
            req: "Permission"
        },
        {
            name: "Marshal",
            durattion: '1 Hrs',
            date: '3/09/2024',
            role: "UI/UX",
            profile_img: require('../../assets/images/marshal.jpg'),
            status: "rejected",
            req: "Permission"
        },
        {
            name: "Prakash",
            durattion: '1 Hrs',
            date: '3/09/2024',
            role: "FED",
            profile_img: require('../../assets/images/prakash.jpeg'),
            status: "approved",
            req: "Leave"
        }
    ]

    const handleTicketStatus = (requestStatus) => {
        switch (requestStatus) {
            case "approved":
                return "ticket-permission-approved"

            case "pending":
                return "ticket-permission-pending"

            case "rejected":
                return "ticket-permission-rejected"

            default:
                break;
        }
    }

    const getAttendanceRowClassName = (requestStatus) => {
        switch (requestStatus) {
            case "approved":
                return "ticket-border-permission-approved"

            case "pending":
                return "ticket-border-permission-pending"

            case "rejected":
                return "ticket-border-permission-rejected"

            default:
                break;
        }
    }

    const recuirementsData = [
        ["Year", "Applicants", "Shortlisted", "Interviewed"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
    ];

    const recuirementsOptions = {
        height: 320,
        colors: ['#483BD6', '#E8EBFE', '#A7B1FA']
    };

    const data = [
        [
            { type: "date", label: "Day" },
            ""
        ],
        [new Date(2014, 0), 17000],
        [new Date(2014, 1), 12000],
        [new Date(2014, 2), 33000],
        [new Date(2014, 3), 17000],
        [new Date(2014, 4), 17000],
        [new Date(2014, 5), 17000],
        [new Date(2014, 6), 17000],
        [new Date(2014, 7), 117000],
        [new Date(2014, 8), 0],
        [new Date(2014, 9), 0],
        [new Date(2014, 10), 0],
        [new Date(2014, 11), 45000],
    ];

    const LineChartOptions = {
        height: 420,
        width: "100%",
        lineWidth: 2,
        axes: {
            y: {
                Amount: { label: "Amount" },
                Day: { label: "Day" },
            },
        },
        colors: ['#ED7014'],

    };

    const attendanceData = [
        ["Task", "100"],
        ["Present", 20],
        ["Absent", 30],
        ["Permission", 40]
    ];

    const attenOptions = {
        chart: {
            title: "Attendance"
        },
        legend: 'none',
        colors: ['#483BD6', '#E8EBFE', '#A7B1FA'],
        backgroundColor: '#FFF',


    };

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    
    return (
        <main className="col-xl-12">

            {/* card list  */}
            <section className="container-fluid w-100 p-xl-0 mt-3">
                <div className="slider-container px-4 px-xxl-0">
                    <Slider {...settings}>
                        {
                            cardsArray.map((card, cardInd) => {
                                return (
                                    <div className="p-1 pointer-cursor" key={cardInd}>
                                        <div onClick={() => pageRender(card.pageLink)} className={`hr-home-slider-cards px-3 shadow-sm w-100 rounded-4 border-0 ${card.class}`}>
                                            <div className="small-card col-12 row align-content-center h-100" >
                                                <div className="col-12 py-1">
                                                    <img src={card.statusIcon} width={50} height={50} alt="cards" />
                                                </div>

                                                <h6 className="m-0 mb-2 card-title mt-3 ps-1">{card.title}</h6>

                                                <div className="col-12 mt-2 slider-cards-count rounded-3 py-2">
                                                    <div className="row justify-content-around">
                                                        <div className="col-3 text-center border-end text-secondary">
                                                            {card.cardIcon[0].icon}
                                                            <span className='ps-2'>{card.cardIcon[0].count}</span>
                                                        </div>
                                                        <div className="col-3 text-center border-end text-secondary">
                                                            {card.cardIcon[1].icon}
                                                            <span className='ps-2'>{card.cardIcon[1].count}</span>
                                                        </div>
                                                        <div className="col-3 text-center text-secondary">
                                                            {card.cardIcon[2].icon}
                                                            <span className='ps-2'>{card.cardIcon[2].count}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </section>

            {/* main data */}
            <section className="container-fluid mt-3 px-lg-0">
                <div className="col-12 row gy-3 p-0">
                    <div className="col-12 col-md-6 col-lg-6 col-xxl-3 p-1 ">
                        <h6 className='ps-2'>Employee</h6>
                        <div className="card home-employee-min-card-height rounded-4 employer-card">
                            <div className="card-header row align-items-center border-0 bg-transparent pt-3">
                                <div className="col-1">
                                    <img src={Images.employerStatus} width={45} height={45} alt="cards" />
                                </div>

                                <div className="col-11 ps-4">
                                    <h6 className='ps-1 mb-0'>Employee Status</h6>
                                </div>
                            </div>

                            <div className="card-body row flex-column justify-content-around pb-0">
                                <div className="col-12 row">
                                    <div className="col-9 p-0">
                                        <p className='text-secondary'>Total Employee</p>
                                    </div>

                                    <div className="col-3">
                                        <p className='text-end p-0'>50</p>
                                    </div>

                                    <div className="col-12">
                                        <div className='d-flex flex-wrap justify-content-between'>
                                            {
                                                widthh.map((value, index) => {
                                                    return <div key={index} style={{ width: `${value.percentage - 2}%`, backgroundColor: `${value.bg}`, height: '15px', borderRadius: "3px" }}>

                                                    </div>
                                                })
                                            }

                                            <p className='text-secondary col-6'>0%</p>

                                            <p className='text-secondary col-6 text-end'>100%</p>
                                        </div>


                                    </div>
                                </div>

                                <div className="col-12 row">
                                    <div className="col-9">
                                        <span className='fulltime'></span>
                                        <p className='text-secondary d-inline-block mb-1'>Full-time</p>
                                    </div>

                                    <div className="col-3">
                                        <p className='text-end mb-1'>50</p>
                                    </div>

                                    <div className="col-9">
                                        <span className='probation'></span>
                                        <p className='text-secondary d-inline-block mb-1'>Probation</p>
                                    </div>

                                    <div className="col-3">
                                        <p className='text-end mb-1'>50</p>
                                    </div>

                                    <div className="col-9">
                                        <span className='intern'></span>
                                        <p className='text-secondary d-inline-block'>Intern</p>
                                    </div>

                                    <div className="col-3">
                                        <p className='text-end'>50</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer border-0 bg-transparent py-3">
                                <button type="button" className='btn btn-outline-secondary w-100' onClick={() => navigate('/hr_dashboard/home/employee_details')}>View All Employee</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-xxl-3 p-1">
                        <h6 className='ps-2'>Attendance</h6>
                        <div className="card home-attendance-min-card-height rounded-4 employer-card">
                            <div className="card-header row align-items-center border-0 bg-transparent pt-3">
                                <div className="col-1">
                                    <img src={Images.attendanceImg} width={45} height={45} alt="cards" />
                                </div>

                                <div className="col-11 ps-4">
                                    <h6 className='ps-1 mb-0'>Attendance Status</h6>
                                </div>
                            </div>

                            <div className="card-body py-0">
                                <Chart
                                    chartType="PieChart"
                                    data={attendanceData}
                                    options={attenOptions}
                                />

                                <div className="col-12 row">
                                    <div className="col-9">
                                        <span className='fulltime'></span>
                                        <p className='text-secondary d-inline-block mb-1'>Full-time</p>
                                    </div>

                                    <div className="col-3">
                                        <p className='text-end mb-1'>50</p>
                                    </div>

                                    <div className="col-9">
                                        <span className='probation'></span>
                                        <p className='text-secondary d-inline-block mb-1'>Probation</p>
                                    </div>

                                    <div className="col-3">
                                        <p className='text-end mb-1'>50</p>
                                    </div>

                                    <div className="col-9">
                                        <span className='intern'></span>
                                        <p className='text-secondary d-inline-block'>Intern</p>
                                    </div>

                                    <div className="col-3">
                                        <p className='text-end'>50</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer border-0 bg-transparent py-3">
                                <button type="button" className='btn btn-outline-secondary w-100' >View Attendance</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 p-1 px-2">
                        <h6 className='ps-2'>Attendance Details</h6>
                        <div className="card home-attendance-details-min-card-height p-0 overflow-hidden rounded-4 employer-card">
                            <div className="card-body p-0">
                                <div class="table-responsive table-section">
                                    <table class="table table-hover">
                                        <thead >
                                            <tr>
                                                <th scope="col" className='bg-light py-3'></th>
                                                <th scope="col" className='bg-light py-3'>Name</th>
                                                <th scope="col" className='bg-light py-3'>Role</th>
                                                <th scope="col" className='bg-light py-3'>Request</th>
                                                <th scope="col" className='bg-light py-3'>Date</th>
                                                <th scope="col" className='bg-light py-3'>Duration</th>
                                                <th scope="col" className='bg-light py-3'>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tickets.map((tickets, ticketIndex) => {
                                                    return <tr key={ticketIndex}>
                                                        <td className='ps-0 col'>
                                                            <span className={`${getAttendanceRowClassName(tickets.status)}`}></span>

                                                            <img className="rounded-2" src={tickets.profile_img.includes('http') ? tickets.profile_img : tickets.profile_img} alt="user image" width={50} height={50} />
                                                        </td>
                                                        <td>{tickets.name}</td>
                                                        <td>{tickets.role}</td>
                                                        <td>{tickets.req}</td>
                                                        <td>{tickets.date}</td>
                                                        <td>{tickets.durattion}</td>
                                                        <td >
                                                            <span className={`${handleTicketStatus(tickets.status)} p-2`}>
                                                                {tickets.status ? tickets.status.charAt(0).toUpperCase() + tickets.status.slice(1) : ''}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                })
                                            }


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-6 col-lg-6 p-1 px-2 overflow-hidden">
                        <h6 className='ps-2'>Expense Details</h6>
                        <div className="card home-attendance-min-card-height rounded-4 employer-card">
                            <div className="card-body ">
                                <Chart
                                    chartType="LineChart"
                                    width="100%"
                                    data={data}
                                    options={LineChartOptions}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 p-1 px-2 overflow-hidden">
                        <h6 className='ps-2'>Recuirement and Tracking Details</h6>
                        <div className="card home-attendance-min-card-height py-5 rounded-4 employer-card">
                            <div className="card-body ">
                                <Chart
                                    chartType="Bar"
                                    width="100%"
                                    data={recuirementsData}
                                    options={recuirementsOptions}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HrHome