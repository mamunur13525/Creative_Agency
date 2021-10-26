import React, { useState } from "react";
import mainLogo from "../../images/logos/logo.png";
import "./Login.css";
import google_img from "../../images/google_logo.png";
import firebaseConfig from "./firebaseConfig";
import { useHistory, useLocation } from "react-router-dom";
import useLocalStorage from "../../Service/useLocalStorage";
import { createNotification } from "../Shared/Notify";

require("firebase/auth");
const firebase = require("firebase/app");
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const history = useHistory();
  let location = useLocation();
  const [loggedInUser, setLoggedInUser] = useLocalStorage("userInfo", {});
  const [error, setError] = useState();
  console.log(loggedInUser);
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSingUp = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        // var token = result.credential.accessToken;
        // The signed-in user info.
        const { displayName, photoURL, email } = result.user;

        setLoggedInUser({ ...loggedInUser, displayName, photoURL, email });
        if (result.user.email) {
          history.replace(from);
          createNotification('success','Successfully','Login❤')
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        createNotification('error',errorMessage)

        // The email of the user's account used.
        // const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        setError(errorMessage);
      });
  };

  return (
    <div className="text-center">
      <img className="mainLogo" src={mainLogo} alt="" />
      <div className="loginBox">
        <h3>Login With</h3>
        <div onClick={googleSingUp} className="continue_google_box">
          <img className="google_logo" src={google_img} alt="" />
          <span>Continue With Google</span>
        </div>
        {error && <p style={{ color: "red", fontSize: "13" }}>{error}</p>}{" "}
        <p onClick={googleSingUp} className="create_account">
          Don't have an account?
          <span
            style={{
              color: "blue",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
