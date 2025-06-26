import React, { useState } from 'react';
import classes from './Container2.module.css';
import { projects } from '../../../../../bd';

export default function Container2() {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const getIndex = (i) => (i + total) % total;

  const prev = () => setIndex(getIndex(index - 1));
  const next = () => setIndex(getIndex(index + 1));

  const prevIndex = getIndex(index - 1);
  const nextIndex1 = getIndex(index + 1);
  const nextIndex2 = getIndex(index + 2);

  return (
    <div className={classes.container}></div>
    <div className={classes.sectionWrapper}>
      <div className={classes.carousel}>
        <img
          src={projects[prevIndex].img[0]}
          className={`${classes.image} ${classes.sideLeft}`}
          onClick={() => setIndex(prevIndex)}
          alt="prev"
        />
        <img
          src={projects[index].img[0]}
          className={`${classes.image} ${classes.center}`}
          alt="current"
        />
        <img
          src={projects[nextIndex1].img[0]}
          className={`${classes.image} ${classes.sideRight}`}
          onClick={() => setIndex(nextIndex1)}
          alt="next1"
        />
        <img
          src={projects[nextIndex2].img[0]}
          className={`${classes.image} ${classes.sideRight}`}
          onClick={() => setIndex(nextIndex2)}
          alt="next2"
        />
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
