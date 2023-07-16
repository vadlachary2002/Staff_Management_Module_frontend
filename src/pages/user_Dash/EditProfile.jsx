import React from 'react'
import {FaUser,FaLinkedinIn} from 'react-icons/fa';
import { BiLinkExternal} from 'react-icons/bi';
import ProfilePic  from '../../images/PROFILE.JPG';
import './EditProfile.scss'


const EditProfile =()=> {
  return (
    
    <div className='editprofile'>
            <label className='heading'> EDIT PROFILE</label>
              

        <div className='image'>
            <div className='edit_pic'> <img className='profilepic' src={ProfilePic} alt=''/><input className='edit_img' type='file'/></div>
            <div className='details box'>
              <h3><input className='name' type='text' placeholder='Enter name'/></h3>
              <span>Assistance Professor</span>
              <h4>CSE</h4>
              <div className='subjects'>
              <label><b>SUBJECTS:</b><span><input className='subject' type='text' placeholder='Enter subject'/></span></label>
              <button className='add'>add+</button>
              </div>
            <div className='icons'>
               <a href='#'>
                <FaLinkedinIn />
              </a> 
              <input type='text' placeholder='Enter your linkedin url'/><br/>
              <a href='#'>
                <BiLinkExternal />
              </a>
              <input type='text' placeholder='Optional '/>
               
              </div>
            </div>
        </div>
        <div className='info'>
            <label>ABOUT:</label>
            <div className='bio'>
              <textarea placeholder='Enter Your Bio'>

              </textarea>
            </div>
            <div className='contact'>
              <label>Email:</label>
              <a href='#'>praveenchintu521@gmail.com</a>
            </div>
            <div className='Buttons'>
             <button>Save</button>
             <button>cancel</button>
          </div>

        </div>
        
    </div>
  )
}

export default EditProfile;