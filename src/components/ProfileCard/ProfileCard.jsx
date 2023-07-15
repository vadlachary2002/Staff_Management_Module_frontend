import React from "react";
import "./profileCard.scss";
import { useNavigate } from "react-router-dom";
import ProfilePic from '../../images/PROFILE.JPG';
const ProfileCard = () => {
  const navigate = useNavigate();
  const viewProfile = ()=>{
  navigate('/profile');
  return;
  }
  return (
    <div className="profileCard" onClick={viewProfile}>
      <img className="image" src={ProfilePic}/>
      <div className="content">
        <div className="name">V Nagaraju Chary</div>
        <div className="middle">
          <div className="values">
            <span className="field">Designation</span>
            <span>Faculty</span>
          </div>
          <div className="values">
            <span className="field">Branch</span>
            <span>CSE</span>
          </div>
          <div className="values">
            <span className="field">Experience</span>
            <span>2 years</span>
          </div>
          <div className="values">
            <span className="field">Qualification</span>
            <span>Mtech</span>
          </div>
        </div>
        <div className="bott">
          <h3>Subjects :</h3>
          <span>Maths</span>
          <span>OS</span>
          <span>COA</span>
          <span>DM</span>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
