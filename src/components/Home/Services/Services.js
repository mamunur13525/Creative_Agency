import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(result => setServices(result))
    },[])
  
  
    return (
        <section className="services_section">
            <h2 className="headingTwo">Provide awesome <span style={{color:'#7AB259'}}>services</span></h2>
            <div className="container">
                <div className="row box text-center">
                   {
                       services.map(service =>  <Service key={service._id} service={service}></Service> )

                   }
                  
                </div>
            </div>
        </section>
    );
};

export default Services;