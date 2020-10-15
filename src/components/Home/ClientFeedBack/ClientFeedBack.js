import React, { useEffect, useState } from 'react';
import './ClientFeedBack.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Client from './Client';


const ClientFeedBack = () => {
    const [clients, setClients] = useState([])
        useEffect(()=>{
            fetch('http://localhost:5000/clientFeedback')
            .then(res => res.json())
            .then(result => setClients(result))

        },[])

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            speed: 5000,
            swipeToSlide: true,
            autoplaySpeed: 5000,
            cssEase: "linear",
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]




          };
    
  
    return (<>
   


        <section className="client_section">
            <h2 className="headingTwo feedback">Clients <span style={{color:'green'}}>FeedBack</span></h2>
            <div className="container">

 
         <div> 
             <Slider className="row"  {...settings}>
               
               {
                   clients.map(client => <Client key={client._id} client={client}></Client>)
               }
       
            </Slider>
      </div>
            </div>
        </section>
        </>
    );
};

export default ClientFeedBack;