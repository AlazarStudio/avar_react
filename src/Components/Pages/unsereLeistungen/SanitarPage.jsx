import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function SanitarPage() {
  const navigate = useNavigate();

     useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div className={classes.container}>
      <LeftMenu />
      <div className={classes.containerRight}>
        <div className={classes.containerRightText}>
          <span>Sanitär - und Heizungsarbeiten</span>
          <span></span>
          <span></span>
        </div>
        <img src="../images/sanitar1.png" />
        <img src="../images/sanitar2.png" />
      </div>
    </div>
  );
}
