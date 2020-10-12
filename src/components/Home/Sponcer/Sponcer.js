import React from 'react';
import './Sponcer.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const Sponcer = () => {
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 mt-5">
                        <img className="img-fluid sponcer" src={slack} alt="slack"/>
                        <img className="img-fluid sponcer" src={google} alt="google"/>
                        <img className="img-fluid sponcer" src={uber} alt="uber"/>
                        <img className="img-fluid sponcer" src={netflix} alt="netflix"/>
                        <img className="img-fluid sponcer" src={airbnb} alt="airbnb"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponcer;