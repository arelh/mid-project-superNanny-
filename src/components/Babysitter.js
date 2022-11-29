import React from "react";
import { useState } from "react";
import axios from "axios";


function Babysitter() {
  const [nameVal, setNameVal] = useState("");
  const [AgeVal, setAgeVal] = useState("");
  const [CityVal, setCityVal] = useState("");
  const [PriceVal, setPriceVal] = useState("");
  const [PhoneVal, setPhoneVal] = useState("");
  const [GenderVal, setGenderValVal] = useState("");
  const [ImageVal, setImageVal] = useState("");
  const [card, setCard] = useState(true);
  const [Massage, setMassage] = useState(false);
  



  const handleInputName = ({ target: { value } }) => {
    setNameVal(value);
  };
  const handleInputPrice = ({ target: { value } }) => {
    setPriceVal(value);
  };
  const handleInputPhone = ({ target: { value } }) => {
    setPhoneVal(value);
  };
  const handleInputAge = ({ target: { value } }) => {
    setAgeVal(value);
  };
  const handleInputGender = ({ target: { value } }) => {
    setGenderValVal(value);
  };
  const handleInputCity = ({ target: { value } }) => {
    setCityVal(value);
  };
  const handleInputImage = ({ target: { value } }) => {
    setImageVal(value);
  };


  const handleAddNanny=()=>{
    const { data } = axios.post(
      "https://6374c35a08104a9c5f8866ff.mockapi.io/superNanny",
      {
        name: nameVal,
        price: PriceVal,
        avatar: ImageVal,
        age:AgeVal,
        city:CityVal,
        phoneNumber:PhoneVal,
        gender:GenderVal

      },
      
    );
    setCard(data)
    setMassage(false)
    

  };
  
 

  return (
    <div className="Babysitter">
      {(!card)&&Massage}
      {card&&<div className="cardBs">
        <h1 className="hd">Enter your details</h1>
        <p className="cd">name</p> <input  className="inputBs" onChange={handleInputName}></input>
        <p className="cd">age</p> <input  className="inputBs" onChange={handleInputAge}></input>
        <p className="cd">city</p> <input  className="inputBs" onChange={handleInputCity}></input>
        <p className="cd">phoneNumber</p> <input  className="inputBs" onChange={handleInputPhone}></input>
        <p className="cd">gender</p> <input  className="inputBs" onChange={handleInputGender}></input>
        <p className="cd">price(per hour)</p> <input  className="inputBs" onChange={handleInputPrice}></input>
        <p className="cd">image</p> <input  className="inputBs"  onChange={handleInputImage}></input>
        <button className="btn-bs" onClick={handleAddNanny} >submit</button>
      </div>}
      { !card && <h1 className="mes-bs"> has been sent successfully</h1>}
    </div>
  );
}

export default Babysitter;
