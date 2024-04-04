import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth' 
import { CalendarPage } from '../calendar'

export const AppRouter = () => {
    const authStatus = 'not-authenticated' // esto seria temporal

    return (
        <Routes>
            {
                ( authStatus === 'not-authenticated')
                ? <Route path='/auth/*' element={ <CalendarPage/> }/>
                : <Route path='*' element={ <CalendarPage/> } />
            }

            <Route path='*' element={ <Navigate to={'/auth/Login'} /> } />
        </Routes>
    )
}