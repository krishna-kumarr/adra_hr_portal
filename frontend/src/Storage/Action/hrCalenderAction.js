import axiosInstance from '../../Services/axiosInstance';
import {
    updatemonthIndex,
    updatesmallCalendarMonth,
    updateshowEventModal,
    updatecurrentMonth,
    updatedaySelected,
    updateAddEventRequest,
    updateAddEventSuccess,
    updateAddEventFailed,

    updateEventRequest,
    updateEventSuccess,
    updateEventFailed,

    updateselectedEvent,

    getEventRequest,
    getEventSuccess,
    getEventFailed,

    updateSocketAddEventRequest,
    updateSocketAddEventSuccess,

    clearError
} from '../Slices/HrSlices/HrCalenderSlice';


export const updateMonthAction = (month) => dispatch => {
    dispatch(updatemonthIndex(month))
}

export const handlePrevMonthAction = (month) => dispatch => {
    dispatch(updatemonthIndex(month))
    dispatch(updatedaySelected(''))
}

export const handleNextMonthAction = (month) => dispatch => {
    dispatch(updatemonthIndex(month))
    dispatch(updatedaySelected(''))
}

export const handleResetAction = (month) => dispatch => {
    dispatch(updatemonthIndex(month))
}

export const handleupdateShowEventModal = (boolean) => dispatch => {
    dispatch(updateshowEventModal(boolean))
}

export const handleCurrentMonthArray = (array) => dispatch => {
    dispatch(updatecurrentMonth(array))
}

export const handleDaySelected = (day) => dispatch => {
    dispatch(updatedaySelected(day))
}

export const hanldeupdateSmallCalendarMonth = (month) => dispatch => {
    dispatch(updatesmallCalendarMonth(month))
}

export const updateSelectedEvent = (selectedEvent) => dispatch => {
    dispatch(updateselectedEvent(selectedEvent))
}

export const getSchedules = () => async (dispatch) => {
    try {
        dispatch(getEventRequest())
        const { data } = await axiosInstance.get("/get_schedules")
        dispatch(getEventSuccess(data.data))
    } catch (error) {
        dispatch(getEventFailed(error.response.data.message))
    }
}

export const addEvent = (event) => async(dispatch) => {
    try {
        dispatch(updateAddEventRequest(event))
        const { data } = await axiosInstance.post("/create_schedule", event)
        dispatch(updateAddEventSuccess(data))
    } catch (error) {
        dispatch(updateAddEventFailed(error.response.data.message))
    }
}

export const updateEvent = (event,originalSavedEvents) => async(dispatch) => {
    try {
        dispatch(updateEventRequest(event))
        const { data } = await axiosInstance.post("/update_schedule", event)

        const update = originalSavedEvents.map((v)=>{
            return v._id === data.data._id ? event : v
        })

        dispatch(updateEventSuccess(update))
    } catch (error) {
        dispatch(updateEventFailed(error.response.data.message))
    }
}



//socket events
export const socketAddEventRequest = () => dispatch => {
    dispatch(updateSocketAddEventRequest())
}

export const socketAddEventSuccess = (selectedEvent) => dispatch => {
    dispatch(updateSocketAddEventSuccess(selectedEvent))
}
//



//clear errors
export const clearErrors = dispatch => {
    dispatch(clearError())
}
//