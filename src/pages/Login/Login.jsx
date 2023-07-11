import React, { useState } from "react";
import {FaUser,FaEyeSlash, FaEye} from 'react-icons/fa';
import "./Login.scss";
import { login } from "../../services/Authentication";

const Login = () => {
  const [fade, setFade] = useState({ username: false, password: false });
  const [user, setUser] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState({message:"",status:null});
  const [ passwordVisibility, setPasswordVisibility ] = useState(false);

  const updatePasswordVisibility  = ()=>{
    setPasswordVisibility(!passwordVisibility);
  }
  const updateUser = (field, value) => {
    setUser((updatedUser) => {
      return {
        ...updatedUser,
        [field]: value
      };
    });
  };
  const updateFade = (field, status) => {
    setFade((updatedFade) => {
      return {
        ...updatedFade,
        [field]: status
      };
    });
  };
  const defaultFade = () => {
    if (fade.username && fade.password && !user.username && !user.password) {
      setFade({ username: false, password: false });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await login(user);
    if(!data){
      setLoginStatus({message:"Error",status:false});
    }else{
      setLoginStatus({message:"Logged In",status:true});
    }
    setLoading(false);
    setUser({ username: "", password: "" });
    setTimeout(() => {
      setLoginStatus({message:"",status:null})
    }, 3000);
  };
  return (
    <div className="login-page" onClick={defaultFade}>
      <form className="loginBox" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="inputs">
          <label
            htmlFor="username"
            className={fade.username ? "fadeup" : "fadedown"}
          >
            Username
          </label>
          <div className="input" onClick={() => updateFade("username", true)}>
            <input
              type="text"
              value={user.username}
              readOnly={!fade.username}
              onChange={(e) => updateUser("username", e.target.value)}
            />
            <FaUser />
          </div>
        </div>
        <div className="inputs">
          <label
            htmlFor="password"
            className={fade.password ? "fadeup" : "fadedown"}
          >
            Password
          </label>
          <div className="input" onClick={() => updateFade("password", true)}>
            <input
              type={passwordVisibility?"text":"password"}
              value={user.password}
              onChange={(e) => updateUser("password", e.target.value)}
            />
            {
              passwordVisibility?
              <FaEye className="eye-icon" onClick={updatePasswordVisibility} />:
              <FaEyeSlash className="eye-icon" onClick={updatePasswordVisibility}/>
            }
          </div>
        </div>
        <div className="submit">
          <input type="submit" className={loading?"submitted":""} value={loading ? "Please wait..." : "Login"} />
        </div>
        <div className="forgot-pass">
          <span className={loginStatus.status?"success":"failure"}>
            {loginStatus.message}
          </span>
        </div>
      </form>
    </div>
  );
};
export default Login;
