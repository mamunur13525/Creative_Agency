import React from 'react';
import './Works.css';
import carousel from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'



const Works = () => {
   
    return (
        <div className="works ">
            <h2 className='headingTwo'>Here are some <span style={{color:'green'}}>Our Works</span></h2>
            
            <div className="container">
            <div className="row blog">
                <div className="col-md-12">
                    <div id="blogCarousel" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-target="#blogCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#blogCarousel" data-slide-to="1"></li>
                        </ol>

                   
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={carousel} alt="Image" style={{maxWidth:"100%"}}/>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={carousel2} alt="Image" style={{maxWidth:"100%"}}/>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={carousel3} alt="Image" style={{maxWidth:"100%"}}/>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={carousel4} alt="Image" style={{maxWidth:"100%"}}/>
                                        </a>
                                    </div>
                                </div>
                            
                            </div>
                       

                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={carousel4} alt="Image" style={{maxWidth:"100%"}}/>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={carousel5} alt="Image" style={{maxWidth:"100%"}}/>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={carousel3} alt="Image" style={{maxWidth:"100%"}}/>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={carousel4} alt="Image" style={{maxWidth:"100%"}}/>
                                        </a>
                                    </div>
                                </div>
                         
                            </div>
                    

                        </div>
                   
                    </div>
                 

                            </div>
                        </div>
            </div>
        </div>
    );
};

export default Works;