import {
    updatemonthIndex,
    updateshowEventModal,
    updatesmallCalendarMonth,
    updatecurrentMonth,
    updatedaySelected
} from '../Slices/HrSlices/HrCalenderSlice';



export const updateMonthAction = (month) => dispatch => {
    dispatch(updatemonthIndex(month))
}

export const handlePrevMonthAction = (month) =>  dispatch =>{
    dispatch(updatemonthIndex(month))
}

export const handleNextMonthAction = (month) => dispatch =>{
    dispatch(updatemonthIndex(month))
}

export const handleResetAction = (month) => dispatch =>{
    dispatch(updatemonthIndex(month))
}

export const handleupdateShowEventModal = (boolean) => dispatch =>{
    dispatch(updateshowEventModal(boolean))
}

export const handleCurrentMonthArray = (array) => dispatch =>{
    dispatch(updatecurrentMonth(array))
}

export const handleDaySelected = (day) => dispatch =>{
    dispatch(updatedaySelected(day))
}

export const hanldeupdateSmallCalendarMonth = (month) => dispatch =>{
    dispatch(updatesmallCalendarMonth(month))
}