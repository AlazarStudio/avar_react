import React, { useState } from 'react';
import classes from './Container2.module.css';
import { projects } from '../../../../../bd';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Container2() {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const visibleProjects = [
    projects[(index - 1 + total) % total], // left
    projects[index % total], // center
    projects[(index + 1) % total], // right 1
    projects[(index + 2) % total], // right 2
  ];

  return (
    <div className={classes.container}>
      <div className={classes.sectionWrapper}>
        {/* Десктопная версия */}
        <div className={classes.contentRow}>
          <div className={classes.carousel}>
            {visibleProjects.map((project, i) => (
              <div
                key={project.id}
                className={`${classes.slide} ${
                  i === 1 ? classes.activeSlide : ''
                }`}
              >
                <img
                  src={project.img[0]}
                  alt=""
                  className={classes.slideImage}
                />
              </div>
            ))}
          </div>

          <div className={classes.textBlock}>
            <span>{projects[index].title}</span>
            <span>{projects[index].description}</span>
          </div>
        </div>

        <div className={classes.controls}>
          <span onClick={() => setIndex((prev) => (prev - 1 + total) % total)}>
            <img src="../images/left.svg" alt="prev" />
          </span>
          <span>
            {index + 1} / {total}
          </span>
          <span onClick={() => setIndex((prev) => (prev + 1) % total)}>
            <img src="../images/right.svg" alt="next" />
          </span>
        </div>
      </div>

      {/* Мобильная версия */}
      <div className={classes.containerMobile}>
        <div className={classes.containerMobile}></div>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.5 },
          }}
          spaceBetween={16}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className={classes.mobileSlide}>
                <img src={project.img[0]} alt={project.title} />
                <span>{project.title}</span>
                <span>{project.description}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
