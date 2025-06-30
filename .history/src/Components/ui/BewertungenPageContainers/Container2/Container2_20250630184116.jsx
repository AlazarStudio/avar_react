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

          </div>
        </div>
      </div>
    </div>
  );
}
