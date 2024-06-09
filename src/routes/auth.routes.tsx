import { Routes, Route } from 'react-router-dom'

import { LogIn } from '../pages/LogIn'

export function AuthRoutes() {
    return(
        <Routes>
            <Route path='/' element={<LogIn />} />
        </Routes>
    )
}