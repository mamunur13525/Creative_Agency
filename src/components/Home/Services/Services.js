import React from 'react';
import './Services.css';
import icon1 from '../../../images/icons/service1.png';
import icon2 from '../../../images/icons/service2.png';
import icon3 from '../../../images/icons/service3.png';

const Services = () => {
    return (
        <section className="services_section">
            <h2 className="headingTwo">Provide awesome <span style={{color:'#7AB259'}}>services</span></h2>
            <div className="container">
                <div className="row box text-center">
                    <div className="col-md-4">
                        <div className="boxx ">
                            <img className="icon img-fluid" src={icon1} alt=""/>
                            <h4>Web & mobile design</h4>
                            <p className="text-secondary">We craft stunning and amazing web UI using o well clrrated UX  to fit your product </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                         <div className="boxx ">
                            <img className="icon img-fluid" src={icon2} alt=""/>
                            <h4>Web & mobile design</h4>
                            <p className="text-secondary">We craft stunning and amazing web UI using o well clrrated UX  to fit your product </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                         <div className="boxx ">
                            <img className="icon img-fluid" src={icon3} alt=""/>
                            <h4>Web & mobile design</h4>
                            <p className="text-secondary">We craft stunning and amazing web UI using o well clrrated UX  to fit your product </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;