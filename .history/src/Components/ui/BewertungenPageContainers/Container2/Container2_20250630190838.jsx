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
    projects[(index - 1 + total) % total],
    projects[index % total],
    projects[(index + 1) % total],
    projects[(index + 2) % total],
  ];

  return (
    <div className={classes.container}>
      <div className={classes.sectionWrapper}>
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
            <span>Reinigung</span>
            <span>{projects[index].description}</span>
          </div>
        </div>

        <div className={classes.controls}>
          <span onClick={() => setIndex((prev) => (prev - 1 + total) % total)}>
            <img src="../images/left.svg" />
          </span>
          <span>
            {index + 1} / {total}
          </span>
          <span onClick={() => setIndex((prev) => (prev + 1) % total)}>
            <img src="../images/right.svg" />
          </span>
        </div>
      </div>
   <span>Reinigung</span>
      {/* ✅ Мобильный Swiper */}
      <div className={classes.containerMobile}>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className={classes.mobileSlide}>
                <img src={project.img[0]} alt={project.title} />
                <span>{project.description}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
