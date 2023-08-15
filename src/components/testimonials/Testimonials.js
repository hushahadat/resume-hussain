import React from "react";
import "./testimonials.css";
import CER1 from "../../assets/cer1.jpg";
import CER2 from "../../assets/cer2.jpg";
import CER3 from "../../assets/cer3.jpg";

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  
  {
    img: CER2,
    name: "JavaScript Basic",
    size:'100%'
  },
  {
    img: CER1,
    name: "The Fundamentals Of Digital Marketing",
    size : '100%'
   },
  {
    img: CER3,
    name: "Learning Platform Configuration of Product Web Page",
    size:'100%'
  },
  
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      {/* <h5>Review From Clients</h5> */}
      <h2>Certificate</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ img, name, review,size }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={img} alt={name}  style={{width: size}}/>
              </div>
              <h5 style={{ paddingTop: "10px" }} className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;