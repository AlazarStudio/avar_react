import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function InteriorPage() {
  const navigate = useNavigate();

     useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div className={classes.container}>
      <LeftMenu />
      <div className={classes.containerRight}>
        <div className={classes.containerRightText}>
          <span>Interior Design</span>
          <span>
            Um Ihr zuhause zu Perfektionieren gestalten wir es zunächst und
            Beraten Sie gern. Überzeugen Sie sich selbst.{' '}
          </span>
          <span>
            Ein perfektes zuhause beginnt mit der Idee. Wir von Team AVAR helfen
            Ihnen gerne Ihr Projekt zu gestalten und Träume wahr werden zu
            lassen. Ein Partnerunternehmen bestehend aus Architekten und
            Interieur Designern kümmert sich um die Gestaltung Ihrer Immobilie
            in 3D Ansicht.{' '}
          </span>
        </div>
        <img src="../images/int1.png" />
        <img src="../images/int2.png" />
      </div>
    </div>
  );
}
