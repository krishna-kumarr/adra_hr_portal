import { createSlice } from "@reduxjs/toolkit";


const HrCalenderSlice = createSlice({
    name: "hr-calender-slice",
    initialState: {
        monthIndex: '',
        currentMonthArray:[],
        smallCalendarMonth: null,
        showEventModal: false,
        daySelected: '',
        selectedEvent: null,
        labels: [],
        savedEvents: [],
        savedEventsDupli: []
    },
    reducers: {
        updatemonthIndex(state, action) {  
            return {
                ...state,
                monthIndex : action.payload
            }
        },
        updatecurrentMonth(state, action) {  
            console.log(action.payload)
            return {
                ...state,
                currentMonthArray : action.payload
            }
        },
        updatesmallCalendarMonth(state, action) {  
            return {
                ...state,
                smallCalendarMonth : action.payload
            }
        },
        updateshowEventModal(state, action) {  
            return {
                ...state,
                showEventModal : action.payload
            }
        },
        updatedaySelected(state, action) {  
            return {
                ...state,
                daySelected : action.payload
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
    updatedaySelected
} = actions;

export default reducer;