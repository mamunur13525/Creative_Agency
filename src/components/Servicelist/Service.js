import React, { useContext } from 'react';
import { UserContext } from '../../App';


const Servicess = ({servicess}) => {
    const className = servicess.status;
  const pending ={
        background: "#FFE3E3",
        color: "red"
    
  }
  const done ={
        background: "#C6FFE0",
        color: "#009444"
    
  }

    return (
        <div className="first col-md-5 col-sm-8 bg-white m-4 p-4 ">
                               <div className="d-flex justify-content-between mb-5">
                                   <img className="logo-icon mb-0" src={servicess.img} alt="logo"/>
                                  <button style={className==="Done"?done:pending} className='btn mlbtn'>{servicess.status}</button>
                               </div>
                                <h4>{servicess.work}</h4>
                                <p>{servicess.description}</p>

                            
     </div>
    );
};

export default Servicess;