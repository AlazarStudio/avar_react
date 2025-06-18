import React from 'react';
import classes from './Container2.module.css';

export default function Container2() {
  return (
    <div className={classes.Container2}>
      <div className={classes.Container2Block}>
        <img src="../images/" />
        <div className={classes.Container2BlockRight}>
         
          <div className={classes.Container2BlockRight}></div>{' '}
          <div className={classes.Container2BlockRight}></div>{' '}
          <div className={classes.Container2BlockRight}></div>
        </div>
      </div>
    </div>
  );
}
