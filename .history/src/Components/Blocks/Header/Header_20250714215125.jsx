import React, { useState } from 'react';
import { useEffect, useRef } from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const isOneProjectPage = location.pathname.includes('projekte/');

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 80) {
        setVisible(false); // скроллим вниз
      } else {
        setVisible(true); // скроллим вверх
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`
    ${classes.container}
    ${isOneProjectPage ? classes.blueBackground : ''}
    ${visible ? classes.show : classes.hide}
  `}
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
              <Link to="/dienstleistungen">Dienstleistungen</Link>
            </li>
            <li>
              <Link to="/projekte">Projekte</Link>
            </li>
            <li>
              <Link to="/bewertungen">Bewertungen</Link>
            </li>
            <li>
              <Link to="/unserTeam">Unser Team</Link>
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
        <img src="../images/logoHome.png" onClick={() => navigate('/')} />
        <img
          src="../images/headerMobile.svg"
          onClick={() => setMenuOpen(true)}
        />
      </div>
      {menuOpen && (
        <div className={classes.mobileModal}>
          <div className={classes.mobileModalContent}>
            <span onClick={() => setMenuOpen(false)} className={classes.close}>
              ×
            </span>
            <ul>
              <li
                onClick={() => {
                  navigate('/');
                  setMenuOpen(false);
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  navigate('/überUns');
                  setMenuOpen(false);
                }}
              >
                Über uns
              </li>
              <li
                onClick={() => {
                  navigate('/unserTeam');
                  setMenuOpen(false);
                }}
              >
                Unser Team
              </li>
              <li
                onClick={() => {
                  navigate('/bewertungen');
                  setMenuOpen(false);
                }}
              >
                Bewertungen
              </li>
              <li
                onClick={() => {
                  navigate('/dienstleistungen');
                  setMenuOpen(false);
                }}
              >
                Dienstleistungen
              </li>
              <li
                onClick={() => {
                  navigate('/projekte');
                  setMenuOpen(false);
                }}
              >
                Projekte
              </li>
              <li
                onClick={() => {
                  navigate('/kontakt');
                  setMenuOpen(false);
                }}
              >
                Kontakt
              </li>
              <li>
                <a className={classes.w} href="tel:0431/79939875">
                  Call Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
