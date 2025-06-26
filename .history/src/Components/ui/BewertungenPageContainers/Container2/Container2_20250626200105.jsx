import React, { useState } from 'react';
import classes from './Container2.module.css';
import { projects } from '../../../../../bd';

export default function Container2() {
  const [index, setIndex] = useState(0);

  const prevIndex = (index - 1 + projects.length) % projects.length;
  const nextIndex = (index + 1) % projects.length;

  const prev = () => setIndex(prevIndex);
  const next = () => setIndex(nextIndex);

  return (
    <div className={classes.sectionWrapper}>
      <div className={classes.carousel}>
        <img
          src={projects[prevIndex].img[0]}
          className={`${classes.image} ${classes.side}`}
          onClick={prev}
          alt="prev"
        />
        <img
          src={projects[index].img[0]}
          className={`${classes.image} ${classes.center}`}
          alt="current"
        />
        <img
          src={projects[nextIndex].img[0]}
          className={`${classes.image} ${classes.side}`}
          onClick={next}
          alt="next"
        />
      </div>

      <div className={classes.textBlock}>
        <h2>{projects[index].title}</h2>
        <p>{projects[index].description}</p>
      </div>

      <div className={classes.controls}>
        <button onClick={prev}>◀</button>
        <span>{index + 1} / {projects.length}</span>
        <button onClick={next}>▶</button>
      </div>
    </div>
  );
}
