import { Route, Routes } from 'react-router-dom';
import Main from './pages';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
        </Routes>
    )
}

export default MainRoutes;