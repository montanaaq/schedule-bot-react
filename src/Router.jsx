import { Route, Routes } from 'react-router-dom'
import Home from './Components/Screens/Home/Home';
import Profile from './Components/Screens/Profile/Profile';
import Schedule from './Components/Screens/Schedule/Schedule';

export default function Router() {
    return ( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/schedule' element={<Schedule />}/>
        </Routes>
     );
}