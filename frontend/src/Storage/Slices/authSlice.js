import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: true,
        isAuthenticated: false
    },
    reducers: {
        //login api
        loginRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        loginSuccess(state, action) {
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload.data
            }
        },
        loginFailed(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        //

        // clear error 
        clearError(state, action) {
            return {
                ...state,
                error: null
            }
        },
        //

        // logout api 
        logoutSuccess(state, action) {
            return {
                loading: false,
                isAuthenticated: false,
            }
        },
        logoutFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        //


        // load user api 
        loadUserRequest(state, action) {
            return {
                ...state,
                isAuthenticated: false,
                loading: true,
            }
        },
        loadUserSuccess(state, action) { 
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload.data
            }
        },
        loadUserFail(state, action) {
            return {
                ...state,
                loading: false,
            }
        },
        //

    }
});

const { actions, reducer } = authSlice;

export const {
    loginRequest,
    loginSuccess,
    loginFailed,
    clearError,
    logoutSuccess,
    logoutFail,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail
} = actions;

export default reducer;