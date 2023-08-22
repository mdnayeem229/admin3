import React from 'react'
import './Navbar.css';
import logo from '../../images/logo 1.png';
import Img20 from '../../images/Group2.png';
import Img1 from '../../images/Group 12.png';
import Img2 from '../../images/Group 15.png';
import Img3 from '../../images/Group 19.png';
import Img4 from '../../images/Group 21.png';
import Img5 from '../../images/Group 23.png';
import Img6 from '../../images/Group 25.png';
import Img7 from '../../images/Group 27.png';
import Img8 from '../../images/Group 35.png';
import Img12 from '../../images/dashboard1.png';
import Img13 from '../../images/discussion 1.png';
import Img14 from '../../images/dashboard 5.png';
import Img15 from '../../images/education 1.png';
function Navbar() {
  return (
    <div className='sidbar'>
<a href="" className='logo' ><img src={logo} alt="" /></a>
<nav>
  
        <a href="" className='active1 text-white'><img src={Img12} alt="" />DASHBORD</a>
        <a href=""><img src={Img8} alt="" />My Profile</a>
        <a href=""><img src={Img13} alt="" />My Batches</a>
        <a href=""><img src={Img14} alt="" />My Calendar</a>
        <a href=""><img src={Img15} alt="" />My Students</a>
        <a href=""><img src={Img1} alt="" />My Users</a>
  
<hr />

        <a href=""><img src={Img5} alt="" />Announcements</a>
        <a href=""><img src={Img3} alt="" />Assessments</a>
        <a href=""><img src={Img2} alt="" />Attendance</a>
        <a href=""><img src={Img20} alt="" />Course Resources</a>
        <a href=""><img src={Img4} alt="" />Payments</a>
  
<hr />
<a href=""><img src={Img7} alt="" />Lms Settings</a>
        <a href=""><img src={Img6} alt="" />Question Bank</a>


</nav>
    </div>
  )
}

export default Navbar