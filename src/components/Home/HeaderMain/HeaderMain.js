import React from 'react';
import './HeaderMain.css';
import frame from '../../../images/logos/Frame.png';
import { Link } from 'react-router-dom';


const HeaderMain = () => {
    return (
        <main >
            <div className="container">
                <div className="row mt-5 d-flex justify-content-between">
                    <div className="col-md-5 mt-5">
                        <h1 className="fontBold">Let's Grow Your <br/>Brand To The <br/>Next Level</h1>
                        <p className="para mt-5">Lorem, ipsum Lorem ipsum dolor sit amet consectetur. dolor sit amet consectetur adipisicing elit. Illo, excepturi. Repellendus quo atque vero laborum commodi.</p>
                      <Link to="/order"> <button className="btn btn-dark btn_custom mt-3">Hire Us</button></Link> 
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={frame} alt=""/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;