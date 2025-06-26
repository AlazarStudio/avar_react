import React, { useState } from 'react';
import classes from './Container2.module.css';
import { projects } from '../../../../../bd';

export default function Container2() {
  const [index, setIndex] = useState(0);
  const current = projects[index];

  const prev = () => setIndex((index - 1 + projects.length) % projects.length);
  const next = () => setIndex((index + 1) % projects.length);
  return (
    <div className={classes.container}>
      {' '}
      <div className="gallery">
        {/* Левая большая картинка */}
        <div className="gallery__leftPreview">
          <img src={projects[0].image} alt="" />
        </div>

        {/* Центральный блок */}
        <div className="gallery__main">
          <div className="gallery__top">
            <img src={current.image} className="gallery__mainImage" alt="" />
            <div className="gallery__content">
              <h2>{current.title}</h2>
              <p>{current.description}</p>
            </div>
          </div>

          {/* Нижний ряд */}
          <div className="gallery__bottom">

            <div className="gallery__thumbs">
              {projects.map((slide, i) => (
                <img
                  key={slide.id}
                  src={slide.img[0]}
                  className={i === index ? 'active' : ''}
                  onClick={() => setIndex(i)}
                  alt=""
                />
              ))}
            </div>
            <button onClick={next}>▶</button>
          </div>
          <div className="gallery__pagination">
            {index + 1} / {projects.length}
          </div>
        </div>
      </div>
    </div>
  );
}
