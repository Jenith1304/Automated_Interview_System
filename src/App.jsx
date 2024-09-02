import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Circle from './components/Circle';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Login } from './pages/Login';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';

function App() {
  // TO SEE IF INTEVIWER IS LOGGED IN
  const [interviewer, setInterviewer] = useState(true);
  return (
    <>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Circle />
        <Login />
        {/* <SignUp /> */}
        {/* <Profile interviewer={interviewer} /> */}
      </div>
    </>
  )
}

export default App
