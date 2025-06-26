import React, { useState } from 'react';
import classes from './Container2.module.css';
import { projects } from '../../../../../bd';

export default function Container2() {
  const [index, setIndex] = useState(0);
  const current = projects[index];

  const prev = () => setIndex((index - 1 + projects.length) % projects.length);
  const next = () => setIndex((index + 1) % projects.length);
  return (
    <div className={classes.sectionWrapper}>
      <div className={classes.container}>
        <div className={classes.gallery}>
          {/* Центральный блок с увеличенным активным изображением */}
          <div className={classes.galleryMain}>
            <img src={current.img[0]} className={classes.mainImage} alt="" />
            <div className={classes.content}>
              <h2>{current.title}</h2>
              <p>{current.description}</p>
            </div>
          </div>

          {/* Нижняя галерея превью */}
          <div className={classes.galleryBottom}>
            <button onClick={prev} className={classes.arrow}>
              ◀
            </button>

            <div className={classes.thumbs}>
              {projects.map((slide, i) => (
                <img
                  key={slide.id}
                  src={slide.img[0]}
                  className={`${classes.thumb} ${
                    i === index ? classes.active : ''
                  }`}
                  onClick={() => setIndex(i)}
                  alt=""
                />
              ))}
            </div>

            <button onClick={next} className={classes.arrow}>
              ▶
            </button>
          </div>

          {/* Пагинация */}
          <div className={classes.pagination}>
            {index + 1} / {projects.length}
          </div>
        </div>
      </div>
    </div>
  );
}
