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
              <span>ZHANNA HORBATIUK</span>
              <span>Regionalleiterin</span>
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
            <div className={classes.containerBlockElRightTextRight}>
              <img src="../images/unserTeamLogo.svg" />
            </div>
            <div className={classes.containerBlockElRightTextLeft}>
              <span>OLHA ALAIEVA </span>
              <span>Personalmanagement </span>
            </div>
            <span className={classes.back}></span>
          </div>
        </div>
        <div className={classes.containerBlockElLeft}>
          <img src="../images/unserTeam4.png" />
          <img src="../images/unserLeft.svg" className={classes.line} />
          <div className={classes.containerBlockElLeftText}>
            <span></span>
            <div className={classes.containerBlockElLeftTextLeft}>
              <span>ALEXAN </span>
              <span>Teamleiter </span>
            </div>
            <div className={classes.containerBlockElLeftTextRight}>
              <img src="../images/unserTeamLogo.svg" />
            </div>
          </div>
        </div>
        <div className={classes.containerBlockElRight}>
          <img src="../images/unserTeam5.png" />
          <img src="../images/unserRight.svg" className={classes.line} />
          <div className={classes.containerBlockElRightText}>
            <div className={classes.containerBlockElRightTextRight}>
              <img src="../images/unserTeamLogo.svg" />
            </div>
            <div className={classes.containerBlockElRightTextLeft}>
              <span>Andrej und Svetlana Borodin </span>
              <span>Objektleitung </span>
            </div>
            <span className={classes.back}></span>
          </div>
        </div>
        <div className={classes.containerBlockElLeft}>
          <img src="../images/unserTeam6.png" />
          <img src="../images/unserLeft.svg" className={classes.line} />
          <div className={classes.containerBlockElLeftText}>
            <span></span>
            <div className={classes.containerBlockElLeftTextLeft}>
              <span>Anastasia Honorova </span>
              <span>Objektleitung </span>
            </div>
            <div className={classes.containerBlockElLeftTextRight}>
              <img src="../images/unserTeamLogo.svg" />
            </div>
          </div>
        </div>
        <div className={classes.containerBlockElRight}>
          <img src="../images/unserTeam7.png" />
          <img src="../images/unserRight.svg" className={classes.line} />
          <div className={classes.containerBlockElRightText}>
            <div className={classes.containerBlockElRightTextRight}>
              <img src="../images/unserTeamLogo.svg" />
            </div>
            <div className={classes.containerBlockElRightTextLeft}>
              <span>Krystyna Pariichuk </span>
              <span>Objektleitung </span>
            </div>
            <span className={classes.back}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
