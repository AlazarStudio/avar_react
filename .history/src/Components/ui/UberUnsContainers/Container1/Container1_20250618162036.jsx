import React from 'react';
import classes from './Container1.module.css';

export default function Container1() {
  return (
    <div className={classes.container1}>
      <img src="../images/Uber1.png" />
      <img src="../images/UberLogo.svg" />
      <div className={classes.container1Block}>
        <span className={classes.container1BlockTitle}>Über Uns</span>
        <div className={classes.container1BlockText}>

        </div>
      </div>
    </div>
  );
}
