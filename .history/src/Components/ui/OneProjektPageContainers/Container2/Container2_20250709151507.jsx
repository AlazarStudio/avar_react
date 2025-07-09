import React, { useRef, useEffect } from 'react';

import classes from './Container2.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Container2({ project }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const prevDesktopRef = useRef(null);
  const nextDesktopRef = useRef(null);

  // Проверка на null или undefined для объекта project
  if (!project) {
    return <div>Загрузка...</div>; // Можно отобразить какой-то индикатор загрузки, если project ещё не загружен
  }

  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        <div className={classes.container2BlockText}>{project.description}</div>
        <div className={classes.container2BlockImg}>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={190}
            loop={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevDesktopRef.current;
              swiper.params.navigation.nextEl = nextDesktopRef.current;
            }}
            navigation={{
              prevEl: prevDesktopRef.current,
              nextEl: nextDesktopRef.current,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Project image ${index + 1}`} />
              </SwiperSlide>
            ))}

            {/* Кнопки — теперь с рефами */}
            <div
              ref={prevDesktopRef}
              className="custom-button-prev"
              style={{
                backgroundColor: '#E55645',
                color: '#fff',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                // paddingRight: '1px',
                justifyContent: 'center',
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                zIndex: 10,
                fontSize: '32px',
                paddingBottom: '5px',
                cursor: 'pointer',
              }}
            >
              ←
            </div>

            <div
              ref={nextDesktopRef}
              className="custom-button-next"
              style={{
                backgroundColor: '#E55645',
                color: '#fff',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // paddingLeft: '5px',
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                zIndex: 10,
                fontSize: '32px',
                paddingBottom: '5px',
                cursor: 'pointer',
              }}
            >
              →
            </div>
          </Swiper>
        </div>

        <div className={classes.container2BlockImgMobile}>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={2}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={-50}
            loop={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            // navigation
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {project.img.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Project image ${index + 1}`} />
              </SwiperSlide>
            ))}
            <div
              ref={prevRef}
              className="custom-button-prev"
              style={{
                backgroundColor: '#E55645',
                color: '#fff',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                paddingBottom: '3px',
                top: '45%',
                left: '10px',
                transform: 'translateY(-50%)',
                zIndex: 10,
                cursor: 'pointer',
                fontSize: '18px',
                lineHeight: 1,
              }}
            >
              ←
            </div>

            <div
              ref={nextRef}
              className="custom-button-next"
              style={{
                backgroundColor: '#E55645',
                color: '#fff',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                paddingBottom: '3px',
                top: '45%',
                right: '10px',
                transform: 'translateY(-50%)',
                zIndex: 10,
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: 1,
              }}
            >
              →
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
