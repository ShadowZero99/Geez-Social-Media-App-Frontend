import React from "react";
import Profile from "../../components/Profile";
import Postside from "../../components/Postside/Postside";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Profile />
      <Postside />

      <div className="rightSide">Right</div>
    </div>
  );
};

export default Home;
