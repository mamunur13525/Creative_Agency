import React from 'react';

const Client = ({client}) => {
    return (
      
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
                        
      
    );
};

export default Client;