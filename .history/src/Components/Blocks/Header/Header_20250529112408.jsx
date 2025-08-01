import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

function Header({ children, ...props }) {
    const navigate = use
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.headerLeft}>
            <img src="../images/logoHome.png" />
          </div>
          <div className={classes.headerRight}>
            <ul className={classes.navigate}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/uberUns">Über uns</Link>
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
                <li>
                  <Link to="/kontakt">Call</Link>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
