import { createSlice } from "@reduxjs/toolkit";
import { uiSlice } from "../ui/uiSlice";
import { addHours } from "date-fns";

const tempEvent = {
    title: 'Cumpleaños de Elias',
    notes: 'Comprarle un AE86 Trueno',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user:{
        id: '123',
        name: 'Elias'
    }
}

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