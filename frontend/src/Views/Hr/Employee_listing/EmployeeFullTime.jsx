import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";


const EmployeeFullTime = () => {

    const allEmployees = [
        {
            id: 10,
            empId: "E007",
            empName: "Siva kumar",
            designation: "Senior Software Architect",
            role: "developer",
            doj: "22-01-2024",
            email: "kumarkrishna11231@gmail.com",
            profile_img: "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png",
            mobNum: 9787533778,
            status: "Present",
            address: "address"
        },
        {
            id: 9,
            empId: "E007",
            empName: "Sathianarayanan",
            designation: "Back-end developer",
            role: "developer",
            doj: "22-01-2024",
            email: "kumarkrishna11231@gmail.com",
            profile_img: "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png",
            mobNum: 9787533778,
            status: "Present",
            address: "address"
        },
        {
            id: 5,
            empId: "E005",
            empName: "Anand",
            designation: "Back-end developer",
            profile_img: require('../../../assets/images/anand.jpeg'),
            role: "developer",
            doj: "22-01-2024",
            email: "kumarkrishna11231@gmail.com",
            mobNum: 9787533778,
            status: "Present",
            address: "address"
        },
        {
            id: 1,
            empId: "E001",
            empName: "Angusiva",
            designation: "Front-end",
            role: "developer",
            doj: "22-01-2024",
            email: "kumarkrishna11231@gmail.com",
            mobNum: 9787533778,
            status: "Present",
            address: "address",
            profile_img: require('../../../assets/images/Photo-Siva.jpg'),
        },
        {
            id: 2,
            empId: "E002",
            empName: "Pradeep",
            designation: "Front-end developer",
            role: "developer",
            doj: "22-01-2024",
            email: "kumarkrishna11231@gmail.com",
            profile_img: require('../../../assets/images/pradeep.jpg'),
            mobNum: 9787533778,
            status: "Absent",
            address: "address",
        },
        {
            id: 3,
            empId: "E003",
            empName: "Suresh krishna",
            designation: "Front-end developer",
            profile_img: require('../../../assets/images/suresh.jpg'),
            role: "developer",
            doj: "22-01-2024",
            email: "kumarkrishna11231@gmail.com",
            mobNum: 9787533778,
            status: "Present",
            address: "address"
        },
        {
            id: 4,
            empId: "E004",
            empName: "Krishna kumar",
            designation: "Front-end developer",
            profile_img: require('../../../assets/images/krishna.jpg'),
            role: "developer",
            doj: "22-01-2024",
            email: "kumarkrishna11231@gmail.com",
            mobNum: 9787533778,
            status: "Absent",
            address: "address"
        },
        {
            id: 7,
            empId: "E007",
            empName: "Marshal",
            designation: "Ui/Ux developer",
            profile_img: require('../../../assets/images/marshal.jpg'),
            role: "developer",
            doj: "22-01-2024",
            email: "kumarkrishna11231@gmail.com",
            mobNum: 9787533778,
            status: "Present",
            address: "address"
        },
        {
            id: 8,
            empId: "E008",
            empName: "Prakash",
            designation: "Ui/Ux developer",
            profile_img: require('../../../assets/images/prakash.jpeg'),
            role: "developer",
            doj: "22-01-2024",
            email: "kumarkrishna11231@gmail.com",
            mobNum: 9787533778,
            status: "Present",
            address: "address"
        },
        {
            id: 6,
            empId: "E006",
            empName: "Lalith kesav",
            designation: "Back-end developer",
            profile_img: require('../../../assets/images/lalith.jpg'),
            role: "developer",
            doj: "22-01-2024",
            email: "kumarkrishna11231@gmail.com",
            mobNum: 9787533778,
            status: "Absent",
            address: "address"
        },
        {
            id: 9,
            empId: "E007",
            empName: "Swetha",
            designation: "Back-end developer",
            role: "developer",
            doj: "22-01-2024",
            email: "kumarkrishna11231@gmail.com",
            profile_img: "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png",
            mobNum: 9787533778,
            status: "Present",
            address: "address"
        },
        {
            id: 10,
            empId: "E007",
            empName: "Jithin Noble",
            designation: "Business development engineer",
            role: "developer",
            doj: "22-01-2024",
            email: "kumarkrishna11231@gmail.com",
            profile_img: require('../../../assets/images/jithin.jpg'),
            mobNum: 9787533778,
            status: "Present",
            address: "address"
        },
        {
            id: 9,
            empId: "E007",
            empName: "Kalpana ayyapan",
            designation: "Software Tester",
            role: "developer",
            doj: "22-01-2024",
            email: "kumarkrishna11231@gmail.com",
            profile_img: "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png",
            mobNum: 9787533778,
            status: "Present",
            address: "address"
        },

    ];

    //react data table
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPending(false);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);
    //

    const handleClickbtn = (id) => {
        console.log(id, "id")
    }

    const columns = [
        {
            name: 'S.No',
            selector: row => row.id,
            sortable: true,
            hide: 'md',
        },
        {
            name: 'Id',
            selector: row => row.empId,
            sortable: true,
            hide: 'md',
        },
        {
            name: 'Name',
            selector: row => row.empName,
            sortable: true,
        },
        {
            name: 'Designation',
            selector: row => row.designation,
            sortable: true,
        },
        {
            name: 'Portfolio',
            button: true,
            cell: row => (
                <button type='button' className='btn btn-sm ' onClick={() => handleClickbtn(row)}><MdOutlineRemoveRedEye className='fs-5' /></button>
            )
        },
    ];


    return (
        // <div className='employee-page-table-height py-2'>
        //     <DataTable title="Full time employee" className="dataTables_wrapper" columns={columns} data={allEmployees} progressPending={pending} pagination />
        // </div>
        <div className='col-12'>
            <div className="row align-items-stretch">
                {
                    allEmployees.map((empVal, empInd) => (
                        <div className="col-4 p-2" key={empInd}>
                            <div className="card employer-card rounded-4 h-100 py-3 shadow-sm">
                                <div className="card-body d-inline-flex flex-wrap">
                                    <div className="col-10">
                                        <img className="rounded-circle" src={empVal.profile_img.includes('http') ? empVal.profile_img : empVal.profile_img} alt="user image" width={100} height={100} />
                                        <h6 className='mt-3'>{empVal.empName}</h6>
                                        <p className='text-secondary'>{empVal.designation}</p>
                                    </div>
                                    <div className="col-2 text-end">
                                        <button type="button" className='btn btn-sm btn-primary'>
                                            view
                                        </button>
                                    </div>

                                    <div className="col-12 rounded p-3 d-flex flex-wrap border">
                                        <div className="col-8 mb-3">
                                            <p className='mb-0'>Role</p>
                                            <h6>{empVal.designation}</h6>
                                        </div>
                                        <div className="col-4">
                                            <p className='mb-0'>Hired Date</p>
                                            <h6>{empVal.doj}</h6>
                                        </div>
                                        <div className="col-12 row mb-2">
                                            <div className="col-1">
                                                <CiMail className='fs-5'/>
                                            </div>
                                            <div className="col-11">
                                                <p className='mb-0'>{empVal.email}</p>
                                            </div>
                                        </div>

                                        <div className="col-12 row mb-2">
                                            <div className="col-1">
                                                <IoCallOutline className='fs-5'/>
                                            </div>
                                            <div className="col-11">
                                                <p className='mb-0'>{empVal.mobNum}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div >
    )
}

export default EmployeeFullTime