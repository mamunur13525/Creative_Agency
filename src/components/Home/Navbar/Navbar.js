import React from 'react';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
    const style ={
        fontWeight: '500'
    }
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
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                                <button className="btn  btn-dark btn_custom">Login</button>
                            </ul>
                        </div>
            </nav>
         </div>
       
    );
};

export default Navbar;