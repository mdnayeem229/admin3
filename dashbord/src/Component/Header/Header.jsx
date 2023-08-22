import React from 'react';
import './Header.css';
import Img1 from '../../images/Group 108.png';
import Img2 from '../../images/Group 123.png';
import Img3 from '../../images/Group 124.png';
import Img4 from '../../images/Group 125.png';
function Header() {
  return (
    <div className="content">
      <div className="container">
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
  )
}


export default Header