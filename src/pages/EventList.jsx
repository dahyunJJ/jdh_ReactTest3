import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";

import "../css/Main.css";

function EventList() {
  return (
    <>
      <section className="bannerCon mw">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Autoplay, Pagination]}
          className="bannerList"
        >
          <SwiperSlide>
            <div className="bgImg">
              <img
                src={`${process.env.PUBLIC_URL}/img/Img_bg1.jpg`}
                alt="bg1"
              />
            </div>
            <div className="bgText">
              <h1>Gold big hoops</h1>
              <span>$ 68.00</span>
              <Link to="/detail/:id" className="btn btnView">
                View Product
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bgImg">
              <img
                src={`${process.env.PUBLIC_URL}/img/Img_bg2.jpg`}
                alt="bg2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bgImg">
              <img
                src={`${process.env.PUBLIC_URL}/img/Img_bg3.jpg`}
                alt="bg3"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default EventList;
