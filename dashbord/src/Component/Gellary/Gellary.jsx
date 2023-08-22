import React from 'react'
import './Gellary.css'
import Img1 from '../../images/Group 19.png';
import Img2 from '../../images/Group 64.png';
import Img3 from '../../images/Group2.png';
import Img4 from '../../images/Vector.png';
function Gellary() {
  return (
    <div className='content'>
        <div className="container">
<div className="gellary">
    <h3>MY STATS</h3>
</div>
    <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-4">
        <div className="gellary-bg">
        <img src={Img4} alt="" />
        <h3>batch <br /><span>10</span></h3>
        <a href=""><i class="fa-solid fa-angle-right"></i></a>
    </div>
</div>
<div className="col-sm-12 col-md-6 col-lg-3 mt-4">
<div className="gellary-bg gellary-sky">
        <img src={Img2} alt="" />
        <h3>Assessment<br /><span>66</span></h3>
        <a href=""><i class="fa-solid fa-angle-right"></i></a>
    </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-3 mt-4">
<div className="gellary-bg gellary-red">
        <img src={Img1} alt="" />
        <h3>Announcement <br /><span>61</span></h3>
        <a href=""><i class="fa-solid fa-angle-right"></i></a>
    </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-3 mt-4">
    <div className="gellary-bg gellary-olive">
        <img src={Img3} alt="" />
        <h3>Course Resource
 <br /><span>14</span></h3>
 <a href=""><i class="fa-solid fa-angle-right"></i></a>
    </div>
</div>


    </div>
    

</div>
</div>




  )
}

export default Gellary