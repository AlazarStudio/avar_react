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
      .then((res) => setHandwerks(Array.isArray(res.data) ? res.data : []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const total = handwerks.length;
  const visibleHandwerks =
    total > 0
      ? [
          handwerks[(index - 1 + total) % total],
          handwerks[index % total],
          handwerks[(index + 1) % total],
          handwerks[(index + 2) % total],
        ]
      : [];

  const withPrefix = (p) =>
    !p ? '' : /^https?:\/\//i.test(p) ? p : `${uploadsConfig}${p}`;
  const getExt = (u) =>
    (u?.split('#')[0].split('?')[0].split('.').pop() || '').toLowerCase();
  const isVideo = (src) =>
    ['mp4', 'webm', 'ogg', 'mov', 'm4v'].includes(getExt(src));
  const mimeByExt = {
    mp4: 'video/mp4',
    m4v: 'video/mp4',
    webm: 'video/webm',
    ogg: 'video/ogg',
    mov: 'video/quicktime',
  };

  if (loading) return <div className={classes.loading}>Laden...</div>;

  return (
    <div className={classes.container}>
      <div className={classes.sectionWrapper}>
        <div className={classes.contentRow}>
          <div className={classes.carousel}>
            {visibleHandwerks.map((project, i) => {
              if (!project) return null;
              const media = project.images?.[0];
              if (!media) return null;

              const full = withPrefix(media);
              const ext = getExt(full);
              const video = isVideo(full);

              return (
                <div
                  key={project.id}
                  className={`${classes.slide} ${
                    i === 1 ? classes.activeSlide : ''
                  }`}
                >
                  {video ? (
                    <video
                      className={classes.media}
                      controls
                      preload="metadata"
                      playsInline
                    >
                      <source src={full} type={mimeByExt[ext] || 'video/mp4'} />
                      Ihr Browser unterstützt kein HTML5-Video.
                    </video>
                  ) : (
                    <img
                      className={classes.media}
                      src={full}
                      alt={project.title || ''}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className={classes.textBlock}>
            <span>Handwerk </span>
            {/* <span>{handwerks[index]?.description}</span> */}
          </div>
        </div>

        <div className={classes.controls}>
          <span onClick={() => setIndex((prev) => (prev - 1 + total) % total)}>
            <img src="../images/left.svg" alt="prev" />
          </span>
          <span>
            {index + 1} / {total}
          </span>
          <span onClick={() => setIndex((prev) => (prev + 1) % total)}>
            <img src="../images/right.svg" alt="next" />
          </span>
        </div>
      </div>

      <span className={classes.title}>Handwerk</span>

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
          {handwerks.map((project) => {
            const media = project.images?.[0];
            if (!media) return null;

            const full = withPrefix(media);
            const ext = getExt(full);
            const video = isVideo(full);

            return (
              <SwiperSlide key={project.id}>
                <div className={classes.mobileSlide}>
                  {video ? (
                    <video
                      className={classes.mediaMobile}
                      controls
                      preload="metadata"
                      playsInline
                    >
                      <source src={full} type={mimeByExt[ext] || 'video/mp4'} />
                      Ihr Browser unterstützt kein HTML5-Video.
                    </video>
                  ) : (
                    <img
                      className={classes.mediaMobile}
                      src={full}
                      alt={project.title || ''}
                    />
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
