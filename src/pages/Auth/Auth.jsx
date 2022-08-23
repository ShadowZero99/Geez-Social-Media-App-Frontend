import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Geez</h1>
          <h6>Make fly your thought super fast</h6>
        </div>
      </div>
      <Login />
    </div>
  );
};

function Login() {
  return (
    <div className="a-right">
      <form className="infoFormws authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="User name"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Pass word"
            className="infoInput"
            name="password"
          />
        </div>
        <div>
          <span className="drv">Don't have an account? LOGIN!</span>

          <button className="button infoButton" type="submit">
            LogIn
          </button>
        </div>
      </form>
    </div>
  );
}

function Signup() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="User name"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Pass word"
            className="infoInput"
            name="password"
          />
          <input
            type="text"
            placeholder="Confirm pass word"
            className="infoInput"
            name="confirmpassword"
          />
        </div>
        <div>
          <span className="drv">Already have an account? LOGIN!</span>
        </div>
        <button className="button infoButton" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
}

export default Auth;
