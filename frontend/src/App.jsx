import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home/Home';
import Donor_Eligibility from './Donor-Eligibility/Donor_Eligibility';
import Eligibility_Check from './Eligibility_check/Eligibility_Check';
import Blood_Donor_Basic from './Blood_Donor_Basic/Blood_Donor_Basic';
import Tips_for_Student from './Blood_Donor_Basic/Tips_for_Student';
import Blood_type from './Blood_types/Blood_type';
import About from './About/About';
import BloodReward from './Blood_reward/BloodReward';
import HighSchoolDonors from './HighSchoolDonor/HighSchoolDonors';
import Footer from './Footer';
import BloodDonationLocations from './Location/BloodDonationLocations';
import Learn from './Learn/Learn';
import Contact1 from './Contact/Contact1';
import Request from './Request/Request';
import DonateNow from './Donate_now/DonateNow';
import Login from './login/Login';
import MatchResults from './MatchResults';
import Signup from './login/Signup';
import ForgotPassword from './login/ForgotPassword';
import Login_D from './Donate_now/Login_D';
import Forgotpsw_D from './Donate_now/Forgotpsw_D';
import DonorProfile from './Donate_now/DonorProfile';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Donor_Eligibility' element={<Donor_Eligibility></Donor_Eligibility>}></Route>
           <Route path='/eligibility' element={<Eligibility_Check></Eligibility_Check>}></Route>
           <Route path='/Donor_basic' element={<Blood_Donor_Basic></Blood_Donor_Basic>}></Route>
           <Route path='/tips' element={<Tips_for_Student></Tips_for_Student>}></Route>
           <Route path='/types' element={<Blood_type></Blood_type>}></Route>
           <Route path='/About' element={<About></About>}></Route>
           <Route path='/Reward' element={<BloodReward></BloodReward>}></Route>
           <Route path='/HighSchool' element={<HighSchoolDonors></HighSchoolDonors>}></Route>
           <Route path='/footer' element={<Footer></Footer>}></Route>
           <Route path='/location' element={<BloodDonationLocations></BloodDonationLocations>}></Route>
           <Route path='/learn' element={<Learn></Learn>}></Route>
           <Route path='/contact' element={<Contact1></Contact1>}></Route>
           <Route path='/Request' element={<Request></Request>}></Route>
           <Route path='/Donate' element={<DonateNow></DonateNow>}></Route>
           <Route path='/Login' element={<Login></Login>}></Route>
           <Route path='/match-results' element={<MatchResults></MatchResults>}></Route>
           <Route path='/signup' element={<Signup></Signup>}></Route>
           <Route path='/Forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
           <Route path='/Login_D' element={<Login_D></Login_D>}></Route>
           <Route path='/forgotpsw_D' element={<Forgotpsw_D></Forgotpsw_D>}></Route>
           <Route path='/DonorProfile' element={<DonorProfile></DonorProfile>}></Route>
        </Routes>
        </Router> 
    </>
  )
}

export default App
