import React, { useEffect, useState } from 'react';
import classes from './Container2.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { reinigungs } from '../../../../../bd';
// import axios from 'axios';
// import serverConfig from '../../../../serverConfig';
// import uploadsConfig from '../../../../uploadsConfig';

export default function Container2() {
  // const [reinigungs, setReinigungs] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get(`${serverConfig}/reinigungs`)
  //     .then((res) => setReinigungs(res.data))
  //     .catch(console.error)
  //     .finally(() => setLoading(false));
  // }, []);

  const total = reinigungs.length;
  const visibleReinigungs = [
    reinigungs[(index - 1 + total) % total],
    reinigungs[index % total],
    reinigungs[(index + 1) % total],
    reinigungs[(index + 2) % total],
  ];

  if (loading) return <div className={classes.loading}>Laden...</div>;

  return (
    <div className={classes.container}>
      <div className={classes.containerTop}>
        <span>
          Ob auf der Baustelle oder im laufenden Betrieb – unsere Kunden
          verlassen sich seit Jahren auf unsere Kompetenz in Bau- und
          Reinigungsdienstleistungen. Von der gründlichen Baureinigung bis zur
          laufenden Objektpflege betreuen wir kleine und große Projekte
          zuverlässig, termintreu und mit höchsten Qualitätsansprüchen.
        </span>
        <span>
          {' '}
          Zahlreiche namhafte Unternehmen, Wohnbaugesellschaften und öffentliche
          Auftraggeber zählen zu unseren zufriedenen Partnern.
        </span>
      </div>
      <div className={classes.sectionWrapper}>
        <div className={classes.contentRow}>
          <div className={classes.carousel}>
            {visibleReinigungs.map((project, i) => (
              <div
                key={project.id}
                className={`${classes.slide} ${
                  i === 1 ? classes.activeSlide : ''
                }`}
              >
                <img
                  src={`${uploadsConfig}${project.images[0]}`}
                  alt={project.title}
                />
              </div>
            ))}
          </div>

          <div className={classes.textBlock}>
            <span>Reinigung</span>
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
      <span className={classes.title}>Reinigung</span>
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
          {reinigungs.map((project) => (
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
