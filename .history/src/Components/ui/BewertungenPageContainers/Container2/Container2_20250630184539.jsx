import React, { useState } from 'react';
import classes from './Container2.module.css';
import { projects } from '../../../../../bd';
import { Class } from '@mui/icons-material';

export default function Container2() {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const visibleProjects = [
    projects[(index - 1 + total) % total], // left
    projects[index % total], // center
    projects[(index + 1) % total], // right 1
    projects[(index + 2) % total], // right 2
  ];

  return (
    <div className={classes.container}>
      <div className={classes.sectionWrapper}>
        <div className={classes.contentRow}>
          <div className={classes.carousel}>
            {visibleProjects.map((project, i) => (
              <div
                key={project.id}
                className={`${classes.slide} ${
                  i === 1 ? classes.activeSlide : ''
                }`}
              >
                <img
                  src={project.img[0]}
                  alt=""
                  className={classes.slideImage}
                />
              </div>
            ))}
          </div>

          <div className={classes.textBlock}>
            <span>{projects[index].title}</span>
            <span>{projects[index].description}</span>
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
            {' '}
            <img src="../images/right.svg" />
          </span>
        </div>
      </div>
      <div className={classes.containerMobile}></div>
    </div>
  );
}
