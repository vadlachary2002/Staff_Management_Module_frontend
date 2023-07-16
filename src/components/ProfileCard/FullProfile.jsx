import React from 'react'
import {FaUser,FaLinkedinIn} from 'react-icons/fa';
import { BiLinkExternal} from 'react-icons/bi';
import ProfilePic  from '../../images/PROFILE.JPG';
import './fullprofile.css'

const FullProfile =()=> {
  return (
    <div className='fullprofile'>
        <div className='image'>
            <img className='profilepic box' src={ProfilePic} alt=''/>
            <div className='name box'>
              <h3>PRAVEEN CHINTU</h3>
              <span>Assistance Professor</span>
              <h4>CSE</h4>
              <h5>SUBJECTS:<span>COMPILER DESIGN</span><span>PPS</span></h5>
            <div className='icons'>
              <a href='#'>
                <FaLinkedinIn />
              </a>
              <a href='#'>
                <BiLinkExternal />
              </a>
              </div>
            </div>
        </div>
        <div className='info'>
            <label>ABOUT:</label>
            <div className='bio'>
              <p>this is so and so faculty with so and so achievementsthis 
                is so and so faculty with so and so achievementsthis is so and
                 so faculty with so and so achievementsthis is so and so faculty
                  with so and so achievementsthis is so and so faculty with so and
                   so achievementsthis is so and so faculty with so and so achievement
                   sthis is so and so faculty with so and so achievementsthis is so and so
                    faculty with so and so achievementsthis is so and so faculty with so
                     and so achievementsthis is so and so faculty with so and so achievements
                     this is so and so faculty with so and so achievementsthis is so and so fac
                     ulty with so and so achievementsthis is so and so faculty with so and so achi
                     evementsthis is so and so faculty with so and so achievementsthis is so and so 
                     faculty with so and so achievements
              </p>
            </div>
            <div className='contact'>
              <label>Email:</label>
              <a href='#'>praveenchintu521@gmail.com</a>
            </div>

        </div>
    </div>
  )
}

export default FullProfile;