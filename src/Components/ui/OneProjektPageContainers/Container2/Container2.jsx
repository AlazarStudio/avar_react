import React, { useRef, useEffect, useCallback } from 'react';
import classes from './Container2.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import uploadsConfig from '../../../../uploadsConfig';

export default function Container2({ project }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevDesktopRef = useRef(null);
  const nextDesktopRef = useRef(null);

  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  if (!project) return <div>Загрузка...</div>;

  const isVideo = useCallback(
    (src) => /\.(mp4|webm|ogg)$/i.test(src || ''),
    []
  );

  // остановить/возобновить autoplay при взаимодействии с видео
  const wireVideoHandlers = useCallback((containerEl, swiperRef) => {
    if (!containerEl) return;
    const videos = containerEl.querySelectorAll('video');

    videos.forEach((v) => {
      const stop = () => swiperRef.current?.autoplay?.stop?.();
      const start = () => swiperRef.current?.autoplay?.start?.();

      v.addEventListener('play', stop);
      v.addEventListener('playing', stop);
      v.addEventListener('pause', start);
      v.addEventListener('ended', start);
      v.addEventListener('seeking', stop);

      // очистка
      const cleanup = () => {
        v.removeEventListener('play', stop);
        v.removeEventListener('playing', stop);
        v.removeEventListener('pause', start);
        v.removeEventListener('ended', start);
        v.removeEventListener('seeking', stop);
      };
      v._cleanupHandlers = cleanup;
    });

    return () => {
      videos.forEach((v) => v._cleanupHandlers && v._cleanupHandlers());
    };
  }, []);

  useEffect(() => {
    const dRoot = desktopSwiperRef.current?.el;
    const mRoot = mobileSwiperRef.current?.el;
    const cleanDesktop = wireVideoHandlers(dRoot, desktopSwiperRef);
    const cleanMobile = wireVideoHandlers(mRoot, mobileSwiperRef);
    return () => {
      cleanDesktop && cleanDesktop();
      cleanMobile && cleanMobile();
    };
  }, [wireVideoHandlers]);

  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        <div className={classes.container2BlockText}>{project.description}</div>

        {/* Desktop */}
        <div className={classes.container2BlockImg}>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={3}
            spaceBetween={10}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevDesktopRef.current;
              swiper.params.navigation.nextEl = nextDesktopRef.current;
            }}
            onSwiper={(swiper) => {
              desktopSwiperRef.current = swiper;
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
            {project.images.map((src, index) => {
              const full = `${uploadsConfig}${src}`;
              return (
                <SwiperSlide key={index}>
                  <div className={classes.mediaWrap}>
                    {isVideo(full) ? (
                      <video
                        src={full}
                        controls
                        preload="metadata"
                        playsInline
                        className={classes.mediaVideo}
                      />
                    ) : (
                      <img
                        src={full}
                        alt={`Project media ${index + 1}`}
                        className={classes.mediaImage}
                      />
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Mobile */}
        <div className={classes.container2BlockImgMobile}>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={2}
            spaceBetween={-50}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSwiper={(swiper) => {
              mobileSwiperRef.current = swiper;
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {project.images.map((src, index) => {
              const full = `${uploadsConfig}${src}`;
              return (
                <SwiperSlide key={index}>
                  <div className={classes.mediaWrapMobile}>
                    {isVideo(full) ? (
                      <video
                        src={full}
                        controls
                        preload="metadata"
                        playsInline
                        className={classes.mediaVideo}
                      />
                    ) : (
                      <img
                        src={full}
                        alt={`Project media ${index + 1}`}
                        className={classes.mediaImage}
                      />
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
