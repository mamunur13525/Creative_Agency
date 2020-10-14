import React, { useContext } from 'react';
import mainLogo from '../../images/logos/logo.png';
import './Login.css';
import google_img from '../../images/google_logo.png';
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';




require("firebase/auth");
const firebase = require("firebase/app");
   // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const history =useHistory();
    let location = useLocation();

    const [loggedIn, setLoggedIn] =useContext(UserContext);
    let { from } = location.state || { from: { pathname: "/" } };
    
    const googleSingUp = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            var token = result.credential.accessToken;
            // The signed-in user info.
            const {displayName, photoURL ,email} = result.user;
            setLoggedIn({...loggedIn,displayName, photoURL ,email})
            if(result.user.email){
                history.replace(from);
            }
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
        
          });


    }



    return (
        <div className="text-center">
                <img className="mainLogo" src={mainLogo} alt=""/>
                <div className="loginBox">
                    <h3>Login With</h3>
                    <div onClick={googleSingUp}  className="continue_google_box">
                        <img className="google_logo" src={google_img} alt=""/>
                        <span>Continue With Google</span>
                    </div>
                   <p className="create_account">Don't have an account?<span style={{color:'blue',cursor:'pointer', textDecoration:"underline"}}>Create an account</span></p> 
                </div>
        </div>
    );
};

export default Login;