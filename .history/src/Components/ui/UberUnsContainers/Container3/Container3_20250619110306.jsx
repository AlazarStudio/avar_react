import React from 'react';
import classes from './Container3.module.css';

export default function Container3() {
  return (
    <div className={classes.container3}>
      <div className={classes.container3Block}>
        <div className={classes.container3BlockTop}>
          <span>Unsere Grundwerte</span>
          <span>
            Unser Ziel ist Ihre Zufriedenheit und Sorglosigkeit. Dabei hoffen
            wirauf Ihr Vertrauen, welches wir nicht missbrauchen werden.
          </span>
        </div>
        <div className={classes.container3BlockBottom}>
          <div className={classes.container3BlockBottomEl}>
            <img src="../images/home4.svg" />
            <span>Qualität Zeichnet Uns Aus</span>
            <span>
              Wir legen großes Wert auf Qualität und möchten Ihnen dies durch
              unsere Handwerker beweisen.
            </span>
          </div>
          <div className={classes.container3BlockBottomEl}>
            <img src="../images/home5.svg" />
            <span>Schnell Und Zuverlässig</span>
            <span>
              Wir haben kein Interesse Ihr Bauprojekt in die Länge zu ziehen.
              Zeitnaher Beginn und schnelle Umsetzung ist das Ziel.
            </span>
          </div>
          <div className={classes.container3BlockBottomEl}>
            <img src="../images/uberCoin.svg" />
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
