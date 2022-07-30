import React from 'react';
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const myState = useSelector((state) => {
    return state.reducer;
  });

  return (
    <>
    {myState.mainLogic ?
      (<header>
        <h1>Meet with your <span className = "companyName">Super Avatar</span></h1>
        <h4>Take risk and serve nature, you can also become a Super Avatar</h4>
    </header>)

    :(<header>
        <h1>Welcome to <span className = "companyName">Gurshobit</span></h1>
        <h4>Happy to serve you &#128522;</h4>
    </header>)
    }
    </>
    )
}

export default Header