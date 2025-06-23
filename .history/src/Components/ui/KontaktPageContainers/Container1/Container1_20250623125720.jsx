import React from 'react';
import classes from './Container1.module.css';

export default function Container1() {
  return (
    <div className={classes.container1}>
      <img src="../images/kontakt1.png" />
      <div className={classes.container1Block}>
        <span >Kontakt</span>
        <span>
          Sie möchten sich mal unverbindlich und kostenlos beraten lassen?
          Gerne! Dafür sind wirja Schließlich da. Wir beantworten Ihnen gern
          Ihre Fragen.
        </span>
      </div>
    </div>
  );
}
