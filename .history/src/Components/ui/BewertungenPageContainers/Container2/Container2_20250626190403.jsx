import React, { useState } from 'react';
import classes from './Container2.module.css';

export default function Container2() {
      const [index, setIndex] = useState(0);
  const current = slides[index];

  const prev = () => setIndex((index - 1 + slides.length) % slides.length);
  const next = () => setIndex((index + 1) % slides.length);
 return <div className={classes.container}>    <div className="gallery">
      {/* Левая большая картинка */}
      <div className="gallery__leftPreview">
        <img src={slides[0].image} alt="" />
      </div>

      {/* Центральный блок */}
      <div className="gallery__main">
        <div className="gallery__top">
          <img src={current.image} className="gallery__mainImage" alt="" />
          <div className="gallery__content">
            <h2>{current.title}</h2>
            <p>{current.text}</p>
          </div>
        </div>

        {/* Нижний ряд */}
        <div className="gallery__bottom">
          <button onClick={prev}>◀</button>
          <div className="gallery__thumbs">
            {slides.map((slide, i) => (
              <img
                key={slide.id}
                src={slide.image}
                className={i === index ? 'active' : ''}
                onClick={() => setIndex(i)}
                alt=""
              />
            ))}
          </div>
          <button onClick={next}>▶</button>
        </div>
        <div className="gallery__pagination">
          {index + 1} / {slides.length}
        </div>
      </div>
    </div></div>;
}


    <div className="gallery">
      {/* Левая большая картинка */}
      <div className="gallery__leftPreview">
        <img src={slides[0].image} alt="" />
      </div>

      {/* Центральный блок */}
      <div className="gallery__main">
        <div className="gallery__top">
          <img src={current.image} className="gallery__mainImage" alt="" />
          <div className="gallery__content">
            <h2>{current.title}</h2>
            <p>{current.text}</p>
          </div>
        </div>

        {/* Нижний ряд */}
        <div className="gallery__bottom">
          <button onClick={prev}>◀</button>
          <div className="gallery__thumbs">
            {slides.map((slide, i) => (
              <img
                key={slide.id}
                src={slide.image}
                className={i === index ? 'active' : ''}
                onClick={() => setIndex(i)}
                alt=""
              />
            ))}
          </div>
          <button onClick={next}>▶</button>
        </div>
        <div className="gallery__pagination">
          {index + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}