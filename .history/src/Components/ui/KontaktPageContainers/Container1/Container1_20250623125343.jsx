import React from 'react';
import classes from './Container1.module.css';

export default function Container1() {
  return (
    <div className={classes.container1}>
      <img src="../images/kontakt1.png" />
      <div className={classes.container1Block}>
        <span>Kontakt</span>
        <span></span>
      </div>
    </div>
  );
}
