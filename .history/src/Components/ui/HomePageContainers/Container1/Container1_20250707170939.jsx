import React from 'react';
import classes from './Container1.module.css';

export default function Container1({ onScrollClick }) {
  return (
    <div>
      <div className={classes.container1}>
        <div className={classes.content}>
          <div className={classes.box}>
            <div className={classes.block}>
              <span>
                Wir schaffen Räume, die begeistern - sauber und solide
              </span>
              <span>
                Von der ersten Baustufe bis zur letzten Politur stehen wir für
                Qualität, Zuverlässigkeit und Sauberkeit. Ob Bauleitung oder
                Gebäudereinigung - wir begleiten Ihr Projekt mit Erfahrung,
                Präzision und einem hohen Anspruch an Perfektion. Vertrauen Sie
                auf einen Partner, der Handwerk und Sauberkeit vereint.
              </span>
              <div className={classes.buttons}>
                <button onClick={onScrollClick}>
                  Kostenlose Beratung gewünscht?
                </button>
                {/* <button>Unsere Dienstleistungen</button> */}
              </div>
            </div>
          </div>
          <div className={classes.blockBottom}>
            <span>
              <img src="../images/coolicon (5).svg" />
              Aalborgring 4, 24109 Kiel
            </span>
            <div className={classes.contact}>
              <img src="../images/coolicon (1).svg" />
              <img src="../images/coolicon (2).svg" />
              <img src="../images/coolicon (3).svg" />
              <img src="../images/coolicon (4).svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
