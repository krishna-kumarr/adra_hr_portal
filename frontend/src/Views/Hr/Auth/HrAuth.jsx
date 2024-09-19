import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import HrMainLayout from '../Resuable_comps/HrMainLayout';

const HrAuth = () => {
    const navigate = useNavigate();
    const { isAuthenticated, loading } = useSelector(state => state.userState)

    useEffect(() => { 
        if (!isAuthenticated && !loading) {
            navigate('/', { replace: true })
        }
    }, [isAuthenticated,loading])


    return (
        <>
            <HrMainLayout />
        </>
    )
}

export default HrAuth