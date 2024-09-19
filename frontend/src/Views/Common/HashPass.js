import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { LuUpload } from 'react-icons/lu';
import { BsFiletypeCsv } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import axiosInstance from '../../Services/axiosInstance';

const HashPass = () => {
    const [excelData, setExcelData] = useState([]);
    const [uploadingFile, setUploadingfile] = useState(false);
    const [progressPercentage, setProgressPercentage] = useState(0);
    const [tableData, setTableData] = useState([]);
    const [endpointCalled, setEndPointCalled] = useState(false)

    const onDropResume = useCallback((acceptedFiles) => {
        setExcelData(acceptedFiles);
    }, []);

    const {
        getRootProps: getRootProps,
        getInputProps: getInputProps,
        isDragActive: isDragActiveResume,
    } = useDropzone({
        onDrop: onDropResume,
        maxFiles: 1,
        // accept: {
        //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
        //     "application/vnd.ms-excel": [],
        //     "csv":[]
        // }
    });

    const handleUploadXlfile = async () => {
        setUploadingfile(true);
        setProgressPercentage(0);
        setEndPointCalled(true)

        try {
            const formData = new FormData();
            formData.append("file", excelData[0]);

            const config = {
                onUploadProgress: function (progressEvent) {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 99) / progressEvent.total
                    );
                    setProgressPercentage(percentCompleted);
                }
            }


            const response = await axiosInstance.post("/upload_csv", formData, config)

            if (response) {
                setUploadingfile(false);
                setProgressPercentage(0);
                setExcelData(response.data.message)
                setTableData(response.data.data)
            } else {
                setUploadingfile(false);
                setTableData([])
            }
        } catch (err) {
            console.log(err)
        }
    }

    const hashdPasswordStatus = (status) => {
        switch (status) {
            case "success":
                return <span className='text-success'>{status}</span>
            case "failed":
                return <span className='text-danger'>{status}</span>
            case "no password":
                return <span className='text-warning'>{status}</span>
            default:
                break;
        }
    }


    return (
        <div className='vh-100 w-100 d-flex flex-wrap align-items-center justify-content-center'>
            <div className="col-12 py-5 row justify-content-center">
                <div className="card uploadXLCard rounded-4 col-11">
                    {
                        endpointCalled ?
                            // progressPercentage !== 0 ?
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead >
                                        <tr>
                                            {/* <th scope="col" className='bg-light py-3'>S.no</th> */}
                                            <th scope="col" className='bg-light py-3'>user_id</th>
                                            <th scope="col" className='bg-light py-3'>email_id</th>
                                            <th scope="col" className='bg-light py-3'>user_pwd</th>
                                            <th scope="col" className='bg-light py-3'>hashed_pwd</th>
                                            <th scope="col" className='bg-light py-3'>match</th>
                                            <th scope="col" className='bg-light py-3'>hashed_pwd_by_node</th>
                                            <th scope="col" className='bg-light py-3'>user_role_fk</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData.map((tableData, ticketIndex) => {
                                                return tableData.user_id ?
                                                    <tr key={ticketIndex}>
                                                        {/* <td>{ticketIndex + 1}</td> */}
                                                        <td>{tableData.user_id}</td>
                                                        <td>{tableData.email_id}</td>
                                                        <td>{tableData.user_pwd}</td>
                                                        <td>{tableData.hashed_pwd}</td>
                                                        <td>{hashdPasswordStatus(tableData.match)}</td>
                                                        <td>{tableData.hashed_pwd_by_node}</td>
                                                        <td>{tableData.user_role_fk}</td>
                                                    </tr>
                                                    :
                                                    null
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                            // :
                            // null

                            :
                            excelData.length > 0 ?
                                <div className="card-body p-0">
                                    <div className="w-100 py-5">
                                        <div className="py-5 d-flex flex-wrap justify-content-center">
                                            <div className="col-11 d-inline-flex">
                                                <div className="col-1">
                                                    <BsFiletypeCsv className="fs-4" />
                                                </div>
                                                <div className="col-10">
                                                    <p className="resume-name">
                                                        {excelData[0].name ? excelData[0].name : null}
                                                    </p>
                                                </div>
                                                <div className="col-1">
                                                    <button type="button" className='btn border-0' onClick={() => { setExcelData([]) }} disabled={uploadingFile}>
                                                        <AiTwotoneDelete className="fs-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 d-flex flex-wrap justify-content-center">
                                            <div className="col-8 col-lg-6">
                                                {
                                                    uploadingFile ?
                                                        <>
                                                            <button type="button" className='btn btn-md btn-primary w-100 rounded-3' disabled>
                                                                <div className="text-center align-middle">
                                                                    <div className="spinner-border" role="status">
                                                                        <span className="visually-hidden">Loading...</span>
                                                                    </div>
                                                                    <span className='ps-3'>Uploading</span>
                                                                </div>
                                                            </button>

                                                            <div className="col-12 mt-3">
                                                                <div className="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                                    <div className="progress-bar progress-bar-striped bg-primary" style={{ width: `${progressPercentage}%` }}></div>
                                                                </div>
                                                            </div>
                                                        </>
                                                        :
                                                        <button type="button" className='btn btn-md btn-primary w-100 rounded-3' onClick={handleUploadXlfile}>Upload</button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                :

                                <div {...getRootProps()} className="cursorPointer">

                                    <input {...getInputProps()} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                                    {isDragActiveResume ? (
                                        <div className="card-body p-0">
                                            <div className="w-100 py-5 text-center">
                                                <div className="py-5">
                                                    <div className='mb-3'>
                                                        <BsFiletypeCsv className="fs-4" />
                                                    </div>
                                                    <p className="mb-0 apply-job-brand-color">Drop the files here ...</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="card-body p-0">
                                            <div className="w-100 py-5 text-center">
                                                <div className='mb-3'>
                                                    <LuUpload className="fs-4" />
                                                </div>

                                                {/* <h6 className='mb-2'>Drag &amp; Drop</h6> */}
                                                <p className='mb-2'>Select files to upload</p>
                                                <p className="text-secondary"> Supports: xls,xlsx only</p>
                                            </div>
                                        </div>
                                    )}

                                </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default HashPass