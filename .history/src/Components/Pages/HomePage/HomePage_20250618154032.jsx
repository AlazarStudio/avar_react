import React, { useState, useRef, useEffect } from 'react';
// можно и свою, если без MUI
import classes from './HomePage.module.css';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { projects, reviews } from '../../../../bd';
import Container1 from '../../ui/HomePageContainers/Container1/Container1';
import Container2 from '../../ui/HomePageContainers/Container2/Container2';
import Container3 from '../../ui/HomePageContainers/Container3/Container3';
import Container4 from '../../ui/HomePageContainers/Container4/Container4';
import Container5 from '../../ui/HomePageContainers/Container5/Container5';
import Container6 from '../../ui/HomePageContainers/Container6/Container6';
import Container7 from '../../ui/HomePageContainers/Container7/Container7';

function HomePage({ children, ...props }) {
  return (
    <>
      <div className={classes.contaier}>
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
        <Container7 />

        {/*Container7*/}
        {/*Container8*/}
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
        {/*Container8*/}
        {/*Container9*/}

        <div className={classes.container9}>
          <div className={classes.container9Block}>
            <a href="https://www.postbank.de/">
              <img src="../images/image 7.svg" />
            </a>
            <span>Offizieller Partner Der Postbank</span>
          </div>
        </div>

        {/*Container9*/}
      </div>
    </>
  );
}

export default HomePage;
