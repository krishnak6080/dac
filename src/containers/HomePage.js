import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import HomeView from "../components/homepage/HomeView";
const HomePage = () => {
  const initialState = "";
  const [userName, setUserName] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const [error, setError] = useState(initialState);
  const history = useHistory();

  const clickHandler = () => {
    if (userName === "admin" && password === "admin@DAC") {
      setError(initialState);
      sessionStorage.setItem("auth", true);
      history.push("/swagger");
    } else {
      setError("Please enter the correct credentials");
    }
  };
  return (
    <HomeView
      setUserName={setUserName}
      setPassword={setPassword}
      error={error}
      clickHandler={clickHandler}
    />
  );
};

export default HomePage;
