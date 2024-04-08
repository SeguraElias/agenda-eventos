import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns';
import { CalendarEvent, Navbar , Calendarmodal} from '../';
import {getMessagesEs, localizer} from '../../helpers'
import { useState } from 'react';

const events = [{
    title: 'Cumpleaños del Team Leader',
    notes: 'Comprarle una taza de spiderman pequeño',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user:{
        id: '123',
        name: 'Elias'
    }
}]


export const CalendarPage = () => {

    const [ lastView, setLastView] = useState(localStorage.getItem('lastView') || 'agenda');

    const eventStyleGetter = (event, start, end, isSelected) => {
        
        const style = {
            backgroundColor: '#527375',
            borderRadius: '0px',
            color: 'white'
        }

        return {
            style
        }
    }

    const onDoubleClick = (event) => {
        console.log({doubleClick: event})
    }
    const onSelect = (event) => {
        console.log({click: event})
    }
    const onViewChange = (event) => {
        console.log({viewChanged: event})
    }

    return(
        <>
            <Navbar/>
            <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesEs()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}

                //colocar los eventos acá
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView = { onViewChange }

                defaultView={ lastView }

            />
            <Calendarmodal/>
        </>
    )
}