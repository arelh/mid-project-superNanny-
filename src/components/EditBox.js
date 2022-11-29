import React from 'react'
import { useState } from "react";
import axios from "axios";


function EditBox({info,id}) {
  const [nameVal, setNameVal] = useState("");
  const [AgeVal, setAgeVal] = useState("");
  const [CityVal, setCityVal] = useState("");
  const [PriceVal, setPriceVal] = useState("");
  const [PhoneVal, setPhoneVal] = useState("");
  const [GenderVal, setGenderValVal] = useState("");
  const [ImageVal, setImageVal] = useState("");



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



const handleEditNanny=()=>{
    const { data } = axios.add(
      "https://6374c35a08104a9c5f8866ff.mockapi.io/superNanny",
      {
        name: nameVal,
        price: PriceVal,
        avatar: ImageVal,
        age:AgeVal,
        city:CityVal,
        phoneNumber:PhoneVal,
        gender:GenderVal

      }
      
    );
    console.log({ data });
  };

  return (
    <div className='EditBox'>
        <div className="cardBs peh">
        <h1 className="hd peh">Edit</h1>
        <p className="peh">name</p> <input defaultValue={info.nameVal}  className="inputEd" onChange={handleInputName}></input>
        <p className="peh">age</p> <input  className="inputEd" onChange={handleInputAge}></input>
        <p className="peh">city</p> <input  className="inputEd" onChange={handleInputCity}  ></input>
        <p className="peh">phoneNumber</p> <input  className="inputEd" onChange={handleInputPhone}></input>
        <p className="peh">gender</p> <input  className="inputEd" onChange={handleInputGender}></input>
        <p className="peh">price</p> <input  className="inputEd" onChange={handleInputPrice}></input>
        <p className="peh">image</p> <input  className="inputEd" onChange={handleInputImage} ></input>
        <button className="btn-Edit peh" onClick={handleEditNanny}>submit</button>
      </div>
    </div>
  )
}

export default EditBox