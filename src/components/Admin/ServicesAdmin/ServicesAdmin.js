import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesAdmin.css';
import '../../Servicelist/Servicelist.css';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import AllServices from './AllServices';


const ServicesAdmin = () => {
    const  spinner = 'https://miro.medium.com/max/1600/1*CsJ05WEGfunYMLGfsT2sXA.gif';

const [allservices, setAllservices] = useState([]);
    useEffect(()=>{
        fetch('https://tranquil-scrubland-64359.herokuapp.com/admin/allservices')
        .then(res => res.json())
        .then(result => setAllservices(result))
    },[])

    return (
        <div style={{background:'yellow'}}>
        <header className="header d-flex">
      
               <div className="side_bar w-25">
                    <Link className="hover" to="/"> <img className="logo" src={logo} alt="logo"/></Link>

                    <div className="mt-5 font-weight-bold">
                    <div className="d-flex  my-3" style={{color:'#30D4C7'}}><FontAwesomeIcon className="m-2" icon={faServer} />  <p className="hover">Service list</p></div>  

                    <Link className="hover" to="/admin/addservice">   <div className="d-flex " ><FontAwesomeIcon className="m-2" icon={faShoppingCart} /><p className="hover">Add Service</p></div>   </Link>
                      <Link className="hover" to="/admin/makeadmin"> <div className="d-flex "><FontAwesomeIcon className="m-2" icon={faEnvelope} /> <p className="hover">Make Admin</p></div>  </Link> 
                    </div> 
              </div>
            <div className="main">
                  <h4>Add Services</h4>
                  <div className="formbox">
                    <div className="detail row">
                        <div className="outsideTable">
                    <div className="table-responsive">
                                <table className="table text-center">
                                    <thead >
                                        <tr className="table-head-row">
                                           
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Service</th>
                                            <th>Project Details</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {
                                            allservices.length === 0 && <div className='img ml-5' > <img className="img-fluid" src={spinner}  alt="spinner"/> <h5 className="text-center">Loding</h5></div>
                                        }
                                        {
                                            allservices.map(services => <AllServices key={services._id} services={services}></AllServices>)
                                        }
                                        
                                    </tbody>
                                    
                                </table>
                                </div>
                                </div>
                    </div>
                  </div>
           </div>
           
        </header>
    </div>
    );
};

export default ServicesAdmin;