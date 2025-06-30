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
          {/* Большой слайд и текст справа */}
          <div className={classes.mainBlock}>
            <div className={classes.bigSlide}>
              <img src={projects[activeIndex].img[0]} alt="" />
            </div>

            <div className={classes.textBlock}>
              <span>{projects[activeIndex].title}</span>
              <span>{projects[activeIndex].description}</span>
            </div>
          </div>

          {/* Маленькие превью-слайды снизу */}
          <div className={classes.previewSlider}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={6}
              spaceBetween={20}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              navigation
              loop
            >
              {projects.map((project, i) => (
                <SwiperSlide key={project.id}>
                  <div
                    className={`${classes.previewSlide} ${
                      i === activeIndex ? classes.active : ''
                    }`}
                    onClick={() => setActiveIndex(i)}
                  >
                    <img src={project.img[0]} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
