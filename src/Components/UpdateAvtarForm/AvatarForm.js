import React from "react";
import "./AvatarForm.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveAvatar, setData, updatePage } from "../Reducer/Action";

function AvatarForm() {
  const myState1 = useSelector((state) => {
    return state.reducer;
  });
  const dispatch = useDispatch();

  const inputAvatarFormHandler = (e) => {
    const { name, value } = e.target;
    dispatch(saveAvatar({ ...myState1.avatar, [name]: value }));
  };

  const avatarSubmitHandler = (e) => {
    e.preventDefault();
    console.log(myState1.updateLogic);
    if (myState1.updateLogic) {
      const updateItem = myState1.data.filter((elem) => {
        return elem.id !== myState1.avatar.id;
      });
      dispatch(setData([...updateItem, myState1.avatar]));
      dispatch(saveAvatar({ ...myState1.virtualAvatar }));
      dispatch(updatePage(false));
    } else {
      dispatch(setData([...myState1.data, myState1.avatar]));
      dispatch(saveAvatar({ ...myState1.virtualAvatar }));
      window.alert(
        "Your Avatar added successfully, Now you are warrior of earth"
      );
    }
  };

  return (
    <>
      <div id="div" style={{ backgroundImage: "url(/images/manImage.jpg)" }}>
        <form onSubmit={avatarSubmitHandler} id="form">
          <fieldset>
            <legend>Add Details of your Avatar</legend>
            <label htmlFor="avatar_image">Enter Your Avatar Image:</label>

            <input
              type="url"
              name="avatar"
              value={myState1.avatar.avatar}
              onChange={inputAvatarFormHandler}
              id="avatar_image"
              placeholder=" Avatar Image"
            />
            <br />
            <label htmlFor="first_name">Enter Your First Name :</label>

            <input
              type="text"
              onChange={inputAvatarFormHandler}
              id="first_name"
              name="first_name"
              value={myState1.avatar.first_name}
              placeholder="write your First Name"
              required
            />
            <br />
            <label htmlFor="last_name">Enter Your Last Name :</label>

            <input
              type="text"
              onChange={inputAvatarFormHandler}
              name="last_name"
              id="last_name"
              value={myState1.avatar.last_name}
              placeholder="write your Last Name"
              required
            />
            <br />
            <label htmlFor="avtar_email">Enter Your Email</label>
            <input
              type="email"
              onChange={inputAvatarFormHandler}
              name="email"
              id="avatar_email"
              value={myState1.avatar.email}
              placeholder="write your Email"
              required
            />
            <br />
            <input type="submit" value="Submit" id="add_avatar"></input>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default AvatarForm;
