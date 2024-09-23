import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedAuth = () => {
    const { isAuthenticated,user } = useSelector(state => state.userState);
    const navigate = useNavigate();


    useEffect(() => {
        if (isAuthenticated) {
            // switch (user.role) {
            //     case "Hr":
                    navigate('/dashboard/hr_dashboard', { replace: true });
            //         break;

            //     case "developer":
            //         navigate('/dashboard/developer_dashboard', { replace: true });
            //         break;

            //     default:
            //         break;
            // }
        }
    }, [isAuthenticated])

    return (
        <Outlet/>
    )
}

export default ProtectedAuth