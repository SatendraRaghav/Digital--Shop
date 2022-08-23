import React, { useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setUserData,setLogin, setLogComplete}
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
    dispatch(setLogComplete(true))

    console.log(state.userData)

  }  
  return (
    <div class=" py-20 bg-black text-white">
      <div class="w-4/5 ml-auto mr-auto  bg-gray-800 py-8">
        <h1 class="text-center mb-4 border-b-2 border-gray-600">Login Form</h1>
        <form class="w-[90%] ml-auto mr-auto  text-xl " onSubmit={submitHandler}>
            <label htmlFor='fName'>First Name :</label><br/><br/>
            <input class="w-full text-black placeholder:text-gray-600 focus:bg-slate-500 pl-1 focus:text-white rounded-lg " type="text" placeholder='Enter your First Name' id="fName" name="fName" value={formVirtual.fName} onChange={(e)=>inputHandler(e)} required></input><br/><br/>
            <label htmlFor='lName'>Last Name :</label><br/><br/>
            <input class="w-full pl-1 focus:bg-slate-500  focus:text-white placeholder:text-gray-600 text-black rounded-lg " type="text" placeholder='Enter your Last Time' id="lName" name="lName" value={formVirtual.lName} onChange={(e)=>inputHandler(e)} required></input><br/><br/>
            <label htmlFor='mobile'>Mobile Number :</label><br/><br/>
            <input class="w-full  focus:bg-slate-500  focus:text-white text-black rounded-lg pl-1 placeholder:text-gray-600" type="number" placeholder='Enter your Mobile Number' id="mobile" name="mobile" value={formVirtual.mobile} onChange={(e)=>inputHandler(e)} required></input><br/><br/>
            <label htmlFor='email'>Email Id :</label><br/><br/>
            <input class="rounded-lg placeholder:text-gray-600 focus:bg-slate-500 pl-1  focus:text-white text-black w-full " type="email" placeholder='Enter Email ID' id="email" name="email" value={formVirtual.email} onChange={(e)=>inputHandler(e)} ></input><br/><br/>

            <button class="py-2 w-full rounded-lg bg-green-600 hover:bg-green-700 active:bg-green-900 text-white " type="submit" value="submit">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Login