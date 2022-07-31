import React, { useEffect } from "react";
import "./MainPage.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setData } from "./Reducer/Action";
import AvatarForm from "./UpdateAvtarForm/AvatarForm";

const MainPage = () => {
  const myStateData = useSelector((state) => {
    return state.reducer;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const api = "https://reqres.in/api/users?page=2";
    const fetchApi = async () => {
      try {
        const firstResponse = await axios.get(api);
        const response = await firstResponse.data.data;
        console.log(response);
        dispatch(setData(response));
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, []);

  const dataList = myStateData.data;
  const deleteHandler = (x)=>{
    
    const newList = dataList.filter((elem)=>{
            return elem.first_name !=  x
    })
    dispatch(setData(newList));
  }
  console.log(dataList);
  return (
    <>
    
    <AvatarForm />
   
      <table id="avatarDetail">
        <thead>
        <tr>
          <th>Avatar</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Delete Avatar</th>
        </tr>
        </thead>

        {myStateData.data.map((elem) => {
          return (
            <tr key={elem.id}>
              <td>
                <img src={elem.avatar} alt="avatar_image" />
              </td>
              <td>{elem.first_name}</td>
              <td>{elem.last_name}</td>
              <td>{elem.email}</td>
              <td><button  onClick={()=>deleteHandler(elem.first_name)}>Delete</button></td>
            </tr>
          );
        })}
      </table>
    
    </>
  );
};

export default MainPage;
