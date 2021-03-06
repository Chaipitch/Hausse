import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import Explore from './pages/Explore'
import ForgotPass from './pages/ForgotPass';
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'


function App() {
  return (
    
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Explore/>}/>
            <Route path='/offers' element={<Offers/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/forgot-password' element={<ForgotPass/>}/>
          </Routes>
        {/* Navbar */}
        <NavBar/>
        </Router>
      </>
    
  );
}

export default App;
