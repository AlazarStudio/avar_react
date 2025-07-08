import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import classes from './Header.module.css';

function Header({ children, ...props }) {
  const navigate = useNavigate();
  const location = useLocation(); // Получаем текущий путь

  // Условно применяем класс для синего фона на странице OneProjektPage
  const isOneProjectPage = location.pathname.includes('projekte/');

  return (
    <div
      className={`${classes.container} ${
        isOneProjectPage ? classes.blueBackground : ''
      }`}
    >
      <div className={classes.header}>
        <div className={classes.headerLeft}>
          <img src="../images/logoHome.png" onClick={() => navigate('/')} />
        </div>
        <div className={classes.headerRight}>
          <ul className={classes.navigate}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/überUns">Über uns</Link>
            </li>
            <li>
              <Link to="/unserTeam">Unser Team</Link>
            </li>
            <li>
              <Link to="/bewertungen">Bewertungen</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projekte">Projekte</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
            <li>
              <a className={classes.w} href="tel:0431/79939875">
                Call Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.headerMobile}>
        <div className={classes.headerLeft}>
          <img src="../images/logoHome.png" onClick={() => navigate('/')} />
        </div>
        <div className={classes.headerRight}>
          <img src="../images/logoHome.png" onClick={() => navigate('/')} />
        </div>
      </div>
    </div>
  );
}

export default Header;
