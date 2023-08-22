import React from 'react'
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Header/Header';
import Gellary from './Component/Gellary/Gellary';
import Table from './Component/Table/Table';
import Calender from './Component/Calender/Calender';
function App() {
  return (
  <div>
<Navbar />
<Header />
<Gellary />
<Table />
<Calender />
</div>
  )
}

export default App