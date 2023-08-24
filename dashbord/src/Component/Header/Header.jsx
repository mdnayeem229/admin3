import React, {useState} from 'react';
import './Header.css';
import Img1 from '../../images/Group 108.png';
import Img2 from '../../images/Group 123.png';
import Img3 from '../../images/Group 124.png';
import Img4 from '../../images/Group 125.png';
import logo from '../../images/logo 1.png';
import Img20 from '../../images/Group2.png';
import Img41 from '../../images/Group 12.png';
import Img42 from '../../images/Group 15.png';
import Img43 from '../../images/Group 19.png';
import Img44 from '../../images/Group 21.png';
import Img5 from '../../images/Group 23.png';
import Img6 from '../../images/Group 25.png';
import Img7 from '../../images/Group 27.png';
import Img8 from '../../images/Group 35.png';
import Img12 from '../../images/dashboard1.png';
import Img13 from '../../images/discussion 1.png';
import Img14 from '../../images/dashboard 5.png';
import Img15 from '../../images/education 1.png';
const Header = () => {
  const [isMobile, sidbar] = useState(false)
  function toggle(){
  sidbar(!isMobile);
  }
  return (
    
    <div className="content">
      <div className="container">
        <div className="main-hero">
          <div className="menu" onClick={toggle}> {isMobile ? ( <i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-bars"></i>)}
  </div>
    <div className="hero">
<h2>TEACHER DASHBORD</h2>
<div className="icon">
<a href=""><img src={Img1} alt="" /></a>
<a href=""><img src={Img2} alt="" /></a>
<a href=""><img src={Img3} alt="" /></a>
<a href=""><img src={Img4} alt="" /></a>
</div>
   </div>
   </div>
   </div>
   <div className={isMobile ? 'sidbar active' : 'sidbar' }>
 <a href="" className='logo' ><img src={logo} alt="" /></a>
 <nav>  
   
         <a href="" className='active1 text-white'><img src={Img12} alt="" />DASHBORD</a>
         <a href=""><img src={Img8} alt="" />My Profile</a>
         <a href=""><img src={Img13} alt="" />My Batches</a>
         <a href=""><img src={Img14} alt="" />My Calendar</a>
         <a href=""><img src={Img15} alt="" />My Students</a>
         <a href=""><img src={Img41} alt="" />My Users</a>
   
 <hr />
 
         <a href=""><img src={Img5} alt="" />Announcements</a>
         <a href=""><img src={Img43} alt="" />Assessments</a>
         <a href=""><img src={Img42} alt="" />Attendance</a>
         <a href=""><img src={Img20} alt="" />Course Resources</a>
         <a href=""><img src={Img44} alt="" />Payments</a>
   
 <hr />
 <a href=""><img src={Img7} alt="" />Lms Settings</a>
         <a href=""><img src={Img6} alt="" />Question Bank</a>

 </nav>
     </div>
</div>
  )
}
export default Header



