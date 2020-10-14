import React from 'react';
import '../Order/Order.css';
import './Servicelist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import webdesign from '../../images/icons/service1.png';
import Graphich from '../../images/icons/service2.png';
import { Link } from 'react-router-dom';


const Servicelist = () => {
    return (
        <div style={{background:'yellow'}}>
            <header className="header d-flex">
          
                   <div className="side_bar w-25">
                        <h4>logo Here</h4>

                        <div className="mt-5 font-weight-bold">
                            <div className="d-flex " ><Link to="/order"><FontAwesomeIcon className="m-2" icon={faShoppingCart} /><p className="hover">Order</p></Link></div>   
                            <div className="d-flex  my-3" style={{color:'#30D4C7'}}><FontAwesomeIcon className="m-2" icon={faServer} />  <p className="hover">Service list</p></div>  
                            <div className="d-flex "><FontAwesomeIcon className="m-2" icon={faEnvelope} /> <p className="hover">Review</p></div>  
                        </div> 
                  </div>
                <div className="main">
                      <h4>Order</h4>
                      <div className="formbox">
                        <div className="detail row">
                            <div className="first col-md-5 bg-white m-4 p-4 ">
                               <div className="d-flex justify-content-between ">
                               <img className="icon serviceIcon" src={webdesign} alt=""/>
                                 <button className="btn btn-pending">Pending</button>
                               </div>
                                <h4>Web & Mobile design</h4>
                                <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                            </div>
                            <div className="first col-md-5 bg-white m-4 p-4 ">
                               <div className="d-flex justify-content-between ">
                               <img className="icon serviceIcon" src={Graphich} alt=""/>
                                 <button className="btn btn-done">Done</button>
                               </div>
                                <h4>Graphich design</h4>
                                <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                            </div>
                        </div>
                      </div>
               </div>
               
            </header>
        </div>
    );
};

export default Servicelist;