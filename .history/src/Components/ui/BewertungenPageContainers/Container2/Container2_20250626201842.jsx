import React, { useRef, useState, useEffect } from 'react';
import classes from './Container2.module.css';
import { projects } from '../../../../../bd';

export default function Container2() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  // Прокрутка к активному элементу
  useEffect(() => {
    const track = trackRef.current;
    const activeSlide = track?.querySelector(`.${classes.center}`);
    if (activeSlide && track) {
      const slideLeft = activeSlide.offsetLeft;
      const slideWidth = activeSlide.offsetWidth;
      const trackWidth = track.offsetWidth;
      track.scrollTo({
        left: slideLeft - trackWidth / 2 + slideWidth / 2,
        behavior: 'smooth',
      });
    }
  }, [index]);

  const prev = () => setIndex((index - 1 + projects.length) % projects.length);
  const next = () => setIndex((index + 1) % projects.length);

  return (
    <div className={classes.container}>
      <div className={classes.sectionWrapper}>
        <div className={classes.trackWrapper}>
          <div className={classes.track} ref={trackRef}>
            {projects.map((project, i) => (
              <img
                key={project.id}
                src={project.img[0]}
                alt=""
                className={`${classes.slide} ${
                  i === index ? classes.center : classes.side
                }`}
                onClick={() => setIndex(i)}
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
          <span>
            {index + 1} / {projects.length}
          </span>
          <button onClick={next}>▶</button>
        </div>
      </div>
    </div>
  );
}
