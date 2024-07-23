import React from 'react'
import { Link } from 'react-router-dom'
import DrawerNavBAr from './Drawer'
import logo2 from '../assets/LOGO2.jpg'

const NavBar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", textAlign: "center" }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <button className='logo' style={{ border: "none", background: "none" }}>
            <img src={logo2} alt="Logo" style={{ height: "100px", width: "100px", marginTop: "10px" }} />
          </button>
        </Link>
        <h1>RACHEL EFINGER</h1>
        <DrawerNavBAr />
      </div>
      <div style={{ backgroundColor: "black", height: "1px", marginTop: "10px" }}></div>
    </>
  );
}

export default NavBar;
