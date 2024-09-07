import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { MdOutlineRemoveRedEye } from "react-icons/md";

const AttendanceManagement = () => {
  const allEmployees = [
    {
      id: 1,
      empId: "E001",
      empName: "Angusiva",
      designation: "Front-end developer",
      role: "developer",
      doj: "22-01-2024",
      email: "kumarkrishna11231@gmail.com",
      mobNum: 9787533778,
      status: "Present",
      address: "address"
    },
    {
      id: 2,
      empId: "E002",
      empName: "Pradeep",
      designation: "Front-end developer",
      role: "developer",
      doj: "22-01-2024",
      email: "kumarkrishna11231@gmail.com",
      mobNum: 9787533778,
      status: "Absent",
      address: "address"
    },
    {
      id: 3,
      empId: "E003",
      empName: "Sureshkrishna",
      designation: "Front-end developer",
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
      role: "developer",
      doj: "22-01-2024",
      email: "kumarkrishna11231@gmail.com",
      mobNum: 9787533778,
      status: "Absent",
      address: "address"
    },
    {
      id: 5,
      empId: "E005",
      empName: "Mohan",
      designation: "Back-end developer",
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
      empName: "Gokul",
      designation: "Back-end developer",
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
      empName: "Manoj",
      designation: "Back-end developer",
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
      empName: "Prasath",
      designation: "Back-end developer",
      role: "developer",
      doj: "22-01-2024",
      email: "kumarkrishna11231@gmail.com",
      mobNum: 9787533778,
      status: "Present",
      address: "address"
    },
    {
      id: 9,
      empId: "E007",
      empName: "Marshal",
      designation: "UI-UX developer",
      role: "developer",
      doj: "22-01-2024",
      email: "kumarkrishna11231@gmail.com",
      mobNum: 9787533778,
      status: "Present",
      address: "address"
    },
    {
      id: 10,
      empId: "E007",
      empName: "Prakash",
      designation: "UI-UX developer",
      role: "developer",
      doj: "22-01-2024",
      email: "kumarkrishna11231@gmail.com",
      mobNum: 9787533778,
      status: "Present",
      address: "address"
    }

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
    <main className="col-xl-12 py-4">
      <div className='employee-page-table-height py-5'>
        <DataTable title="Full time employee" columns={columns} data={allEmployees} progressPending={pending} pagination />
      </div>
    </main>
  )
}

export default AttendanceManagement