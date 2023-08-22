import React from 'react'
import './Table.css';
import Img1 from '../../images/Group 128.png';
import Img2 from '../../images/Group 129.png';
function Table() {
  return (
    <div className="content">
  <div className="container">
    <div className="row container-table">
    <div className="col-lg-6 col-md-12 table-bg gx-4 table-bg">
    <div className="table-header">
    <h3 className='table-text'>| INSTITUTE</h3><button>ADD INSTITUTE</button>
    </div>
<table className='table table-bordered table-striped table-hover'>
<tr>
    <td>1. Edbase Academy - Dhanmondi (EBAD)</td>
    <td><img src={Img1} alt="" /></td>
</tr>
<tr>
    <td>2. Edbase Academy - Gulshan (EBAD)</td>
    <td><img src={Img1} alt="" /></td>
</tr>
<tr>
    <td>3. Edbase Academy - Mohakhali (EBAD)</td>
    <td><img src={Img1} alt="" /></td>
</tr>

<tr>
    <td>4. Edbase Academy - Mohakhali (EBAD)</td>
    <td><img src={Img1} alt="" /></td>
</tr>

<tr>
    <td>5. Edbase Academy - Gulshan (EBAD)</td>
    <td><img src={Img1} alt="" /></td>
</tr>
</table>

</div>
<div className="col-lg-6 col-sm-12">
<div className="table-header">
    <h3>| MY USER</h3><button>ADD USER</button>
    </div>
<table class="table table-bordered table-striped table-hover table-1">
<tr>
    <th>Name</th>
<th>Roll</th>
<th>Phone</th>
<th>Edit</th>
</tr>
<tr>
    <td>Rafiue Rahman</td>
    <td>Teacher Assistant</td>
<td>01735952579</td>
<td><img src={Img2} alt="" /><img src={Img1} alt="" /></td>
</tr>
<tr>
    <td>Arup Saha</td>
    <td>Teacher Assistant</td>
<td>01735952579</td>
<td><img src={Img2} alt="" /><img src={Img1} alt="" /></td>
</tr>
<tr>
    <td>Ahona Karmakar</td>
    <td>Teacher Assistant</td>
<td>01735952579</td>
<td><img src={Img2} alt="" /><img src={Img1} alt="" /></td>
</tr>
<tr>
    <td>Mahin Islam Provat</td>
    <td>Teacher Assistant</td>
<td>01735952579</td>
<td><img src={Img2} alt="" /><img src={Img1} alt="" /></td>
</tr>
<tr>
    <td>Showvik Biswas</td>
    <td>Teacher Assistant</td>
<td>01735952579</td>
<td><img src={Img2} alt="" /><img src={Img1} alt="" /></td>
</tr>
<tr>
    <td>Abdul Fattah Nabeen</td>
    <td>Teacher Assistant</td>
<td>01735952579</td>
<td><img src={Img2} alt="" /><img src={Img1} alt="" /></td>
</tr>
</table>













</div>

</div>
    </div>
  </div>
  )
}

export default Table