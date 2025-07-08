import React from 'react';
import classes from './Container7.module.css';

export default function Container7() {
  return (
    <div>
      {' '}
      <div className={classes.container7}>
        <img src="../images/homeCon71.png" className={classes.contaier7Bg} />
        <div className={classes.container7Block}>
          <div className={classes.container7BlockLeft}>
            <img src="../images/homeCom73.png" />
          </div>
          <div className={classes.container7BlockRight}>
            <div className={classes.container7BlockRightEl}>
              <span>Das Sagen Unsere Uber Uns</span>
              <span>
     «Wir möchten uns von Herzen bei der Firma AVAR bedanken, die unser altes Einfamilienhaus in ein wahres Traumhaus verwandelt hat. Die Sanierung umfasste praktisch alle Bereiche: vom Dach 
über die Fassade bis hin zu Elektrik, Sanitär, Fußböden und den kompletten Innenausbau – und wir sind mehr als zufrieden mit dem Ergebnis. Bereits in der Planungsphase fühlten wir uns sehr gut aufgehoben. Die Beratung war ausführlich, ehrlich und lösungsorientiert.
              </span>
              <span>Pia-Maria Wendtland</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
