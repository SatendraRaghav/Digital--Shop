import React, { useEffect } from "react";
import "./MainPage.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setData, updatePage, saveAvatar } from "./Reducer/Action";
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

  const updateHandler = (x) => {
    dispatch(updatePage(true));
    console.log(x);
    dispatch(saveAvatar(x));
    console.log(myStateData.avatar);
  };
  const deleteHandler = (x) => {
    const newList = dataList.filter((elem) => {
      return elem.first_name !== x;
    });
    dispatch(setData(newList));
  };
  console.log(dataList);
  return (
    <>
      {myStateData.updateLogic ? (
        <>
          <h1 id="updateH1">Please update details of your Avatar</h1>
          <AvatarForm />
        </>
      ) : (
        <>
          {" "}
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

            {myStateData.data.map((elem, index) => {
              return (
                <>
                  <tr key={index + 1}>
                    <td>
                      <img src={elem.avatar} alt="avatar_image" />
                    </td>
                    <td>{elem.first_name}</td>
                    <td>{elem.last_name}</td>
                    <td>{elem.email}</td>
                    <td>
                      <button onClick={() => deleteHandler(elem.first_name)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr id="updateButtonRow">
                    <td colSpan={5}>
                      <button
                        id="updateButton"
                        onClick={() => updateHandler(elem)}
                      >
                        Update-{elem.first_name + " " + elem.last_name}
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </>
      )}
    </>
  );
};

export default MainPage;
