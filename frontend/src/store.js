import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userReducer from './Storage/Slices/authSlice';
import hrCalenderReducer from './Storage/Slices/HrSlices/HrCalenderSlice';
import hrInterviewReducer from './Storage/Slices/HrSlices/InterviewSlice';

const reducer = combineReducers({
    userState: userReducer,
    hrCalenderState: hrCalenderReducer,
    interviewState: hrInterviewReducer
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      }).concat(thunk)
})

export default store;