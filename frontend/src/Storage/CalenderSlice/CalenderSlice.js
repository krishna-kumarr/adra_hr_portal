import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    monthIndex: '',
    smallCalendarMonth: null,
    daySelected: '',
    showEventModal: false,
    selectedEvent: null,
    labels: [],
    savedEvents: [],
    savedEventsDupli: []
}

const CalenderSlice = createSlice({
    name: 'Hr home page',
    initialState,
    reducers: {
        updatemonthIndex: (state, action) => {
            state.monthIndex = action.payload
        },
        updateSmallCalendarMonth: (state, action) => {
            state.smallCalendarMonth = action.payload
        },
        
        updateDaySelected: (state, action) => {
            state.daySelected = action.payload
        },
        
        updateShowEventModal: (state, action) => {
            state.showEventModal = action.payload
        },

        updateSelectedEvent: (state, action) => {
            state.selectedEvent = action.payload
        },

        updateLabels: (state, action) => {
            state.labels = action.payload

            const newSavedEvents = state.savedEvents.filter((evt) =>
                action.payload
                    .filter((lbl) => lbl.checked)
                    .map((lbl) => lbl.label)
                    .includes(evt.label)
            );

            state.savedEventsDupli = newSavedEvents  
        },

        updateSavedEvents: (state, action) => {
            localStorage.setItem("savedEvents", JSON.stringify(action.payload));
            state.savedEvents = action.payload
        },

        setSavedEventsDupli: (state, action) => {
            // Update the labels state
            const uniqueLabels = [...new Set(action.payload.map((evt) => evt.label))];
            const label = uniqueLabels.map((label) => {
                const currentLabel = state.labels.find((lbl) => lbl.label === label);
                return {
                    label,
                    checked: currentLabel ? currentLabel.checked : true,
                };
            }); 

            const newSavedEvents = action.payload.filter((evt) =>
                label
                    .filter((lbl) => lbl.checked)
                    .map((lbl) => lbl.label)
                    .includes(evt.label)
            );
            state.savedEventsDupli = newSavedEvents 

            state.labels = label
        }
    }
})

export const {
    updatemonthIndex, updateSmallCalendarMonth,
    updateDaySelected, updateShowEventModal,
    updateSelectedEvent, updateLabels,
    updateSavedEvents, setSavedEventsDupli

} = CalenderSlice.actions

export default CalenderSlice.reducer;