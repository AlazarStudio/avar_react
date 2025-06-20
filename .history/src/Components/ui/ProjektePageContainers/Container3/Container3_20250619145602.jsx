import React from 'react';
import classes from './Container3.module.css';

export default function Container3() {
  return (
    <div className={classes.container3}>
      <div className={classes.container3Block}>
        <div className={classes.container3BlockTop}>
          <img src="../images/projekte2.png" />
        </div>
        <div className={classes.container3BlockBottom}>
          <div className={classes.container3BlockBottomLeft}>
            <img src="../images/“.svg" />
            <span>
              ‘’Wir haben das Team von AVAR am Anfang mit ein wenig Vorsicht
              betrachtet, allerdings haben wir schnell gemerkt, dass es
              Erfahrene Jungs sind, die ihre Arbeit kennen und diese einfach auf
              einem unglaublichen Niveau und Schnelligkeit umsetzten. Im Moment
              fehlt das Geld für eine zweite Wohnung, allerdings, falls unsere
              Familie sich entschließt im Laufe der Zeit eine zweite zu kaufen,
              werden wir uns definitiv für eine erneute Zusammenarbeit mit Herrn
              Abakarov von Team AVAR entscheiden. Danke euch!’’
            </span>
            <span>Pia-Maria Wendtland</span>
          </div>
          <div className={classes.container3BlockBottomRight}>
            {' '}
            <img src="../images/projekte4.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
