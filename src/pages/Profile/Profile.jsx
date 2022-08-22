import React from "react";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import "./Profile.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Postside from "../../components/Postside/Postside";
const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard />
        <Postside />
      </div>
    </div>
  );
};

export default Profile;
