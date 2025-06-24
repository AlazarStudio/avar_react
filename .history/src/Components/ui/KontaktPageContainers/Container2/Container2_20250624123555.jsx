import React from 'react';
import classes from './Container2.module.css';

export default function Container2() {
  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        <div className={classes.container2BlockLeft}>
          <span>Wir Freuen Uns uber Ihr Interesse</span>
          <span>
            Gerne nehmen wir uns die Zeit mit Ihnen Ihr Bauvorhaben persönlich
            zu besprechen, Ideen für die Umsetzung zu liefern und Sie positiv zu
            überzeugen.
          </span>
          <span>
            Beratung mit Niveau. Unverbindlich und Kostenlos. Das Team AVAR
            freut sich Ihnen zuhören zu können und Ihre fragen zu beantworten.
            Eine passende Lösung für Ihr Projekt zu finden ist für uns ein muss.
            Mit mehr als 25 Jahre Branchenerfahrung, einem Starken und
            Erfahrenen Team, Kreativität und unser engamore werden wir Sie
            überzeugen. Zögern Sie nicht.
          </span>
          <div className={classes.container2BlockLeftBottom}>
            <div className={classes.container2BlockLeftBottomEl}>
              <span>
                <img src="../images/kontakt3.svg" />
              </span>
              <div className={classes.container2BlockLeftBottomElRight}>
                <span>Address</span>
                <span>Aalborgring 4, 24109 Kie</span>
              </div>
            </div>
            <div className={classes.container2BlockLeftBottomEl}>
              <span>
                <img src="../images/kontakt4.svg" />
              </span>
              <div className={classes.container2BlockLeftBottomElRight}>
                <span>Call Us</span>
                <span>0178 5029999</span>
              </div>
            </div>
            <div className={classes.container2BlockLeftBottomEl}>
              <span>
                <img src="../images/kontakt2.svg" />
              </span>
              <div className={classes.container2BlockLeftBottomElRight}>
                <span>Email Us</span>
                <span>info@avar-kiel.de</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.container2BlockRight}>
          <div className={classes.container2BlockRightForm}>
            <span>Erhalte Kostenlos Beratung</span>
            <div className={classes.container2BlockRightFormInput}>
              <input placeholder="Name*" />
              <input placeholder="Eamiladresse*" />
              <input placeholder="Telefonnummer*" />
              <input placeholder="Gewunschte Dienstleistung*" />
              <textarea
                name="message"
                placeholder="Nachricht*"
  
              />
              <span>capcha</span>
            </div>
            <button>Anfrage versenden</button>
          </div>
        </div>
      </div>
    </div>
  );
}
