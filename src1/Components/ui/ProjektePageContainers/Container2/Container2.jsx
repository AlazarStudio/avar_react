import React from 'react';
import classes from './Container2.module.css';

export default function Container2() {
  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        <div className={classes.container2BlockLeft}>
          <span>Komplett Modernisierung</span>
          <span>
            <img src="../images/location.svg" />
            Projensdorfer Straße 110, 24106 Kie
          </span>
        </div>
        <div className={classes.container2BlockCenter}>
          Bei diesem Projekt entwickelte AVAR ein komplettes Interior Design für
          denInnenbereich, setzte diesen dann erfolgreich um, sodass der Kunde
          zufrieden war.Wir achten darauf Sie als Kunde stets auf dem Laufendem
          zu halten, sodass Sieimmer einen Überblick haben
        </div>
        <div className={classes.container2BlockRight}>
          <span>
            <img src="../images/UberCon22.svg" />
            Design
          </span>
          <span>
            <img src="../images/UberCon22.svg" />
            Plan
          </span>
          <span>
            <img src="../images/UberCon22.svg" />
            Umsetzung
          </span>
          <span>
            <img src="../images/UberCon22.svg" />
            Fertigstellung
          </span>
        </div>
      </div>
    </div>
  );
}
