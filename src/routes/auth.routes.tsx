import { Routes, Route } from 'react-router-dom'

import { LognIn } from '../pages/LognIn'

export function AuthRoutes() {
    return(
        <Routes>
            <Route path='/' element={<LognIn />} />
        </Routes>
    )
}