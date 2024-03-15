import { Routes, Route } from 'react-router-dom'

import { LognIn } from '../pages/CustomTheme'

export function AuthRoutes() {
    return(
        <Routes>
            <Route path='/' element={<LognIn />} />
        </Routes>
    )
}