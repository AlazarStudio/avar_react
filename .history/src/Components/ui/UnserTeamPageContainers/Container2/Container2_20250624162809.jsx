import React from 'react';
import classes from './Container2.module.css';

export default function Container2() {
  return (
    <div className={classes.container}>
      <div className={classes.containerBlock}>
        <div className={classes.containerBlockElLeft}>
          <img src="../images/unserTeam2.png" />
          <img src="../images/unserLeft.svg" className={classes.line} />
          <div className={classes.containerBlockElLeftText}>
            <span></span>
            <div className={classes.containerBlockElLeftTextLeft}>
              <span>Name Name</span>
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div className={classes.containerBlockElLeftTextRight}>
              <img src="../images/unserTeamLogo.svg" />
            </div>
          </div>
        </div>
        <div className={classes.containerBlockElRight}>
          <img src="../images/unserTeam3.png" />
          <img src="../images/unserRight.svg" className={classes.line} />
          <div className={classes.containerBlockElRightText}>
         
            <div className={classes.containerBlockElRightTextLeft}>
              <span>Name Name</span>
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div className={classes.containerBlockElRightTextRight}>
              <img src="../images/unserTeamLogo.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
