import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function BodenbelagsarbeitenPage() {
  const navigate = useNavigate();

     useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className={classes.container}>
      <LeftMenu />
      <div className={classes.containerRight}>
        <div className={classes.containerRightText}>
          <span>Bodenbelagsarbeiten</span>
          <span>
            Sie wünschen sich neuen Bodenbelag? Klar! Das Team AVAR ist ihre
            perfekte Wahl bei der Umsetzung Ihrer Idee.
          </span>
          <span>
            Wir wollen Ihnen ein angenehmes Kribbeln in den Beinen liefern.
            Deswegen ist das Team AVAR eine ideale Wahl für Ihre Bodenverlegung
            vom Fachmann. Eine umfangreiche Wahl an Bodenbelägen und erfahrenen
            Bodenlegern wird sie positiv überzeugen.
          </span>
        </div>
        <img src="../images/boden1.png" />
        <img src="../images/boden2.png" />
      </div>
    </div>
  );
}
