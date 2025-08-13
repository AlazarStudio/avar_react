import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function TrockenbauPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div className={classes.container}>
      <LeftMenu />
      <div className={classes.containerRight}>
        <div className={classes.containerRightText}>
          <span>Trockenbau</span>
          <span>
            Heutzutage ist Trockenbau eine angenehme Wahl für den Ausbau im
            Innenbereich. Ob Wand oder Decke - das Team AVAR kann alles.{' '}
          </span>
          <span>
            Ein erfahrenes Team wird sich bemühen Ihr Projekt auf den Punkt zu
            bringen. Wirtschaftlich und Kompetent setzten wir Ihr Wunsch um.
            Moderne Trockenbau Experten der AVAR Gruppe bieten Ihnen eine
            Sorglos-Baugarantie rund um Ihr Projekt und stehen Ihnen für
            Rückfragen jederzeit zur Verfügung, Dafür sind wir ja da!
          </span>
        </div>
        <img src="../images/tro1.png" />
        <img src="../images/tro2.png" />
      </div>
    </div>
  );
}
