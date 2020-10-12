import React from 'react';
import './ClientFeedBack.css';
import customar1 from '../../../images/customer-1.png';
import customar2 from '../../../images/customer-2.png';
import customar3 from '../../../images/customer-3.png';

const ClientFeedBack = () => {
    return (
        <section className="client_section">
            <h2 className="headingTwo feedback">Clients <span style={{color:'green'}}>FeedBack</span></h2>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <div className="boxes">
                            <div className="d-flex">
                                 <img className='customar' src={customar1} alt=""/>
                                <div className="title">
                                     <h5>Nash Patrik</h5>
                                    <h6>CEO, Monipol</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem totam placeat, alias fugiat aspernatur accusamus tenetur consequatur quasi inventore corrupti!</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="boxes">
                            <div className="d-flex">
                                 <img className='customar' src={customar2} alt=""/>
                                <div className="title">
                                     <h5>Nash Patrik</h5>
                                    <h6>CEO, Monipol</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem totam placeat, alias fugiat aspernatur accusamus tenetur consequatur quasi inventore corrupti!</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="boxes">
                            <div className="d-flex">
                                 <img className='customar' src={customar3} alt=""/>
                                <div className="title">
                                     <h5>Nash Patrik</h5>
                                    <h6>CEO, Monipol</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem totam placeat, alias fugiat aspernatur accusamus tenetur consequatur quasi inventore corrupti!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientFeedBack;