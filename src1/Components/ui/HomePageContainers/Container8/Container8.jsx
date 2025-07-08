import React from 'react';
import classes from './Container8.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { reviews } from '../../../../../bd';

export default function Container8() {
  return (
    <div>
      {' '}
      <div className={classes.container8}>
        <div className={classes.container8Block}>
          <div className={classes.container8BlockBottom}>
            <div className={classes.container8BlockBottom1}>
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={3}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
                loop={true}
                style={{ paddingLeft: '15px', paddingRight: '15px' }}
                // navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {reviews.map((review) => (
                  <SwiperSlide key={review.id}>
                    <div className={classes.container8BlockBottomEl}>
                      <img src="../images/“.svg" />
                      {/* <span>“</span> */}
                      <span>{review.description}</span>
                      <span>{review.name}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
