import React from 'react';
import HeaderMain from './HeaderMain/HeaderMain';
import Navbar from './Navbar/Navbar';
import './Home.css';
import Sponcer from './Sponcer/Sponcer';
import Services from './Services/Services';
import Works from './Works/Works';
import ClientFeedBack from './ClientFeedBack/ClientFeedBack';
import Footer from './Footer/Footer';


const Home = () => {
    return (
        <div className="main">
            <div className="background">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
            <Sponcer></Sponcer>
            <Services></Services>
            <Works></Works>
            <ClientFeedBack></ClientFeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;