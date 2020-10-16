import React, { useContext, useEffect, useState } from 'react';
import '../Order/Order.css';
import './Servicelist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import webdesign from '../../images/icons/service1.png';
import Graphich from '../../images/icons/service2.png';
import { Link } from 'react-router-dom';
import { ContentContext, UserContext } from '../../App';
import Servicess from './Service';
import logo from '../../images/logos/logo.png';




const Servicelist = () => {

  const  spinner = 'https://miro.medium.com/max/1600/1*CsJ05WEGfunYMLGfsT2sXA.gif';

  const [loggedIn, setLoggedIn] = useContext(UserContext)
  const [services , setServices] = useState([]);
    useEffect(()=>{

        fetch(`https://tranquil-scrubland-64359.herokuapp.com/servicelist?email=${loggedIn.email}`)
        .then(res => res.json())
        .then(result => {
          setServices(result)
          
        })

    },[])
  

    return (
        <div style={{background:'yellow'}}>
            <header className="header d-flex">
          
                   <div className="side_bar w-25">
                        <Link className="hover" to="/"> <img className="logo" src={logo} alt="logo"/></Link>

                        <div className="mt-5 font-weight-bold">
                        <Link className="hover" to="/order">   <div className="d-flex " ><FontAwesomeIcon className="m-2" icon={faShoppingCart} /><p className="hover">Order</p></div>   </Link>
                            <div className="d-flex  my-3" style={{color:'#30D4C7'}}><FontAwesomeIcon className="m-2" icon={faServer} />  <p className="hover">Service list</p></div>  
                          <Link className="hover" to="/review"> <div className="d-flex "><FontAwesomeIcon className="m-2" icon={faEnvelope} /> <p className="hover">Review</p></div>  </Link> 
                        </div> 
                  </div>
                <div className="main">
                      <h4>Service List</h4>
                      <div className="formbox">
                        <div className="detail row">
                              {
                              services.length === 0 && <div className='img'> <img className="img-fluid" src={spinner}  alt="spinner"/> <h5 className="text-center">Loding</h5></div>
                          }
                          
                              {
                                services.map(service => <Servicess key={service._id} servicess={service}></Servicess>)
                              }
                        
                        </div>
                      </div>
               </div>
               
            </header>
        </div>
    );
};

export default Servicelist;