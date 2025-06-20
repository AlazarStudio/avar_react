import React from 'react';
import classes from './Container2.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Container2({ project }) {
  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        <div className={classes.container2BlockText}>{project.description}</div>
        <div className={classes.container2BlockImg}>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            loop={true}
            // navigation
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {project.map((project) => (
              <SwiperSlide key={project.id}>
                <div className={classes.container6BlockBottomEl}>
                  <img src={project.img[0]} alt={project.title} />
                  <span>{project.title}</span>
                  <span>{project.description}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
