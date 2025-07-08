import React, { useEffect, useState } from 'react';
import classes from './Container3.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import axios from 'axios';
import serverConfig from '../../../../serverConfig';
import uploadsConfig from '../../../../uploadsConfig';

export default function Container3() {
  const [handwerks, setHandwerks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${serverConfig}/handwerks`)
      .then((res) => setHandwerks(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const total = handwerks.length;
  const visibleHandwerks = [
    handwerks[(index - 1 + total) % total],
    handwerks[index % total],
    handwerks[(index + 1) % total],
    handwerks[(index + 2) % total],
  ];

  if (loading) return <div className={classes.loading}>Laden...</div>;

  return (
    <div className={classes.container}>
      <div className={classes.sectionWrapper}>
        <div className={classes.contentRow}>
          <div className={classes.carousel}>
            {visibleHandwerks.map((project, i) => (
              <div
                key={project.id}
                className={`${classes.slide} ${
                  i === 1 ? classes.activeSlide : ''
                }`}
              >
                {/* <img
                  src={project.img[0]}
                  alt=""
                  className={classes.slideImage}
                /> */}
              </div>
            ))}
          </div>

          <div className={classes.textBlock}>
            <span>Handwerk </span>
            {/* <span>{projects[index].description}</span> */}
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
      <span className={classes.title}>Aufbau</span>
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
          {handwerks.map((project) => (
            <SwiperSlide key={project.id}>
              <div className={classes.mobileSlide}>
                <img
                  src={`${uploadsConfig}${project.images[0]}`}
                  alt={project.title}
                />
                {/* <span className={classes.description}>
                  {project.description}
                </span> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
