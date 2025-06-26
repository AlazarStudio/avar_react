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
        {/* Центральная активная картинка + описание */}
        <div className={classes.mainContent}>
          <img src={current.img[0]} alt="" className={classes.mainImage} />
          <div className={classes.text}>
            <h2>{current.title}</h2>
            <p>{current.description}</p>
          </div>
        </div>

        {/* Миниатюры снизу (горизонтальная прокрутка, активное — в центре) */}
        <div className={classes.thumbsWrapper}>
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

      {/* Управление */}
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
