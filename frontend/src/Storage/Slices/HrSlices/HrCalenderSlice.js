import { createSlice } from "@reduxjs/toolkit";


const HrCalenderSlice = createSlice({
    name: "hr-calender-slice",
    initialState: {
        monthIndex: '',
        currentMonthArray: [],
        smallCalendarMonth: null,
        showEventModal: false,
        daySelected: '',
        selectedEvent: null,
        labels: [],
        savedEvents: [],
        eventSaveButton: false,
        getEventsLoading: false
    },
    reducers: {
        updatemonthIndex(state, action) {
            return {
                ...state,
                monthIndex: action.payload
            }
        },
        updatecurrentMonth(state, action) {
            return {
                ...state,
                currentMonthArray: action.payload
            }
        },
        updatesmallCalendarMonth(state, action) {
            return {
                ...state,
                smallCalendarMonth: action.payload
            }
        },
        updateshowEventModal(state, action) {
            return {
                ...state,
                showEventModal: action.payload,
                selectedEvent: action.payload ? state.selectedEvent : null
            }
        },
        updatedaySelected(state, action) {
            return {
                ...state,
                daySelected: action.payload
            }
        },


        updateAddEventRequest(state, action) {
            return {
                ...state,
                eventSaveButton: true
            }
        },
        updateAddEventSuccess(state, action) {
            return {
                ...state,
                eventSaveButton: false,
                showEventModal: false,
                savedEvents: [...state.savedEvents, action.payload.data]
            }
        },
        updateAddEventFailed(state, action) {
            return {
                ...state,
                eventSaveButton: false,
                error: action.payload
            }
        },


        updateEventRequest(state, action) {
            return {
                ...state,
                eventSaveButton: true
            }
        },
        updateEventSuccess(state, action) {
            return {
                ...state,
                eventSaveButton: false,
                showEventModal: false,
                savedEvents: action.payload
            }
        },
        updateEventFailed(state, action) {
            return {
                ...state,
                eventSaveButton: false,
                error: action.payload
            }
        },


        getEventRequest(state, action) {
            return {
                ...state,
                getEventsLoading: true
            }
        },
        getEventSuccess(state, action) {
            return {
                ...state,
                getEventsLoading: true,
                savedEvents: action.payload,
                selectedEvent:null
            }
        },
        getEventFailed(state, action) {
            return {
                ...state,
                getEventsLoading: false,
                error: action.payload
            }
        },
        updateselectedEvent(state, action) {
            return {
                ...state,
                selectedEvent: action.payload
            }
        },



        //socket add,update
        updateSocketAddEventRequest(state, action) {
            return {
                ...state,
                eventSaveButton: true
            }
        },
        updateSocketAddEventSuccess(state, action) {
            return {
                ...state,
                eventSaveButton: false,
                showEventModal: false,
                savedEvents: [...state.savedEvents, action.payload]
            }
        },



        // clear error 
        clearError(state, action) {
            return {
                ...state,
                error: null
            }
        }
    }
})

const { actions, reducer } = HrCalenderSlice;

export const {
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
} = actions;

export default reducer;