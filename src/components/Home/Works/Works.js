import React, { useEffect, useState } from "react";
import "./Works.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createNotification } from "../../Shared/Notify";
import spinner from "../../../images/icons/spinner.gif";
import { FaDatabase } from "react-icons/fa";

const fileIconSize = {
  fontSize: "2.4rem",
  color: "white",
};
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
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
const Works = () => {
  const [works, setWorks] = useState({
    status: "not_fetch",
    workArr: [],
  });

  useEffect(() => {
    fetch("http://localhost:5000/works")
      .then((result) => result.json())
      .then((res) => {
        if (res.status === "success") {
          setWorks({ status: "fetch", workArr: res.result });
        }
      })
      .catch((err) => createNotification("error", err));
  }, []);

  return (
    <div className="works ">
      <h2 className="headingTwo">
        Here are some <span style={{ color: "green" }}>Our Works</span>
      </h2>
      <div className="container">
        <div className="row blog">
          <div className="col-md-12">
            <div
              id="blogCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <Slider className="row" {...settings}>
                {works.workArr.map((work, ind) => (
                  <img
                    key={ind}
                    className="px-3"
                    src={`http://localhost:5000/${work.fileName}`}
                    alt="OurWorks"
                  />
                ))}
              </Slider>
              {works.status === "not_fetch" && (
                <div className="img text-muted">
                  <img className="img-fluid" src={spinner} alt="spinner" />
                  <h5>Loding</h5>
                </div>
              )}
              {works.status === "fetch" &&
                JSON.stringify(works.serviceArr) === "[]" && (
                  <div className="m-auto text-muted">
                    <FaDatabase style={fileIconSize} />
                    <h5>No Data Found!</h5>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
