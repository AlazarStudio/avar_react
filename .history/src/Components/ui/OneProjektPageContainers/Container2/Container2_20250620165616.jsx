import React from 'react';
import classes from './Container2.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Container2({ project }) {
  // Проверяем, что проект существует и имеет нужные данные
  if (!project || !project.description || !project.img) {
    return <div>Проект не найден или данные не загружены</div>; // Выводим сообщение, если данных нет
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
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {project.img.map((el, index) => (
              <SwiperSlide key={index}>
                <img src={el} alt={`Image ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
