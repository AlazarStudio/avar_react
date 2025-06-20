import React from 'react';
import classes from './Container1.module.css';

export default function Container1() {
  return (
    <div className={classes.container1}>
      <img src="../images/backProjekte.png" />
      {/* <img src="../images/UberLogo.svg" /> */}
      <div className={classes.container1Block}>
        <span className={classes.container1BlockTitle}>Projekte</span>
        <div className={classes.container1BlockText}>
          <span>
            Wir legen großen Wert auf die Perfektion in unseren Bauprojekten.
            Das Ziel wird stets erfolgreich umgesetzt.
          </span>
        </div>
      </div>
    </div>
  );
}
