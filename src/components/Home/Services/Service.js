import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Service = ({service}) => {
    const [loggedIn, setLoggedIn] = useContext(UserContext)

        const handleClick = ()=>{
            const id = service._id;
    
           setLoggedIn({...loggedIn,id:id})
        }

    return (
        <div className="col-md-4">
                                
            <Link to='/order'>
                <div onClick={handleClick} className="boxx ">
                    <div className="opacity"></div>
                    <img className='icon' src={service.img} alt="logo"/>
                   <h4>{service.title}</h4>
                    <p className="text-secondary">{service.description}</p>
                        </div>
                 </Link>
        </div>
    );
};

export default Service;