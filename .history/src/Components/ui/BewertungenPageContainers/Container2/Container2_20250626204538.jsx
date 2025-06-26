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

  const getIndex = (i) => (i + total) % total;

  const prev = () => setIndex(getIndex(index - 1));
  const next = () => setIndex(getIndex(index + 1));

  const prevIndex = getIndex(index - 1);
  const nextIndex1 = getIndex(index + 1);
  const nextIndex2 = getIndex(index + 2);

  return (
    <div className={classes.container}>
      <div className={classes.sectionWrapper}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={3.2}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          spaceBetween={36}
          className={classes.swiper}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={project.id}>
              <div className={classes.slideWrapper}>
                <img
                  src={project.img[0]}
                  className={classes.slideImage}
                  alt=""
                />
                <div className={classes.textBlock}>
                  <span>{project.title}</span>
                  <span>{project.description}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={classes.controls}>
          <span className="custom-prev">
            <img src="../images/left.svg" />
          </span>
          <span className={classes.counter}>
            {/* Можно добавить динамический счетчик, если нужно */}
          </span>
          <span className="custom-next">
            <img src="../images/right.svg" />
          </span>
        </div>

        <div className={classes.controls}>
          <span onClick={prev}>
            <img src="../images/left.svg" />
          </span>
          <span>
            {index + 1} / {total}
          </span>
          <span onClick={next}>
            <img src="../images/right.svg" />
          </span>
        </div>
      </div>
    </div>
  );
}
