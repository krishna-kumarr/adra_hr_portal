import { configureStore } from "@reduxjs/toolkit";
import CalenderSlice from "./CalenderSlice/CalenderSlice";

const Store = configureStore({
    reducer: {
        calender: CalenderSlice
    },
})

export default Store;