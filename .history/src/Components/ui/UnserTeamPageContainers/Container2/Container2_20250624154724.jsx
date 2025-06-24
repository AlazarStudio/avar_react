import React from 'react';
import classes from './Container2.module.css';

export default function Container2() {
  return (
    <div className={classes.container}>
      <div className={classes.containerBlock}>
        <div className={classes.containerBlockElLeft}>
            <img src='../images/unserTeam2.png'/>
            <div className={classes.containerBlockElLeftText}
        </div>
        <div className={classes.containerBlockElRight}></div>
      </div>
    </div>
  );
}
