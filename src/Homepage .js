import React from "react";

import a from "../images/a.jpg"
import b from "../images/b.jpg"
import c from "../images/c.jpg"
import logonew from "../images/logonew.png"
import { Link } from "react-router-dom";


function Homepage() {
  return (
    
    <div className="Homepage">
      <img className='logonew' src={logonew} alt="logonew"></img>
      

      <div className="boxHp">
      <p className="info1">
        find babysitter?! 
        click here:  <Link to = "/Parents" className='link' style={{color:"red"}}>Parents</Link>
        {/* Welcome to our new website. Our site is intended for young parents who
        are interested in a solution for looking after the children while the
        parents are away from home or at work. On our website you can search and
        find a babysitter according to the categories you choose */}
      </p>
  
      <p className="info2">
        do you like children? student? Come work as a nanny. To fill in your
        details click here: <Link to = "/Babysitter" className='link' style={{color:"red"}}>Babysitter</Link>
      </p>
      </div>
      <img className=" image image1" src={a} alt=""></img>
      <img className=" image image2" src={b} alt=""></img>
      <img className=" image image3" src={c} alt=""></img>
    </div>
  );
}

export default Homepage;
