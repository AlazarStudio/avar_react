import React, { useState } from 'react';
import classes from './Container2.module.css';
import { projects } from '../../../../../bd';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Container2() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={classes.container}>
      <div className={classes.sectionWrapper}>
        <div className={classes.contentRow}>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={3.6}
            centeredSlides={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            navigation
            loop={true}
            spaceBetween={20}
            className={classes.carousel}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={project.id}>
                <div
                  className={`${classes.slide} ${
                    i === activeIndex ? classes.activeSlide : ''
                  }`}
                >
                  <img src={project.img[0]} alt={project.title} className={classes.slideImage} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={classes.textBlock}>
            <span>{projects[activeIndex].title}</span>
            <span>{projects[activeIndex].description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
