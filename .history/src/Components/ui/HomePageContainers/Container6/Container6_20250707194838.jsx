import React, { useEffect, useState } from 'react';
import classes from './Container6.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import axios from 'axios';
import serverConfig from '../../../../serverConfig';
import uploadsConfig from '../../../../uploadsConfig';

export default function Container6() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${serverConfig}/projects`)
      .then((res) => setProjects(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className={classes.loading}>Laden...</div>;

  return (
    <div className={classes.container6}>
      <div className={classes.container6Block}>
        <div className={classes.container6BlockTop}>
          <span>Unsere ausgewahlten Projekte</span>
        </div>
        <div className={classes.container6BlockBottom}>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={110}
            loop
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
                  {/* <img
                    src={`${uploadsConfig}${project.img[0]}`}
                    alt={project.title}
                  /> */}
                  <span>{project.title}</span>
                  <span>{project.description}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
