import React from 'react';
import classes from './Container2.module.css';

export default function Container2() {
  return (
    <div className={classes.container}>
      <div className={classes.containerBlock}>
        <div className={classes.containerBlockElLeft}></div>
        <div className={classes.containerBlockElLeft}></div>
      </div>
    </div>
  );
}
