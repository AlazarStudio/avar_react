import React from 'react';
import classes from './Container3.module.css';

export default function Container3() {
  return (
    <div className={classes.container3}>
      <div className={classes.container3}>
        <div className={classes.container3Top}>
          <span>Unsere Grundwerte</span>
          <span>
            Unser Ziel ist Ihre Zufriedenheit und Sorglosigkeit. Dabei hoffen
            wirauf Ihr Vertrauen, welches wir nicht missbrauchen werden.
          </span>
        </div>
        <div className={classes.container3Bottom}>
          <div className={classes.container3BottomEl}>
            <img src="../images/" />
            <span>Qualität Zeichnet Uns Aus</span>
            <span>
              Wir legen großes Wert auf Qualität und möchten Ihnen dies durch
              unsere Handwerker beweisen.
            </span>
          </div>
          <div className={classes.container3BottomEl}>
            <img src="../images/" />
            <span>Schnell Und Zuverlässig</span>
            <span>
              Wir haben kein Interesse Ihr Bauprojekt in die Länge zu ziehen.
              Zeitnaher Beginn und schnelle Umsetzung ist das Ziel.
            </span>
          </div>
          <div className={classes.container3BottomEl}>
            <img src="../images/" />
            <span>Preis Leistungsverhältnis</span>
            <span>
              Wir sind nicht verfressen und möchten Sie nicht ausrauben. Die
              Sanierung wird Ihrem Budget angepasst.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
