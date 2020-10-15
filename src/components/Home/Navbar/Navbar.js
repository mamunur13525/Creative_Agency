import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
    const style ={
        fontWeight: '500'
    }

    const [loggedIn, setLoggedIn] = useContext(UserContext)
    return (
        <div style={style}  className="container">
           

                    <nav className="navbar navbar-expand-lg navbar-light">
                              <img className="img-fluid logo" src={logo} alt="logo"/>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link actives" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link" href="#">Dashboard</Link>
                                </li>
                            
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact Us</a>
                                </li>
                                <li>
                                    {
                                        loggedIn.email?<div><img className="profile" src={loggedIn.photoURL} alt=""/> <p style={{display: "inline"}}>{loggedIn.displayName}</p></div>: <Link to="/login">  <button className="btn  btn-dark btn_custom">Login</button></Link>
                                    }
                                </li>
                            </ul>
                            
                            </div>
            </nav>





         </div>
       
    );
};

export default Navbar;