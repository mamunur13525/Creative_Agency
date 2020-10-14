import React, { useContext, useEffect, useState } from 'react';
import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedIn, setLoggedIn] = useContext(UserContext)
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/id?id=${loggedIn.id}`)
        .then(res => res.json())
        .then(data => {
            const {title, description,img} = data;
            setService({...loggedIn,title, description,img})
        })
    },[])
    return (
        <div style={{background:'yellow'}}>
            <Link to="/">Home</Link>
            <header className="header d-flex">
          
                   <div className="side_bar w-25">
                        <h4>logo Here</h4>

                        <div className="mt-5 font-weight-bold">
                            <div className="d-flex " style={{color:'#30D4C7'}}><Link to="/order"><FontAwesomeIcon className="m-2" icon={faShoppingCart} /><p className="hover">Order</p></Link></div>   
                            <div className="d-flex  my-3"><Link to='/servicelist'><FontAwesomeIcon className="m-2" icon={faServer} />  <p className="hover">Service list</p></Link></div>  
                            <div className="d-flex "><FontAwesomeIcon className="m-2" icon={faEnvelope} /> <p className="hover">Review</p></div>  
                        </div> 
                  </div>
                <div className="main">
                      <h4>Order</h4>
                      <div className="formbox">
                      <div className="detail w-50">
                        <form action="#">
                            <input placeholder="Your name/ company's name" value={service.displayName} type="text" name="name" id="name"/>
                            <input placeholder="Your email address" value={service.email} type="text" name="email" id="email"/>
                            <input placeholder="Your Order" type="text" value={service.title} name="work" id="work"/>
                           <textarea className="form-control" placeholder="Products Details" name="" id=""  rows="4"></textarea>
                            <div className="d-flex">
                                <input placeholder="Price" type="text" name="price" id='price'/>
                              <input className="btn btn-outline-success"  type="file" name="file" id=""/>
                            </div>
                            <input className='btn w-25 btnSubmit btn-dark btn_custom' type="submit" name="" id=""/>
                        </form>
                      </div>
                      </div>
               </div>
               
            </header>
        </div>
    );
};

export default Order;