import React from 'react';
import classes from './Container4.module.css';

export default function Container4() {
  return (
    <div className={classes.container4}>
      <div className={classes.container4Block}></div>
      <div className={classes.container4BlockTop}>
        <img src="../images/" />
        <span>Sie Wollen Ein Angebot?</span>
        <span>
          Gerne besprechen wir Ihr Projekt und werden Ihnen zeitnah ein
          Angeboterstellen.
        </span>
      </div>
      <div className={classes.container4BlockBottom}>
        <span className={classes.container4BlockBottomLeft}>
          Wir vereinbaren in der selben Woche noch einen Termin zur persönlichen
          individuellen Beratung bzw. Besichtigung Ihres Objekts und erstellen
          Ihnen innerhalb weniger Tage ein ausführliches Angebot und können auf
          Wunsch gleich loslegen.
        </span>
        <div className={classes.container4BlockBottomRight}>
          <span>
            <img src="../images/UberCon22.svg" />
          </span>
          <span>
            <img src="../images/UberCon22.svg" />
          </span>
          <span>
            <img src="../images/UberCon22.svg" />
          </span>
          <span>
            <img src="../images/UberCon22.svg" />
          </span>
          <span>
            <img src="../images/UberCon22.svg" />
          </span>
          <span>
            <img src="../images/UberCon22.svg" />
          </span>
        </div>
      </div>
    </div>
  );
}
