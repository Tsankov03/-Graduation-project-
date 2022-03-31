import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase/app";
import { auth } from "../firebase";

const Login = () => {
  return (
    <div id="login-page">
      <h1 id="login-title">Login</h1>
      <div id="login-card">
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign in With Google
        </div>
{/*         <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <FacebookOutlined /> Sign in With Facebook
        </div> */}
      </div>
    </div>
  );
};

export default Login;
