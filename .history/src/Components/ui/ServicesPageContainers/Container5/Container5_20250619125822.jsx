import React from 'react';
import classes from './Container5.module.css';

export default function Container5() {
  return (
    <div className={classes.container5}>
      <div className={classes.container5Block}>
        <span>Arbeitsprozess:</span>
        <div className={classes.container5BlockEl}>
          <span>
            01. <span></span>
          </span>
          <span>Beratung</span>
          <span>
            Wir hören Ihnen zu und gehen auf Ihre Wünsche ein. Bei Bedarf
            erstellen wir Ihnen ein Innendesign durch unser Team.
          </span>
        </div>
        <div className={classes.container5BlockEl}>
          <span>
            02. <span></span>
          </span>
          <span>Termin FUr Baustart</span>
          <span>
            Wir vereinbaren ein Termin für den Baustart Ihres Objekt. Vorab
            klären wir alle Kleinigkeiten wie Schlüsselübergabe und ähnliches.
          </span>
        </div>
        <div className={classes.container5BlockEl}>
          <span>
            03. <span></span>
          </span>
          <span>Umsetzung</span>
          <span>
            Wir erzeugen Lärm und Stämmen alles ab, um dann ein zuhause
            aufzubauen, welches Ihnen das Gefühlt bieten soll, als wären sie im
            Film.
          </span>
        </div>
        <div className={classes.container5BlockEl}>
          <span>
            04. <span></span>
          </span>
          <span>Fertigstellung</span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
