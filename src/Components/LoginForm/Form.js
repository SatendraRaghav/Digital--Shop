import React from "react";

import "./Form.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveFormData, saveVartualFormData, mainPage } from "../Reducer/Action";
import MainPage from "../MainPage";

function Form() {
  const myState = useSelector((state) => {
    return state.reducer;
  });
  const dispatch = useDispatch();

  const inputFormHandler = (e) => {
    const { name, value } = e.target;
    dispatch(saveVartualFormData({ ...myState.virtualObj, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(saveFormData({ ...myState.obj, obj: myState.virtualObj }));
    dispatch(mainPage(true));
  };

  return (
    <>
      {myState.mainLogic ? (
        <MainPage />
      ) : (
        <div
          style={{
            backgroundImage: "url(/images/istockphoto-1271503712-612x612.jpg)",
          }}
        >
          <h1 className="login">Please Login to see your Super Avatar</h1>
          <br></br>
          <br></br>
          <form onSubmit={submitHandler}>
            <label htmlFor="name">Enter Your Name :</label>
            <br />
            <input
              type="text"
              name="name"
              value={myState.virtualObj.name}
              onChange={inputFormHandler}
              id="name"
              placeholder="write your Name"
              required
            />
            <label htmlFor="email">Enter Your Email :</label>
            <br />
            <input
              type="email"
              onChange={inputFormHandler}
              id="email"
              name="userEmail"
              value={myState.virtualObj.userEmail}
              placeholder="write your Email"
              required
            />
            <label htmlFor="phoneNumber">Enter Your Mobile Number :</label>
            <br />
            <input
              type="text"
              onChange={inputFormHandler}
              name="mobileNumber"
              id="phoneNumber"
              value={myState.virtualObj.mobileNumber}
              placeholder="write your Mobile Number"
              required
            />
            <input type="submit" value="Submit"></input>
            <br />
            <br />
          </form>
        </div>
      )}
    </>
  );
}

export default Form;
