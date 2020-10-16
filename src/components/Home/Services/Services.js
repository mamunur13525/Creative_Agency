import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';
import './Services.css';



const Services = () => {
  const  spinner = 'https://miro.medium.com/max/1600/1*CsJ05WEGfunYMLGfsT2sXA.gif';
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('https://tranquil-scrubland-64359.herokuapp.com/services')
        .then(res => res.json())
        .then(result => setServices(result))
    },[])
    
    const handleCLick =(e)=>{
        console.log(e.target)
    }
  
    return (
        <section className="services_section">
            <h2 className="headingTwo">Provide awesome <span style={{color:'#7AB259'}}>services</span></h2>
            <div className="container">
                <div className="row box text-center">
                    {
                        services.length === 0 && <div className='img'> <img className="img-fluid" src={spinner}  alt="spinner"/> <h5>Loding</h5></div>
                    }
                   {
                       services.map(service =>  <Service onClick={(e)=>handleCLick(e)} key={service._id} service={service}></Service> )

                   }
                  
                </div>
            </div>
        </section>
    );
};

export default Services;