import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumbs = () => {
    const location = useLocation();

    let currentLink = '';

    const crumbs = location.pathname.split('/')
        .filter(crumbs => crumbs !== '')
        .map((crumb, crumbIndex) => {
            currentLink += (`/${crumb}`)
            const crumbsLength = location.pathname.split('/')
            return (
                crumbsLength.length > 2 ?
                    <li className={`breadcrumb-item ${crumbIndex === location.pathname.split('/').length - 2 ? 'active' : ''}`} aria-current="page" key={crumb}>
                        {
                            crumbIndex === location.pathname.split('/').length - 2 ?
                                crumb
                                :
                                <Link to={currentLink}>{ crumb === 'hr_dashboard' ? "home" : crumb}</Link>
                        }
                    </li>

                    :
                    null
            )
        })

    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                {crumbs}
            </ol>
        </nav>
    )
}

export default BreadCrumbs