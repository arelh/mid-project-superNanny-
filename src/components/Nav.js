import React from 'react'
import { Link } from "react-router-dom";
import logonew from "./images/logonew.png";


function Nav() {
  return (
    <div className='Nav'>
        <img className='logo' src={logonew} alt="Logo"></img>
        <Link to = "/" className='link'>Homepage</Link>
        <Link to = "/Parents" className='link'>Parents</Link>
        <Link to = "/Babysitter" className='link'>Babysitter</Link>
        
        </div>
  )
}

export default Nav


