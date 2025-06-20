import React from 'react';
import classes from './Container1.module.css';

export default function Container1() {
  return (
    <div className={classes.container1}>
      <img src="../images/backUber.png" />
      {/* <img src="../images/UberLogo.svg" /> */}
      <div className={classes.container1Block}>
        <span className={classes.container1BlockTitle}>Bewertungen</span>
      </div>
    </div>
  );
}
