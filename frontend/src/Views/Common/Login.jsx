import React from 'react'
import LoginForm from '../../Components/Forms/LoginForm'

const Login = () => {

  return (
    <div className="login-form">
      <div className="container">
        <div className="sign-in-total-height">
          <div className="row align-items-center justify-content-center h-100">

            <div className="col-11 col-sm-10 col-xl-9 row h-75 shadow-lg rounded-4 bg-white">
              {/* sign in image */}
              <div className="col-lg-7 d-none d-lg-flex flex-wrap h-100 align-items-center justify-content-center">
                <img src={require('../../assets/images/image.png')} alt="right logo" className='w-75 h-75' />
              </div>

              {/* sign in form */}
              <LoginForm/>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login