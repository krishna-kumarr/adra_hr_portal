import React from 'react'
import Img from '../../Components/Resuable/Img'
import Images from '../../Utils/Images'

const Sidebar = () => {


    return (
        <div className='h-100 border-end'>
            <div className="container-fluid h-100">
                <div className="d-flex flex-wrap flex-column justify-content-evenly h-100">
                    <div className="sidebar-header-height border-bottom">
                        <div className="container-fluid h-100 d-flex flex-wrap align-items-center">
                            <div className="d-flex flex-wrap align-items-start">
                                <div className="col-3">
                                    <Img src={Images.sideBarHeaderLogo} dataFrom={"hr sidebar"} className={'img-fluid'} width={'80px'} height={'80px'}/>
                                </div>
                                <div className="col-9">
                                    <h6>Adra</h6>
                                    <p className='text-secondary m-0'>HR Management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-body-height border-bottom">
                        <div className="container-fluid">
                            1ausd
                        </div>
                    </div>
                    <div className="sidebar-footer-height">
                        <div className="container-fluid">
                            asd
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar