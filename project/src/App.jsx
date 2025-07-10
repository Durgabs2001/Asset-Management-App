
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AdminDashboard from './Components/Admin/AdminDashboard';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homepage from './Components/Common/Homepage';
import Features from './Components/Common/Features';
import About from './Components/Common/About';
import Contact from './Components/Common/Contact';
import Login from './Components/User/Login';
import Createaccount from './Components/User/Createaccount';
import UserDashboard from './Components/User/UserDashboard';
import BrowseResources from './Components/User/BrowseResources';
import Booking from './Components/User/Booking';
import MyBookings from './Components/User/MyBookings';
import Bookingdetails from './Components/User/Bookingdetails';
import Profile from './Components/User/Profile';
import Chat from './Components/User/Chat';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/admin_dashboard' element={<AdminDashboard/>}></Route>
        <Route path='/features' element={<Features/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/userlogin' element={<Login/>}></Route>
        <Route path='/create_account' element={<Createaccount/>}></Route>
        <Route path='/user_dashboard' element={<UserDashboard/>}></Route>
        <Route path='/browse_resources' element={<BrowseResources/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
        <Route path='/mybookings' element={<MyBookings/>}></Route>
        <Route path='/bookinginfo' element={<Bookingdetails/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/chat' element={<Chat/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
