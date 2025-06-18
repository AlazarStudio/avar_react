import React from 'react';
import classes from './Container4.module.css';

export default function Container4() {
  return (
    <div>
      {' '}
      <div className={classes.container4}>
        <div className={classes.container4Top}>
          <span>Warum Uns Wahlen?</span>
          <span>
            «Wir schaffen Perfektion» ist kein Werbespruch, sondern unser
            Niveau. Wirsind erst dann zufrieden, wenn Sie es sind. Ihre Wünsche
            haben für unshöchste Priorität. Über 25 Jahre Erfahrung im
            Baugewerbe zeichnet sichpositiv aus.
          </span>
        </div>
        <div className={classes.container4Bottom}>
          <div className={classes.container4BottomEl}>
            <img src="../images/home1.svg" />
            <span>Wir Schaffen Perfektion</span>
          </div>
          <div className={classes.container4BottomEl}>
            <img src="../images/home2.svg" />
            <span>Erfahrene Handwerker</span>
          </div>
          <div className={classes.container4BottomEl}>
            <img src="../images/home3.svg" />
            <span>Neuste Techniken</span>
          </div>
          <div className={classes.container4BottomEl}>
            <img src="../images/home4.svg" />
            <span>Uber 25 Jahre Erfahrung</span>
          </div>
          <div className={classes.container4BottomEl}>
            <img src="../images/home5.svg" />
            <span>Qualitat Und Schnelligkeit Zugleich</span>
          </div>
          <div className={classes.container4BottomEl}>
            <img src="../images/home6.svg" />
            <span>Fristgerechte Fertigstellung</span>
          </div>
        </div>
        <div className={classes.contaier4Img}>
          <img src="../images/homeor (1).svg" className={classes.imgOr} />
          <img src="../images/homeor (2).svg" className={classes.imgOr} />
        </div>
      </div>
    </div>
  );
}
