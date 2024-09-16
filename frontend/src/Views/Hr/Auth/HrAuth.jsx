import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const HrAuth = () => { 
    const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
    const pageRender = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname

        if (pathname === "/hr_dashboard" || pathname === "/hr_dashboard/") {
            pageRender("/hr_dashboard/home")
        }
    }, [])


    return (
        <>
            <Outlet />
        </>
    )
}

export default HrAuth