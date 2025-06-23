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

        </div>
      </div>
    </div>
  );
}
