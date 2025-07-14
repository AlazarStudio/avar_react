import React from 'react';
import classes from './Container1.module.css';

export default function Container1() {
  return (
    <div className={classes.container1}>
      <img src="../images/backServices.png" />
      {/* <img src="../images/UberLogo.svg" /> */}
      <div className={classes.container1Block}>
        <span className={classes.container1BlockTitle}>Dienstleistungen</span>
        <div className={classes.container1BlockText}>
          <span>
            Die aufgeführten Leistungen bieten wir einzeln,- aber auch als
            Komplettpaket zusammen an. Lassen Sie sich vom Team AVAR die last
            von den schultern nehmen.
          </span>
        </div>
      </div>
    </div>
  );
}
