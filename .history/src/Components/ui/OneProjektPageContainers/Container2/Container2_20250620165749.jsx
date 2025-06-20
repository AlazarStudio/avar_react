import React from 'react';
import classes from './Container2.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Container2({ project }) {
  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        <div className={classes.container2BlockText}>{project.description}</div>
        <div className={classes.container2BlockImg}>
          <Swiper
            spaceBetween={10} // Расстояние между слайдами
            slidesPerView={1} // Количество видимых слайдов
            loop={true} // Зацикливание свайпа
            navigation={true} // Навигация стрелками
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Project image ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
