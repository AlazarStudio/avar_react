import React, { useState } from 'react';
import classes from './Container2.module.css';
import { projects } from '../../../../../bd';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Container2() {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  return (
    <div className={classes.container}>
      <div className={classes.sectionWrapper}>
        <div className={classes.textBlock}>
          <span>{projects[index].title}</span>
          <span>{projects[index].description}</span>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          spaceBetween={36}
          className={classes.swiper}
          onSlideChange={(swiper) => setIndex(swiper.realIndex)}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={project.id}>
              <div className={classes.slideInner}>
                <img
                  src={project.img[0]}
                  className={`${classes.slideImage} ${
                    i === index ? classes.activeImage : ''
                  }`}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Отображаем описание только для активного проекта */}

        <div className={classes.controls}>
          <span className="custom-prev">
            <img src="../images/left.svg" />
          </span>
          <span>
            {index + 1} / {total}
          </span>
          <span className="custom-next">
            <img src="../images/right.svg" />
          </span>
        </div>
      </div>
    </div>
  );
}
