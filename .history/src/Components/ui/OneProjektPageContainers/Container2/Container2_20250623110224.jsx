import React from 'react';
import classes from './Container2.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Container2({ project }) {
  // Проверка на null или undefined для объекта project
  if (!project) {
    return <div>Загрузка...</div>; // Можно отобразить какой-то индикатор загрузки, если project ещё не загружен
  }

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
            {project.img.map((image, index) => (
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
