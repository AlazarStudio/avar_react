import React, { useState } from 'react';
import classes from './Container2.module.css';
import { reinigung } from '../../../../../bd';

export default function Container2() {
  const [index, setIndex] = useState(0);
  const total = reinigung.length;

  const visibleImages = [
    reinigung[(index - 1 + total) % total],
    reinigung[index % total],
    reinigung[(index + 1) % total],
    reinigung[(index + 2) % total],
  ];

  return (
    <div className={classes.carousel}>
      {visibleImages.map((src, i) => (
        <div
          key={i}
          className={`${classes.slide} ${i === 1 ? classes.activeSlide : ''}`}
        >
          <img src={src} alt={`Reinigung ${i}`} />
        </div>
      ))}

      <div className={classes.controls}>
        <span onClick={() => setIndex((prev) => (prev - 1 + total) % total)}>
          <img src="../images/left.svg" />
        </span>
        <span>
          {index + 1} / {total}
        </span>
        <span onClick={() => setIndex((prev) => (prev + 1) % total)}>
          <img src="../images/right.svg" />
        </span>
      </div>
    </div>
  );
}
