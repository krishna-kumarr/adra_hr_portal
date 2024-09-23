import React, { useEffect } from 'react';
import { FaRegBell } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";
import { RiMenuUnfold2Line } from "react-icons/ri";
import Images from '../../Utils/Images';
import HrRightsideCalender from '../../Views/Hr/Resuable_comps/HrRightsideCalender';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Storage/Action/authAction';
import { setSavedEventsDupli, updateDaySelected, updateLabels, updatemonthIndex, updateSavedEvents, updateSelectedEvent } from '../../Storage/CalenderSlice/CalenderSlice';
import dayjs from 'dayjs';


const HrNav = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, user, loading } = useSelector(state => state.userState)

    const handleLogout = () =>{
        dispatch(logout)
    }

    return (
        <div class="container-fluid px-3 h-100">
            <Link class="navbar-brand" to="/hr_dashboard">
                <img src={Images.adraLogo} alt="Bootstrap" width="50" height="35" />
                {/* <span className='ps-3 text-secondary d-none d-sm-inline-block nav-adra-font-size mt-2'>Adra Product studio</span> */}
            </Link>

            <div className="col-5 col-sm-3 col-lg-2 col-xxl-1 d-flex flex-wrap gap-3 align-items-center">
                <div className="col notification text-center border rounded-3 py-2">
                    <FaRegBell className='fs-5 text-secondary pointer-cursor' />

                    <div className="notification-content shadow-lg bg-light p-3 text-start">
                        <p>No data found</p>
                    </div>
                </div>

                <div className="col profile rounded-circle">
                    <img src={Images.defaultUser} alt="user image" className='rounded-circle pointer-cursor border p-1' width="45" height="45" />
                    {
                        isAuthenticated && user ?
                            <div className="profile-content shadow-lg bg-light">
                                <div className="profile-color-gap position-relative mb-5">
                                    <div className="profile-absolute-image-two ">
                                        <img src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png" alt="user image" className='rounded-circle pointer-cursor' width="60" height="60" />
                                    </div>
                                    <div className="profile-absolute-edit-icon">
                                        <Link to="edit-profile" className='text-dark'>
                                            <MdModeEditOutline className='fs-5 pointer-cursor' />
                                        </Link>
                                    </div>
                                </div>
                                <div className="d-flex flex-column justify-content-between profile-content-absolute-height px-4">
                                    <div className="text-center col-12">
                                        <h5>{user.name}</h5>
                                        <p>{user.role}</p>
                                    </div>
                                    <div className='col-12'>
                                        <button type='button' className='btn btn-sm w-100 btn-outline-secondary' onClick={handleLogout}>
                                            <span><CiLogout className='fs-5' /></span>
                                            <span className='ps-2'>sign Out</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            :
                            null
                    }

                </div>

                <div className="col d-xl-none">
                    <button type="button" className='btn btn-light' data-bs-toggle="offcanvas" href="#navbaroffcanvas" role="button" aria-controls="navbaroffcanvas">
                        <RiMenuUnfold2Line />
                    </button>

                    <div class="offcanvas offcanvas-start" tabindex="-1" id="navbaroffcanvas" aria-labelledby="navbaroffcanvasLabel">
                        <div class="offcanvas-header">
                            <div class="offcanvas-title">
                                <Link class="navbar-brand" to="/hr_dashboard">
                                    <img src={Images.adraLogo} alt="Bootstrap" width="50" height="35" />
                                    <span className='ps-3 text-secondary nav-adra-font-size mt-2'>Adra Product studio</span>
                                </Link>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body p-0">
                            <HrRightsideCalender />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HrNav