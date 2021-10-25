import React, { useEffect, useState } from "react";
import "./Works.css";

const Works = () => {
  const [works, setWorks] = useState([]);
  const [works4, setWorks4] = useState([]);
  useEffect(() => {
    // fetch('http://localhost:5000/works')
    // .then(res => res.json())
    // .then(result =>{
    //     const four = result.slice(0, 4)
    //     setWorks(four)
    //     const lastFour = result.slice(4,8)
    //     setWorks4(lastFour)
    // })
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
              <ol className="carousel-indicators">
                <li
                  data-target="#blogCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#blogCarousel" data-slide-to="1"></li>
              </ol>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    {works.map((work) => (
                      <div key={work._id} className="col-md-3 my-3">
                        <img
                          src={work.img}
                          alt="work_image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row">
                    {works4.map((work) => (
                      <div key={work._id} className="col-md-3 my-3">
                        <img
                          src={work.img}
                          alt="work_image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
