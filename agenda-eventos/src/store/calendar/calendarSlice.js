import { createSlice } from "@reduxjs/toolkit";
import { uiSlice } from "../ui/uiSlice";

export const calendarSlice = createSlice({
    name: 'calendar',

    initialState: {
        events: [],
        activeEvent: null
    },

    reducers: {
        // aqui creamos las acciones
        increment: (state) => {
            state.counter += 1
        },
    }
})

export const { increment } = uiSlice.actions