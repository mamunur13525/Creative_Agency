import React, { useContext } from 'react';
import { UserContext } from '../../App';


const Servicess = ({servicess}) => {

  

    return (
        <div className="first col-md-5 bg-white m-4 p-4 ">
                               <div className="d-flex justify-content-between ">
                                   <img className="logo-icon" src={servicess.img} alt="logo"/>
                                  <button className='btn btn-pending'>{servicess.status}</button>
                               </div>
                                <h4>{servicess.work}</h4>
                                <p>{servicess.description}</p>

                            
     </div>
    );
};

export default Servicess;