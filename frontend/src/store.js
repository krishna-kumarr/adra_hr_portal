import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userReducer from './Storage/Slices/authSlice';
import hrCalenderReducer from './Storage/Slices/HrSlices/HrCalenderSlice';


const reducer = combineReducers({
    userState: userReducer,
    hrCalenderState: hrCalenderReducer
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      }).concat(thunk)
})

export default store;