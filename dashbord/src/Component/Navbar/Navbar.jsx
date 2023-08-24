import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
const [open, setOpen] = useState (false)
  function handIncrease(){
setOpen(open +1)
  }
  return (
    <div>
      <h1>My counter {open}</h1>
       <button onClick={handIncrease}>Increase</button> 
<button>Decrease</button>
    </div>
  )
}

export default Navbar