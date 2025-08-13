import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function PflasterverlegungPage() {
  const navigate = useNavigate();

     useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div className={classes.container}>
      <LeftMenu />
      <div className={classes.containerRight}>
        <div className={classes.containerRightText}>
          <span>Pflasterverlegung und Grünpflege</span>
          <span>
            Das Team AVAR ist ebenfalls spezialisiert auf Pflasterverlegung.
            Dabei beachten wir stet Ihre Wünsche und machen Ihren Hof schöner
            den je. Ob Gehwege, Terrassen,- oder Parkplatzflächen, die
            Handwerker von AVAR für jede Arbeit gut und kompetent.
          </span>
          <span>
            Schauen Sie sich unserer abgeschlossenen Projekte an und überzeugen
            Sie sich selbst von unserer Qualität und Geschicklichkeit. Das Team
            AVAR ist nicht nur Ihre ideale Wahl im Bereich Handwerk, sondern
            auch ein guter Freund mit viel Erfahrung und Bereitschaft diese mit
            Ihnen zu teilen. Vereinbaren Sie zeitnah einen kostenlosen
            Beratungstermin.
          </span>
        </div>
        <img src="../images/pfla1.png" />
        <img src="../images/pfla2.png" />
      </div>
    </div>
  );
}
