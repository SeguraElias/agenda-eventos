import { createSlice } from "@reduxjs/toolkit";
import { addHours, getTime } from "date-fns";


const tempEvent = {
    _id: new Date().getTime(),
    title: 'Cumpleaños del Tecnico',
    notes: 'Comprarle un juego de nintendo switch',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user:{
        id: '123',
        name: 'Virgilio'
    }
};

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null
    },

    reducers: {
        onSetActiveEvent: (state, {payload}) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, {payload}) => {
            state.events.push(payload);
            state.activeEvent = null;
        }
    }
});

export const { onSetActiveEvent, onAddNewEvent } = calendarSlice.actions;
