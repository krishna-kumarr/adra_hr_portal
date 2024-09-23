import axiosInstance from '../../Services/axiosInstance';
import {
    loginRequest,
    loginSuccess,
    loginFailed,
    clearError,
    logoutSuccess,
    logoutFail,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail,
} from '../Slices/authSlice';

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch(loginRequest())
        const {data} =await axiosInstance.post('/login', { username, password });
        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginFailed(error.response.data.message))
    }
}

export const clearAuthError = dispatch => {
    dispatch(clearError())
}


export const logout = async (dispatch) => {
    try {
        await axiosInstance.get('/logout');
        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutFail(error.response.data.message))
    }
}


export const loadUser = async (dispatch) => {
    try {
        dispatch(loadUserRequest())
        const {data} = await axiosInstance.get('/getuser');
        dispatch(loadUserSuccess(data))
    } catch (error) {
        dispatch(loadUserFail(error.response.data.message))
    }

}
