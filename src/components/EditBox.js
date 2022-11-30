import React from "react";
import { useState } from "react";
import axios from "axios";

function EditBox({ s, id, setEdit }) {
  const [nameVal, setNameVal] = useState(s.name);
  const [AgeVal, setAgeVal] = useState(s.age);
  const [CityVal, setCityVal] = useState(s.city);
  const [PriceVal, setPriceVal] = useState(s.price);
  const [PhoneVal, setPhoneVal] = useState(s.phoneNumber);
  const [GenderVal, setGenderValVal] = useState(s.gender);
  const [ImageVal, setImageVal] = useState(s.avatar);

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
  console.log(s);
  const handleEditNanny = async () => {
    const { data } = axios.put(
      `https://6374c35a08104a9c5f8866ff.mockapi.io/superNanny/${id}`,
      {
        name: nameVal,
        price: PriceVal,
        avatar: ImageVal,
        age: AgeVal,
        city: CityVal,
        phoneNumber: PhoneVal,
        gender: GenderVal,
      }
    );
    console.log({ data });
    setEdit(false);
  };

  return (
    <div className="EditBox">
      <div className="cardBs peh">
        <p>{s.name}</p>
        <h1 className="hd peh">Edit</h1>
        <p className="peh">name</p>{" "}
        <input
          defaultValue={nameVal}
          className="inputEd"
          onChange={handleInputName}
        ></input>
        <p className="peh">age</p>{" "}
        <input
          className="inputEd"
          value={AgeVal}
          onChange={handleInputAge}
        ></input>
        <p className="peh">city</p>{" "}
        <input className="inputEd" value={CityVal} onChange={handleInputCity}></input>
        <p className="peh">phoneNumber</p>{" "}
        <input className="inputEd" value={PhoneVal} onChange={handleInputPhone}></input>
        <p className="peh">gender</p>{" "}
        <input className="inputEd" value={GenderVal}  onChange={handleInputGender}></input>
        <p className="peh">price</p>{" "}
        <input className="inputEd"  value={PriceVal} onChange={handleInputPrice}></input>
        <p className="peh">image</p>{" "}
        <input className="inputEd" value={ImageVal} onChange={handleInputImage}></input>
        <button className="btn-Edit peh" onClick={handleEditNanny}>
          edit
        </button>
        <button className="btn-Edit peh" onClick={() => setEdit(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditBox;
