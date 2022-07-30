import React from "react";
 import "./AvatarForm.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAvatarData,setData, setVirtualAvatarData,saveFormData, saveVartualFormData } from "../Reducer/Action";


function AvatarForm() {
  const myState1 = useSelector((state) => {
    return state.reducer;
  });
  const dispatch = useDispatch();

  const inputAvatarFormHandler = (e) => {
    const { name, value } = e.target;
    dispatch(saveVartualFormData({ ...myState1.virtualObj, [name]: value }));
  };
  

  const avatarSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(setData([ ...myState1.data,  myState1.virtualObj]))
  };

  return (
    <>
  
        <div id = "#div">
          <form onSubmit={avatarSubmitHandler} id="form">
          <fieldset>
          <legend>Add Details of your Avatar</legend>
            <label htmlFor="avatar_image">Enter Your Avatar Image:</label>
            
            <input
              type="file"
              name="avatar_image"
              value={myState1.virtualObj.avatar_image}
              onChange={inputAvatarFormHandler}
              id="avatar_image"
              placeholder=" Avatar Image"
              required
            /><br />
            <label htmlFor="first_name">Enter Your First Name :</label>
         
            <input
              type="text"
              onChange={inputAvatarFormHandler}
              id="first_name"
              name="first_name"
              value={myState1.virtualObj.first_name}
              placeholder="write your First Name"
              required
            /><br />
            <label htmlFor="last_name">Enter Your Last Name :</label>
          
            <input
              type="text"
              onChange={inputAvatarFormHandler}
              name="last_name"
              id="last_name"
              value={myState1.virtualObj.last_name}
              placeholder="write your Last Name"
              required
            /><br />
            <label htmlFor="avtar_email">Enter Your Email</label>
            <input
              type="email"
              onChange={inputAvatarFormHandler}
              name="avatar_email"
              id="avtar_email"
              value={myState1.virtualObj.avatar_email}
              placeholder="write your Email"
              required
            /><br />
            <input type="submit" id="add_avtar" value="submit"></input>
            </fieldset>
          </form>
        </div>
      
    </>
  );
}

export default AvatarForm;
