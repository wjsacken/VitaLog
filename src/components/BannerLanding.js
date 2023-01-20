import React, { useState } from "react";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/resources/banner-image-1-1.png";
import BannerMoc from "../assets/images/resources/vitalog.svg";
import BannerMoc1 from "../assets/images/resources/mobileMockup1.gif";

const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false
  });
  const openModal = () => {
    setOpen({
      isOpen: true
    });
  };

  return (
    <section className="banner-one" id="home">
      <img
        src={BannerShape}
        className="banner-one__bg-shape-1"
        alt="awesome post"
      />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG})` }}
      ></div>
      <div className="container">


        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
            <img
            src={BannerMoc}
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt="awesome post"
            width="400"
          />
              <div className="mc-form__response"></div>
              <h3>
                Coming  Soon <br /> 
              </h3>
              <p>
                We are working hard to give you the<br/> best experience here with VitaLog
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
