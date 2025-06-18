import React from 'react';
import classes from './Container1.module.css';

export default function Container1() {
  return (
    <div className={classes.container1}>
      <div className={classes.container1Block}>
        <span>Über Uns</span>
        <span>
          Ein umfangreiches Team an Handwerkern mit langjähriger Erfahrung
          zeichnet sich in Ihrem Bauprojekt positiv aus.
        </span>
      </div>
    </div>
  );
}
