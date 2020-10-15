import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import { UserContext } from '../../App';







const Review = () => {

    const [loggedIn, setLoggedIn] = useContext(UserContext)
console.log(loggedIn)
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        data.img = loggedIn.photoURL;
     
        fetch('http://localhost:5000/client',{
            method:'POST',
            headers: { 'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => alert('Thanks For Your Review??'))
    };


  



    return (
        <>
   
        <div style={{background:'yellow'}}>
           
            <header className="header d-flex">
          
                   <div className="side_bar w-25">
                   <Link className="hover" to="/"> <img className="logo" src={logo} alt="logo"/></Link>

                        <div className="mt-5 font-weight-bold">
                    <Link className="hover" to='/order'>  <div className="d-flex " ><FontAwesomeIcon className="m-2" icon={faShoppingCart} /><p className="hover">Order</p></div></Link>
                        <Link className="hover" to='/servicelist'> <div className="d-flex  my-3"><FontAwesomeIcon className="m-2" icon={faServer} />  <p className="hover">Service list</p></div>  </Link>
                            <div className="d-flex " style={{color:'#30D4C7'}}><FontAwesomeIcon className="m-2" icon={faEnvelope} /> <p className="hover">Review</p></div>  
                        </div> 
                  </div>
                <div className="main">
                      <h4>Review Our Services</h4>
                      <div className="formbox">
                      <div className="detail w-50">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input ref={register} placeholder="Your name"  type="text" name="name" id="name" required/>
                              
                              
                                <input ref={register} placeholder="Compoany'name and Designation" type="text"  name="work" id="work" required/>
                                <textarea ref={register} className="form-control" placeholder="Description" name="description" id=""  rows="4" required></textarea>
                               
                                <input className='btn w-25 btnSubmit btn-dark btn_custom' type="submit" name="" id=""/>
                            </form>
                      </div>
                      </div>
               </div>
               
            </header>
        </div>
        </>
    );
};

export default Review;