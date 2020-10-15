import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';


const AllServices = ({services}) => {
    const [loggedIn, setLoggedIn] = useContext(UserContext)
    const [change, setChange] = useState({})

    const handleChange =(event,serviceid) => {
        const status = {status:`${event.target.value}`};
     console.log(serviceid)
       
            fetch(`http://localhost:5000/id?id=${serviceid}`,{
                method:'PATCH',
                headers: { 'content-type':'application/json'},
                body:JSON.stringify(status)
            })
    
  
    }

  
console.log(services)

    return (
        <tr>                            
            <td>{services.name}</td>
    <td>{services.email}</td>
    <td>{services.work}</td>
    <td className="w-25">{services.description}</td>
            <td className="td-actions ">
          
      
                <select defaultValue={services.status} onChange={(event)=>handleChange(event,services._id)}>
                    <option >Pending</option>
                    <option >On Going</option>
                    <option>Done</option>
                </select>
            
        

            </td>
        </tr>
    );
};

export default AllServices;