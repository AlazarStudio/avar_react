import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function ReinigungPage() {
  const navigate = useNavigate();

     useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div className={classes.container}>
      <LeftMenu />
      <div className={classes.containerRight}>
        <div className={classes.containerRightText}>
          <span>Unterhalts- und Fensterreinigung</span>
          <span>
            Die Reinigungsbranche ist eine äußerst wichtige und sehr
            anspruchsvolle Branche. Das Team AVAR bewies sich als ein
            kompetenter Partner für unserer Kunden.{' '}
          </span>
          <span>
            Klein angefangen, aber durch Qualität und Niveau zu einem führenden
            Unternehmen in Kieler Raum geworden. Das Team AVAR bewies, dass
            Qualität sich auszeichnet berichtet stolz, dass wir als Unternehmen
            ständig wachsen und neue Kunden gewinnen, überzeugen und
            faszinieren. Schauen Sie sich unserer Reverenzen an!
          </span>
        </div>
        <img src="../images/rein1.png" />
        <img src="../images/rein2.png" />
      </div>
    </div>
  );
}
