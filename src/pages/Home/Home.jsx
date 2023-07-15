import React from "react";
import "./home.scss";
import SimpleImageSlider from 'react-simple-image-slider'

import { ProfileCard } from "../../components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Images=[
      {url: './images/test1.webp'},
      {url: './images/faculty1.jpg'},
      {url: './images/bg3.jpeg'}
  ]
  const navigate = useNavigate();
  const redirectToExplore = ()=>{
    navigate('/staff');
    return;
  }
  const redirectToLogin = ()=>{
    navigate('/login');
    return ;
  }
  return (
    <div className="home flexcol">
      <div >
        <div className='home'>
            <div className='head'><h1><label className='dept'>DEPARTMENT</label> <label className='of'>of</label> <label className='cse'>C.S.E</label></h1></div>
            <div className='imageSlide'>
            <SimpleImageSlider
            width={window.screen.width-110}
            height={450}
            images={Images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={3.0}

          />
            </div>
            <div className='keys'>
                <button  onClick={redirectToExplore}>EXPLORE</button>
                <button onClick={redirectToLogin}>LOGIN</button>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Home;



