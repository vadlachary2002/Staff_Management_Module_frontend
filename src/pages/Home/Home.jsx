import React from "react";
import "./home.scss";
import { ProfileCard } from "../../components";

const Home = () => {
  return (
    <div className="home flexcol">
      <div className="search">
        <input type="text" placeholder="Search Department" />
      </div>
      <div className="flexrow">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
};
export default Home;
