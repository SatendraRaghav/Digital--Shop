import React, { useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setUserData,setLogin}
 from "../Redux/webSlice";

const obj = {
  fName:"",
  lName:"",
  mobile:"",
  email:""
}
const Login = () => {
  const[formVirtual,setFormVirtual] = useState(obj)
  const dispatch = useDispatch();
  const state = useSelector((state)=>{
       return state.webReducer
  })
    
    const inputHandler = (e)=>{
       const{name,value}= e.target;
       setFormVirtual({...formVirtual,
       [name]:value
    }) 
    }
  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(setUserData([...state.userData,formVirtual]));
    dispatch(setLogin(false))
    console.log(state.userData)

  }  
  return (
    <div class="h-[100vh] pt-28 bg-black text-white">
      <div class="w-4/5 ml-auto mr-auto bg-gray-800 py-8">
        <h1 class="text-center mb-4 border-b-2 border-gray-600">Login Form</h1>
        <form class="w-[90%] ml-auto mr-auto  text-xl " onSubmit={submitHandler}>
            <label htmlFor='fName'>First Name :</label><br/><br/>
            <input class="w-full text-black rounded-lg " type="text" id="fName" name="fName" value={formVirtual.fName} onChange={(e)=>inputHandler(e)} required></input><br/><br/>
            <label htmlFor='lName'>Last Name :</label><br/><br/>
            <input class="w-full text-black rounded-lg " type="text" id="lName" name="lName" value={formVirtual.lName} onChange={(e)=>inputHandler(e)} required></input><br/><br/>
            <label htmlFor='mobile'>Mobile Number :</label><br/><br/>
            <input class="w-full text-black rounded-lg " type="number" id="mobile" name="mobile" value={formVirtual.mobile} onChange={(e)=>inputHandler(e)} required></input><br/><br/>
            <label htmlFor='email'>Email Id :</label><br/><br/>
            <input class="rounded-lg text-black w-full " type="email" id="email" name="email" value={formVirtual.email} onChange={(e)=>inputHandler(e)} ></input><br/><br/>

            <button class="py-2 w-full rounded-lg bg-green-600 hover:bg-green-700 active:bg-green-900 text-white " type="submit" value="submit">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Login