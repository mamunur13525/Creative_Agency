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
        <div  className="container">
            <nav style={style} className="navbar navbar-expand-lg navbar-light">
                    <img className="img-fluid logo" src={logo} alt="logo"/>
                   
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav  ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link actives" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Our Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Our Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact Us</a>
                                </li>
                             {
                                 loggedIn.email?<div><img className="profile" src={loggedIn.photoURL} alt=""/> <p style={{display: "inline"}}>{loggedIn.displayName}</p></div>: <Link to="/login">  <button className="btn  btn-dark btn_custom">Login</button></Link>
                             }
                            
                            </ul>
                        </div>
            </nav>
         </div>
       
    );
};

export default Navbar;