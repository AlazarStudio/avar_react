import React from 'react';
import classes from './Container4.module.css';

export default function Container4() {
  return (
    <div>
      <div className={classes.container4}>
        <div className={classes.container4Top}>
          <span>Warum Uns Wählen?</span>
          <span>
            «Wir schaffen Perfektion» ist kein Werbespruch, sondern unser
            Niveau. Wir sind erst dann zufrieden, wenn Sie es sind. Ihre Wünsche
            haben für uns höchste Priorität. Über 25 Jahre Erfahrung im
            Baugewerbe zeichnet sich positiv aus.
          </span>
        </div>

        <div className={classes.container4Bottom}>
          {/* 1 */}
          <div className={classes.container4BottomEl}>
            <div className={classes.cardInner}>
              <div className={classes.cardFront}>
                <img src="../images/home1.svg" alt="" />
                <span>Wir Schaffen Perfektion</span>
              </div>
              <div className={classes.cardBack}>
                <span>
                  Die Perfektion im Detail zeichnet uns aus. Unser Anspruch ist
                  es, Ergebnisse zu schaffen, mit denen Sie sich rundum
                  wohlfühlen.
                </span>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className={classes.container4BottomEl}>
            <div className={classes.cardInner}>
              <div className={classes.cardFront}>
                <img src="../images/home2.svg" alt="" />
                <span>Erfahrene Mitarbeiter</span>
              </div>
              <div className={classes.cardBack}>
                <span>
                  Unsere Fachkräfte bringen Wissen, Können und Leidenschaft mit.
                  Mit Erfahrung und Präzision setzen wir Ihr Projekt zuverlässig
                  um.
                </span>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className={classes.container4BottomEl}>
            <div className={classes.cardInner}>
              <div className={classes.cardFront}>
                <img src="../images/home3.svg" alt="" />
                <span>Neuste Techniken</span>
              </div>
              <div className={classes.cardBack}>
                <span>
                  Wir arbeiten mit modernen Werkzeugen und innovativen Methoden.
                  So garantieren wir höchste Qualität und effiziente Ergebnisse.
                </span>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className={classes.container4BottomEl}>
            <div className={classes.cardInner}>
              <div className={classes.cardFront}>
                <img src="../images/home4.svg" alt="" />
                <span>Über 25 Jahre Erfahrung</span>
              </div>
              <div className={classes.cardBack}>
                <span>
                  Langjährige Praxis und bewährtes Know-how sind die Basis
                  unseres Erfolges. Vertrauen Sie auf Erfahrung, die überzeugt.
                </span>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className={classes.container4BottomEl}>
            <div className={classes.cardInner}>
              <div className={classes.cardFront}>
                <img src="../images/home5.svg" alt="" />
                <span>Qualität und Schnelligkeit zugleich</span>
              </div>
              <div className={classes.cardBack}>
                <span>
                  Bei uns schließen sich Qualität und Tempo nicht aus. Wir
                  liefern saubere Arbeit – schnell, zuverlässig und präzise.
                </span>
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className={classes.container4BottomEl}>
            <div className={classes.cardInner}>
              <div className={classes.cardFront}>
                <img src="../images/home6.svg" alt="" />
                <span>Fristgerechte Fertigstellung</span>
              </div>
              <div className={classes.cardBack}>
                <span>
                  Termintreue ist für uns selbstverständlich. Wir halten unsere
                  Zusagen ein und bringen Ihr Projekt pünktlich ans Ziel.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.contaier4Img}>
          <img
            src="../images/homeor (1).svg"
            className={classes.imgOr}
            alt=""
          />
          <img
            src="../images/homeor (2).svg"
            className={classes.imgOr}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
