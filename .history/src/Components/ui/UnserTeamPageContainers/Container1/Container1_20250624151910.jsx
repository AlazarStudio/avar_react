import React from 'react';
import classes from './Container1.module.css';

export default function Container1() {
  return (
    <div className={classes.container}>
      <img src="../images/unserTeam1.png" />
      <div className={classes.containerBlock}>
        <div className={classes.containerBlockLeft}>
          <span></span>
          <span></span>
        </div>
        <div className={classes.containerBlockRight}></div>
      </div>
    </div>
  );
}
