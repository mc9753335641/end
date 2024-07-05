// import logo from './logo.svg';
import './App.css';
import Topbar from './component/topbar/topbar.js';
import Nav from './component/navbar/nav.js'
import Home from './component/home/home.js';
import About from './component/about/about.js';
import Service from './component/service/service.js';
import Footer from './component/footer/footer.js'
import Contact from './component/contact/contact.js';
import { Route,Routes } from 'react-router-dom';
import Ragister from './component/ragister/ragister.js';
import Login from './component/login/login.js';
// import { Path } from 'react-router-dom';
import User from './component/user/user.js'
import Admin from './component/admin/admin.js'
import Logout from './component/logout/logout.js';
import Manageuser from './component/manageuser/manageuser.js';
import Change from './component/changepassword/changepassword.js';
import Uchange from './userchange passord/userchangepassword.js';
import Profile from './component/editprofile/admin_ edit_ profile.js';
import Uprofile from './userEditprofile/user_edit_profile.js';
import Addcatogery from './component/addcatogery/addcatogery.js';
import ViewShipment from './component/viewcatogery/viewcatagery.js';
import Addsubcatogery from './component/addsubcatageroy/addsubcategeroy.js'
import Viewsubcat from './component/viewsubcatagerory/viewsubcatagerory.js';
import Addshipment from './component/addshipment/addshipment.js';
import Vsuser from './component/viewshipment/viewshipment.js';
import Viewbid from './component/viewbid/viewbid.js';
import AdminviewShipment from  './component/adminviewcatagoery/adminviewcatagoery.js'
function App() {
  return ( 
<>
<Topbar/>
<Nav/>
<Routes>
  <Route path='/'element={<Home/>}></Route>
  <Route path='/about'element={<About/>}></Route>
  <Route path='/service' element={<Service/>}></Route>
  <Route path='/contact'element={<Contact/>}></Route>
  <Route path='/ragister'element={<Ragister/>}></Route>
  <Route path='/login'element={<Login/>}></Route>
  <Route path='/admin'element={<Admin/>}></Route>
  <Route path='/user'element={<User/>}></Route>
  <Route path='/logout'element={<Logout/>}></Route>
  <Route path='/manageuser'element={<Manageuser/>}></Route>
  <Route path='/change'element={<Change/>}></Route>
  <Route path='/uchange'element={<Uchange/>}></Route>
  <Route path='/eprofile'element={<Profile/>}></Route>
  <Route path='/uprofile'element={<Uprofile/>}></Route>
  <Route path='/acat'element={<Addcatogery/>}></Route>
  <Route path='/ascat'element={<Addsubcatogery/>}></Route>
  <Route path='/viewcategory'element={<ViewShipment/>}></Route>
  <Route path='/viewsubcat/:catnm'element={<Viewsubcat/>}></Route>
  <Route path='/addship'element={<Addshipment/>}></Route>
  <Route path='/viewship/:subcatnm'element={<Vsuser/>}></Route>
  <Route path='/viewbid/:id'element={<Viewbid/>}></Route>
  <Route path ='/adminview' element={<AdminviewShipment/>}></Route>
</Routes>
<Footer/>
</>   
  );
}

export default App;
