import { createSlice } from "@reduxjs/toolkit";
import { uiSlice } from "../ui/uiSlice";
import { addHours } from "date-fns";

const tempEvent = {
    _id: new Date().getTime(),
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
        events: [
            tempEvent
        ],
        activeEvent: null
    },

    reducers: {
        // aqui creamos las acciones
        onSetActiveEvent: (state, { payload } ) => {
            
        },
    }
})

export const { onSetActiveEvent } = uiSlice.actions