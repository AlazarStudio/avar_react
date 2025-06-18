import React from 'react';
import classes from './Container2.module.css';

export default function Container2() {
  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        <img src="../images/UberCon2.png" />
        <div className={classes.container2BlockRight}>
          <span>Ein Starkes Team Mit Anspruchsvollen Zielen.</span>
          <span>
            Eine Vision, die zunächst einmal unvorstellbar erschien, aberdurch
            fließ und glaube an uns selbst heute vor der Tür liegt.Das Team AVAR
            biete Ihnen ein Spektrum von Leistungen rundum ihr Projekt und
            unterstütz Sie dabei sorglos den Tag zudurchleben, weil wir uns um
            alles kümmern.
          </span>
          <div className={classes.container2BlockRightBottom}>
              <div className={classes.container2BlockRightBottomLeft}>
            <span>
              <img src="../images/UberCon22.svg" />
              Wirtschaftlich
            </span>
            <span>
              <img src="../images/UberCon22.svg" />
              Zuverlässig
            </span>
              <div className={classes.container2BlockRightBottomRight}>
            <span>
              <img src="../images/UberCon22.svg" />
              Termintreu
            </span>
            <span>
              <img src="../images/UberCon22.svg" />
              Perfekt
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
