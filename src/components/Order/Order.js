import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';
import { ContentContext, UserContext } from '../../App';
import logo from '../../images/logos/logo.png';


const Order = () => {
    const [loggedIn, setLoggedIn] = useContext(UserContext)
    const [content, setContent] = useContext(ContentContext)
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/id?id=${loggedIn.id}`)
        .then(res => res.json())
        .then(data => {
            const {title, description,img} = data;
            setService({...loggedIn,title, description,img})
        })
    },[])

    const history = useHistory();

/* for Form Data  */
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
            data.status = "pending";
            const {description,img} = content;
            const newDate = {...data,description,img}
        fetch('http://localhost:5000/ordered',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(newDate)
        })
        .then(res => res.json())
        .then(result => {
          if(result){alert('Thanks For Your Order?')
            history.replace('/servicelist')
                 }
        })
        
    
    };


console.log(content)



    return (
        <div style={{background:'yellow'}}>
           
            <header className="header d-flex">
          
                   <div className="side_bar w-25">
                   <Link to="/"> <img className="logo" src={logo} alt="logo"/></Link>

                        <div className="mt-5 font-weight-bold">
                        <div className="d-flex " style={{color:'#30D4C7'}}><FontAwesomeIcon className="m-2" icon={faShoppingCart} /><p className="hover">Order</p></div>
                        <Link className="hover" to='/servicelist'> <div className="d-flex  my-3"><FontAwesomeIcon className="m-2" icon={faServer} />  <p className="hover">Service list</p></div>  </Link>
                         <Link className="hover" to="/review">   <div className="d-flex "><FontAwesomeIcon className="m-2" icon={faEnvelope} /> <p className="hover">Review</p></div>  </Link>
                        </div> 
                  </div>
                <div className="main">
                      <h4>Pleace Order Now</h4>
                      <div className="formbox">
                      <div className="detail w-50">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input ref={register} placeholder="Your name/ company's name" defaultValue={service.displayName} type="text" name="name" id="name"/>
                                <input ref={register} placeholder="Your email address" defaultValue={service.email} type="text" name="email" id="email"/>
                                <input ref={register} placeholder="Your Order" type="text" value={service.title} name="work" id="work"/>
                            <textarea ref={register} className="form-control" placeholder="Products Details" name="description" id=""  rows="4" required></textarea>
                                <div className="d-flex">
                                    <input ref={register} placeholder="Price" type="number"  min="0" name="price" id='price' required/>
                                <input  className="btn btn-outline-success"  type="file" name="file" id=""/>
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