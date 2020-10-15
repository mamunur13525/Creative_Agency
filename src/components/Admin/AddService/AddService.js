import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Admin/ServicesAdmin/ServicesAdmin.css';
import '../../Servicelist/Servicelist.css';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import './AddService.css';
import { UserContext } from '../../../App';


const Addservice = () => {
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState({})
    const [loggedIn, setLoggedIn] = useContext(UserContext)

    const handleBlur=(e)=>{
      const newTitle = {...info}
         newTitle[e.target.name] = e.target.value;
         newTitle[e.target.name] = e.target.value;
         setInfo(newTitle)

    }

    const handleFileChange=(e)=>{
        const newFile = e.target.files[0];
        setFile(newFile)
    }
 
    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', info.title)
    formData.append('description', info.description)

    const handleSubmit= (event)=>{
      event.preventDefault()
        fetch('http://localhost:5000/addAService', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          alert('Service Added Sucessfully')
          setLoggedIn({...loggedIn, patch:data.path})
         
       
        })
        .catch(error => {
          error(error)
        })
  }
   

console.log(loggedIn)

    return (
        <div style={{background:'yellow'}}>
        <header className="header d-flex">
      
               <div className="side_bar w-25">
                    <Link className="hover" to="/"> <img className="logo" src={logo} alt="logo"/></Link>

                    <div className="mt-5 font-weight-bold">
                    <div className="d-flex  my-3" ><FontAwesomeIcon className="m-2" icon={faServer} />  <p className="hover">Service list</p></div>  

                    <Link className="hover" to="/admin/addservice" style={{color:'#30D4C7'}}>   <div className="d-flex " ><FontAwesomeIcon className="m-2" icon={faShoppingCart} /><p className="hover">Add Service</p></div>   </Link>
                      <Link className="hover" to="/admin/makeadmin"> <div className="d-flex "><FontAwesomeIcon className="m-2" icon={faEnvelope} /> <p className="hover">make Admin</p></div>  </Link> 
                    </div> 
              </div>
            <div className="main">
                  <h4>Your Order</h4>
                  <div className="formbox">
                    <div className="detail row">
                    <form  onSubmit={handleSubmit} className="boxxxx form">
                      <div className="d-flex ">
                            <div className="boxss">
                                <div className=" first">
                                    <h5 className="ml-4 mt-4">services title</h5>
                                    <input onBlur={handleBlur} placeholder="Enter Title" type="text" name="title" id="" required/>
                                </div>
                                <div className=" second">
                                    <h5  className="ml-4">Description </h5>
                                    <textarea onBlur={handleBlur}   row="8" placeholder="Enter Your description" type="text" name="description" id="" required/>
                                </div>
                            </div>
                                <div className="mt-4">
                                    <h5 className="ml-4">Icon</h5>
                                    <input onChange={handleFileChange} className="w-25"  className="btn btn-outline-success"  type="file" name="file" id="" required/>

                                </div>
                    </div>
                    <input  className="submit btn btn-success" type="submit" value="Submit"/>
                    </form>
                           
                          
                       
                    </div>
                  </div>
           </div>
           
        </header>
    </div>
    );
};

export default Addservice;