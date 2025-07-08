import React, { useEffect, useState } from 'react';
import classes from './Container8.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { reviews } from '../../../../../bd';

import axios from 'axios';
import serverConfig from '../../../../serverConfig';
import uploadsConfig from '../../../../uploadsConfig';

export default function Container8() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${serverConfig}/feedbacks`)
      .then((res) => setFeedbacks(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className={classes.loading}>Laden...</div>;

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
                {feedbacks.map((review) => (
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
