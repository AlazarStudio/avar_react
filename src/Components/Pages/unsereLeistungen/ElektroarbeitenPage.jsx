import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function ElektroarbeitenPage() {
  const navigate = useNavigate();

     useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div className={classes.container}>
      <LeftMenu />
      <div className={classes.containerRight}>
        <div className={classes.containerRightText}>
          <span>Elektroarbeiten</span>
          <span></span>
          <span></span>
        </div>
        <img src="../images/elec1.png" />
        <img src="../images/elec2.png" />
      </div>
    </div>
  );
}
