import React, { useContext } from 'react';
import { UserContext } from '../../../App';


const AllServices = ({services}) => {
    const [loggedIn, setLoggedIn] = useContext(UserContext)

    const handleChange =(event) => {
        const status = event.target.value;
 
        fetch(`http://localhost:5000/id?id=hello`,{
            method:'PATCH',
            headers: { 'content-type':'application/json'},
            body:JSON.stringify(status)
        })
  
    }
    return (
        <tr>                            
            <td>{services.name}</td>
    <td>{services.email}</td>
    <td>{services.work}</td>
    <td className="w-25">{services.description}</td>
            <td className="td-actions ">
          
      
                <select onChange={handleChange}>
                    <option >Pending</option>
                    <option >On Going</option>
                    <option>Done</option>
                </select>
            
        

            </td>
        </tr>
    );
};

export default AllServices;