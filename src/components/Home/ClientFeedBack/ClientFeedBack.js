import React, { useEffect, useState } from 'react';
import './ClientFeedBack.css';


const ClientFeedBack = () => {
    const [clients, setClients] = useState([])
        useEffect(()=>{
            fetch('http://localhost:5000/clientFeedback')
            .then(res => res.json())
            .then(result => setClients(result))

        },[])
  
    return (
        <section className="client_section">
            <h2 className="headingTwo feedback">Clients <span style={{color:'green'}}>FeedBack</span></h2>
            <div className="container">
                <div className="row mb-5">
                   {
                       clients.map(client => 
                        <div key={client._id} className="col-md-4">
                        <div className="boxes">
                            <div className="d-flex">
                                 <img className='customar' src={client.img} alt=""/>
                                <div className="title">
                       <h5>{client.name}</h5>
                       <h6>{client.work}</h6>
                                </div>
                            </div>
                       <p>{client.description}</p>
                        </div>
                    </div>
                        
                        )
                   }

                  
                </div>
            </div>
        </section>
    );
};

export default ClientFeedBack;