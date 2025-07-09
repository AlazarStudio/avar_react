import React, { useState } from 'react';
import classes from './Container2.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { handwerks } from '../../../../../bd';

export default function Container2() {
  const [index, setIndex] = useState(0);
  const total = reinigung.length;

  const visibleReinigungs = [
    reinigung[(index - 1 + total) % total],
    reinigung[index % total],
    reinigung[(index + 1) % total],
    reinigung[(index + 2) % total],
  ];

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
          Zahlreiche namhafte Unternehmen, Wohnbaugesellschaften und öffentliche
          Auftraggeber zählen zu unseren zufriedenen Partnern.
        </span>
      </div>

      <div className={classes.sectionWrapper}>
        <div className={classes.contentRow}>
          <div className={classes.carousel}>
            {visibleReinigungs.map((item, i) => (
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
          {reinigung.map((item) => (
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
