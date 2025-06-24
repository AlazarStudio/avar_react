import React from 'react';
import classes from './Container2.module.css';

export default function Container2() {
  return (
    <div className={classes.container}>
      <div className={classes.containerBlock}>
        <div className={classes.containerBlockElLeft}>
          <img src="../images/unserTeam2.png" />
          <div className={classes.containerBlockElLeftText}>
            <div className={classes.containerBlockElLeftTextLeft}>
              <span>Name Name</span>
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div className={classes.containerBlockElLeftTextRight}>
              <img src='../images/unserTeamLogo.svg'>
            </div>
          </div>
        </div>
        <div className={classes.containerBlockElRight}></div>
      </div>
    </div>
  );
}
