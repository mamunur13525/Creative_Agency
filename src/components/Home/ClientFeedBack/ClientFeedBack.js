import React, { useEffect, useState } from "react";
import "./ClientFeedBack.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Client from "./Client";
import spinner from "../../../images/icons/spinner.gif";
import { FaDatabase } from "react-icons/fa";
const fileIconSize = {
  fontSize: "2.4rem",
};
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 1000,
  swipeToSlide: true,
  autoplaySpeed: 4000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ClientFeedBack = () => {
  const [clients, setClients] = useState({
    status: "not_fetch",
    resultArr: [],
  });

  useEffect(() => {
    fetch("http://localhost:5000/clientFeedback")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setClients({ status: "fetch", resultArr: result });
      });
  }, []);

  return (
    <>
      <section className="client_section">
        <h2 className="headingTwo feedback">
          Clients <span style={{ color: "green" }}>FeedBack</span>
        </h2>
        <div className="container">
          <div className="text-center">
            {clients.status === "not_fetch" && (
              <div className="img text-muted">
                <img className="img-fluid" src={spinner} alt="spinner" />
                <h5>Loding</h5>
              </div>
            )}
            {clients.status === "fetch" &&
              JSON.stringify(clients.resultArr) === "[]" && (
                <div className="m-auto text-muted">
                  <FaDatabase style={fileIconSize} />
                  <h5>No Data Found!</h5>
                </div>
              )}

            {clients && clients.resultArr.length > 3 ? (
              <Slider className="row" {...settings}>
                {clients.resultArr.map((client) => (
                  <Client slider={true} key={client._id} client={client} />
                ))}
              </Slider>
            ) : (
              <div className="row">
                {clients.resultArr.map((client) => (
                  <Client slider={false} key={client._id} client={client} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientFeedBack;
