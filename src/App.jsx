import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Circle from './components/Circle';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Login } from './pages/Login';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import {BrowserRouter as Router,
  Route, Routes} from  'react-router-dom';
import ChangePassword from './pages/ChangePassword';
import ManageJobs from './pages/ManageJobs';
import PostJobs from './pages/PostJobs';
import MyProfile from './pages/MyProfile';
function App() {
  // TO SEE IF INTEVIWER IS LOGGED IN
  const [interviewer, setInterviewer] = useState(true);
  return (
    <>
    <Router>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar interviewer={interviewer}/>
        <Circle />
        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <Profile interviewer={interviewer} /> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          {/* <Route path='/changepassword' element={<ChangePassword/>}/> */}
          <Route path='/profile/*' element={<Profile interviewer={interviewer}/>}/>
          {/* <Route path='/managejobs' element={<ManageJobs/>}/> */}
          {/* <Route path='/postjobs' element={<PostJobs/>}/> */}
          {/* <Route path='/myprofile' element={<MyProfile/>}/> */}
          
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
