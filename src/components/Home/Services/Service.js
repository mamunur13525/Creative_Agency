import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContentContext, UserContext } from '../../../App';

const Service = ({service}) => {
    const [loggedIn, setLoggedIn] = useContext(UserContext)
    const [content, setContent] = useContext(ContentContext)
    const [user, setUser] = useState({})


        const handleClick = ()=>{
            const id = service._id;
            
            setContent({img:`https://tranquil-scrubland-64359.herokuapp.com/${service.fileName}`,...service})
          
           setLoggedIn({...loggedIn,id:id})
        }



       

    return (
        <div className="col-md-6 col-lg-4 col-sm-12">
                                
            <Link to='/order'>
                <div onClick={handleClick} className="boxx ">
                    <div className="opacity">
                    <img className='icon' src={service.img ||`https://tranquil-scrubland-64359.herokuapp.com/${service.fileName}`} alt="logo"/>
                   <h4>{service.title}</h4>
                    <p className="text-secondary">{service.description}</p>
                        </div>
                        </div>
             </Link>
        </div>
    );
};

export default Service;