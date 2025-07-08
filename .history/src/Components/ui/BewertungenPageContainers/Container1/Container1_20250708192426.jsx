import React from 'react';
import classes from './Container1.module.css';

export default function Container1() {
  return (
    <div className={classes.container}>
      <img src="../images/BewertungenPage.png" />
      <div className={classes.containerBlock}>
        <span>Referenzen und Bewertungen </span>
      </div>
    </div>
  );
}
