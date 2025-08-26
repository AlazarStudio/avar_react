import React, { useEffect, useRef, useState } from 'react';
import classes from './Container5.module.css';

function Counter({ target, duration = 3000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const startTime = performance.now();

          const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const value = Math.floor(progress * target);
            setCount(value);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}
      {typeof target === 'number' && target % 1 === 0 && ''}
    </span>
  );
}

export default function Container5() {
  return (
    <div>
      <div className={classes.container5}>
        <div className={classes.contaier5Block}>
          <div className={classes.contaier5BlockEl}>
            <span>
              {' '}
              <Counter target={200} />+
            </span>
            <span>Projekte jährlich</span>
          </div>
          <div className={classes.contaier5BlockEl}>
            <span>
              <Counter target={110} />%
            </span>
            <span>Leistung</span>
          </div>
          <div className={classes.contaier5BlockEl}>
            <Counter target={1} />
            <span>Ziel</span>
          </div>
        </div>
      </div>
    </div>
  );
}
