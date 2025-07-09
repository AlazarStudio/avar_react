import React, { useState } from 'react';
import classes from './Container3.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { handwerks } from '../../../../../bd';

export default function Container2() {
  const [index, setIndex] = useState(0);
  const total = handwerks.length;

  const visibleHandwerks = [
    handwerks[(index - 1 + total) % total],
    handwerks[index % total],
    handwerks[(index + 1) % total],
    handwerks[(index + 2) % total],
  ];

  return (
    <div className={classes.container}>


      <div className={classes.sectionWrapper}>
        <div className={classes.contentRow}>
          <div className={classes.carousel}>
            {visibleHandwerks.map((item, i) => (
              <div
                key={item.id}
                className={`${classes.slide} ${
                  i === 1 ? classes.activeSlide : ''
                }`}
              >
                <img src={item.images[0]} alt={`Reinigung ${item.id}`} />
              </div>
            ))}
          </div>

          <div className={classes.textBlock}>
            <span>Reinigung</span>
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

      <span className={classes.title}>Reinigung</span>

      <div className={classes.containerMobile}>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
        >
          {handwerks.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={classes.mobileSlide}>
                <img src={item.images[0]} alt={`Reinigung ${item.id}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
