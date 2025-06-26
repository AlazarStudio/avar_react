import React, { useState } from 'react';
import classes from './Container2.module.css';
import { projects } from '../../../../../bd';

export default function Container2() {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const getIndex = (i) => (i + total) % total;

  const prev = () => setIndex(getIndex(index - 1));
  const next = () => setIndex(getIndex(index + 1));

  const visibleItems = 4; // 1 слева + центр + 2 справа

  const getVisibleSlides = () => {
    let slides = [];
    for (let i = -1; i < 3; i++) {
      slides.push(projects[getIndex(index + i)]);
    }
    return slides;
  };

  return (
    <div className={classes.sectionWrapper}>
      <div className={classes.carouselWrapper}>
        <div
          className={classes.carouselTrack}
          style={{ transform: `translateX(-${100 / visibleItems}px)` }}
        >
          {getVisibleSlides().map((slide, i) => (
            <img
              key={i}
              src={slide.img[0]}
              alt=""
              className={`${classes.slide} ${
                i === 1 ? classes.left :
                i === 2 ? classes.center :
                i === 3 ? classes.right : ''
              }`}
              onClick={() => setIndex(getIndex(index + i - 1))}
            />
          ))}
        </div>
      </div>

      <div className={classes.textBlock}>
        <h2>{projects[index].title}</h2>
        <p>{projects[index].description}</p>
      </div>

      <div className={classes.controls}>
        <button onClick={prev}>◀</button>
        <span>{index + 1} / {total}</span>
        <button onClick={next}>▶</button>
      </div>
    </div>
  );
}
