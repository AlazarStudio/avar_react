import React from 'react';
import classes from './Container9.module.css';

export default function Container9() {
  return (
    <div>
      {' '}
      <div className={classes.container6}>
        <div className={classes.container6Block}>
          <div className={classes.container6BlockTop}>
            <span>Unsere Ausgewahlten Projekte</span>
          </div>
          <div className={classes.container6BlockBottom}>
            <div className={classes.container6BlockBottom}>
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={3}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                spaceBetween={10}
                loop={true}
                // navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className={classes.container6BlockBottomEl}>
                      <img src={project.img} alt={project.title} />
                      <span>{project.title}</span>
                      <span>{project.description}</span>
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
