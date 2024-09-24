import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { HiEyeOff } from 'react-icons/hi'
import { HiMiniEye } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login, clearAuthError } from '../../Storage/Action/authAction';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticated, user } = useSelector(state => state.userState);

    const [eyeOpenIcon, setEyeOpenIcon] = useState(false);
    const [userDetails, setUserDetails] = useState({
        username: '',
        password: ''
    });


    const handleSignIn = () => {
        dispatch(login(userDetails.username, userDetails.password))
    }

    useEffect(() => {
        if (isAuthenticated) {
            // navigate('/dashboard', { replace: true });
            navigate('/hr_dashboard', { replace: true });
        }

        if (error) {
            toast(error, {
                position: "top-right",
                type: 'error',
                onOpen: () => { dispatch(clearAuthError) }
            })
            return
        }
    }, [isAuthenticated, error, loading])

    return (
        <form className="col-lg-5 d-inline-flex align-items-center pe-lg-5">
            <div className="col-12">
                <div className="text-center mb-5">
                    <img src={require('../../assets/images/adra logo.png')} alt="company logo" width={80} height={55} />
                </div>
                <p className='fs-3'>Sign In</p>

                <div class="mb-3 mt-4">
                    <input type="text" class={`form-control py-3 bg-light text-secondary ${error && userDetails.username === '' ? "border-danger" : ""}`} placeholder="Username" value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} />
                </div>

                <div class="mb-3 position-relative">
                    <input type={eyeOpenIcon ? "text" : "password"} class={`form-control py-3 bg-light text-secondary ${error && userDetails.password === '' ? "border-danger" : ""}`} placeholder="Password" value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
                    {
                        eyeOpenIcon ?
                            <HiMiniEye className='eye-open-icon' onClick={() => setEyeOpenIcon(!eyeOpenIcon)} />
                            :
                            <HiEyeOff className='eye-close-icon' onClick={() => setEyeOpenIcon(!eyeOpenIcon)} />
                    }
                </div>

                <div class="mb-3 text-end pe-1">
                    <Link to="/forgot-password" className='text-muted'>Forgot Password</Link>
                </div>

                {
                    loading ?
                        <button type="button" class="btn btn-brand-color w-100 py-3 mt-3 fw-bold">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </button>
                        :
                        <button type="button" class="btn btn-brand-color w-100 py-3 mt-3 fw-bold" onClick={handleSignIn}>LogIn</button>

                }
            </div>
        </form>
    )
}

export default LoginForm