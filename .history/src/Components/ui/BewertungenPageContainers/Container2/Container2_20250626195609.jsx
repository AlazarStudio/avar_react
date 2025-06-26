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
      <div className={classes.gallery}>
        {/* Левая превью-картинка (1-я) */}
        <div className={classes.sidePreview}>
          <img src={projects[0].img[0]} alt="" />
        </div>

        {/* Центральное изображение */}
        {/* <div className={classes.mainImageWrapper}>
          <img src={current.img[0]} alt="" className={classes.mainImage} />
        </div> */}

        {/* Правая часть: текст и миниатюры */}
        <div className={classes.contentBlock}>
          <h2>{current.title}</h2>
          <p>{current.description}</p>
          <div className={classes.thumbs}>
            {projects.map((p, i) => (
              <img
                key={p.id}
                src={p.img[0]}
                alt=""
                className={`${classes.thumb} ${
                  i === index ? classes.active : ''
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Нижняя панель управления */}
      <div className={classes.controls}>
        <button onClick={prev}>◀</button>
        <span>
          {index + 1}/{projects.length}
        </span>
        <button onClick={next}>▶</button>
      </div>
    </div>
  );
}
