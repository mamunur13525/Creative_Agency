import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ServicesAdmin from '../Admin/ServicesAdmin/ServicesAdmin';
import Order from '../Order/Order';


const Dashboard = () => {
    const [loggedIn, setLoggedIn] = useContext(UserContext)
    const [varify, setVarify] = useState()

    useEffect(()=>{

        fetch(`https://tranquil-scrubland-64359.herokuapp.com/getAdmin?email=${loggedIn.email}`)
        .then(res => res.json())
        .then(result => {
            setVarify(result)
          
        })

    },[])
    console.log(varify)

    return (
        <>
           {
               varify?  <ServicesAdmin></ServicesAdmin>   :  <Order></Order>
           }
        </>
    );
};

export default Dashboard;