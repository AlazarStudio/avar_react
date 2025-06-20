import React from 'react';
import classes from './Container2.module.css';

export default function Container2({ projext }) {
  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        <div className={classes.container2BlockText}></div>
        <div className={classes.container2BlockImg}></div>
      </div>
    </div>
  );
}
