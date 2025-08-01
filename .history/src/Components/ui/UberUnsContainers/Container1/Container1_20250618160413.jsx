import React from 'react';
import classes from './Container1.module.css';

export default function Container1() {
  return (
    <div className={classes.container1}>
      <img src="../images/Uber.png" />
      <img src="../images/UberLogo" />
      <div className={classes.container1Block}>
        <span className={classes.container1BlockTitle}>Über Uns</span>
        <div className={classes.container1BlockText}>
          <span>Ein umfangreiches Team an Handwerkern mit langjähriger</span>
          <span> Erfahrung zeichnet sich in Ihrem Bauprojekt positiv aus.</span>
        </div>
      </div>
    </div>
  );
}
