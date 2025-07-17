
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
import ResourceManagement from './Components/Admin/ResourceManagement';
import EditResource from './Components/Admin/EditResource';
import AddResource from './Components/Admin/AddResource';
import BookingManagement from './Components/Admin/BookingManagement';
import UserManagement from './Components/Admin/UserManagement';
import AddUser from './Components/Admin/AddUser';
import Reporting from './Components/Admin/Reporting';
import Maintenance from './Components/Admin/Maintenance';
import EditUser from './Components/Admin/EditUser';

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
        <Route path='/booking/:id' element={<Booking/>}></Route>
        <Route path='/mybookings' element={<MyBookings/>}></Route>
        <Route path='/bookinginfo' element={<Bookingdetails/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/chat' element={<Chat/>}></Route>
        <Route path='/manage_resource' element={<ResourceManagement/>}></Route>
        <Route path='/edit_asset/:id' element={<EditResource/>}></Route>
        <Route path='/add_resource' element={<AddResource/>}></Route>
        <Route path='/manage_booking' element={<BookingManagement/>}></Route>
        <Route path='/manage_user' element={<UserManagement/>}></Route>
        <Route path='add_users' element={<AddUser/>}></Route>
        <Route path='/reporting' element={<Reporting/>}></Route>
        <Route path='/maintenance' element={<Maintenance/>}></Route>
        <Route path='/edit_users/:id' element={<EditUser/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
