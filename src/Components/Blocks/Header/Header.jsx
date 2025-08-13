import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import classes from './Header.module.css';

const SERVICES = [
  { label: 'Reinigung', path: '/Reinigung' },
  { label: 'Elektroarbeiten', path: '/Elektroarbeiten' },
  { label: 'Sanitär - und Heizungsarbeiten', path: '/Sanitär' },
  { label: 'Malerarbeiten', path: '/Malerarbeiten' },
  { label: 'Trockenbau', path: '/Trockenbau' },
  { label: 'Pflasterverlegung und Grünpflege', path: '/Pflasterverlegung' },
  { label: 'Bodenbelagsarbeiten', path: '/Bodenbelagsarbeiten' },
  { label: 'Interior Design', path: '/InteriorDesign' },
  { label: 'Fliesenverlegung', path: '/Fliesenverlegung' },
];

const getHeaderThemeClass = (pathname) => {
  if (pathname.startsWith('/AGB')) return 'themeAGB';
  if (pathname.startsWith('/Datenschutz')) return 'themeAGB';
  if (pathname.startsWith('/Impressum')) return 'themeAGB';
  if (pathname.startsWith('/Reinigung')) return 'themeAGB';
  if (pathname.startsWith('/Elektroarbeiten')) return 'themeAGB';
  if (pathname.startsWith('/Sanitar')) return 'themeAGB';
  if (pathname.startsWith('/Malerarbeiten')) return 'themeAGB';
  if (pathname.startsWith('/Trockenbau')) return 'themeAGB';
  if (pathname.startsWith('/Pflasterverlegung')) return 'themeAGB';
  if (pathname.startsWith('/Bodenbelagsarbeiten')) return 'themeAGB';
  if (pathname.startsWith('/InteriorDesign')) return 'themeAGB';
  if (pathname.startsWith('/Fliesenverlegung')) return 'themeAGB';

  // дефолт
  return 'themeDefault';
};

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [scrollingUp, setScrollingUp] = useState(true);

  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const lastScrollY = useRef(0);

  const isOneProjectPage = location.pathname.includes('projekte/');

  // скрывать/показывать хедер по скроллу
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setAtTop(currentScroll === 0);
      if (currentScroll > lastScrollY.current) {
        setVisible(false);
        setScrollingUp(false);
      } else {
        setVisible(true);
        setScrollingUp(true);
      }
      lastScrollY.current = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // закрывать дропдаун при клике вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      const inDesktop =
        dropdownRef.current && dropdownRef.current.contains(e.target);
      const inMobile =
        mobileDropdownRef.current &&
        mobileDropdownRef.current.contains(e.target);

      if (!inDesktop && !inMobile) setServicesOpen(false);
    };

    if (servicesOpen) document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [servicesOpen]);

  // закрывать меню услуг при смене маршрута
  useEffect(() => setServicesOpen(false), [location.pathname]);

  return (
    <div
      className={`
      ${classes.container}
      ${classes[getHeaderThemeClass(location.pathname)]}
      ${isOneProjectPage ? classes.blueBackground : ''}
      ${visible ? classes.show : classes.hide}
      ${
        atTop
          ? classes.transparent
          : scrollingUp
          ? classes.solid
          : classes.transparent
      }
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

            {/* Dienstleistungen с выпадающим меню */}
            <li className={classes.hasDropdown} ref={dropdownRef}>
              <button
                type="button"
                className={classes.dropdownToggle}
                onClick={() => setServicesOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Dienstleistungen
                <span className={classes.chevron} aria-hidden>
                  ▾
                </span>
              </button>

              {servicesOpen && (
                <div className={classes.dropdown}>
                  <div className={classes.dropdownTitle}>Dienstleistungen</div>
                  <ul className={classes.dropdownList}>
                    {SERVICES.map(({ label, path }) => (
                      <li key={path}>
                        <button
                          type="button"
                          className={classes.dropdownItemBtn}
                          onClick={() => {
                            navigate(path);
                            setServicesOpen(false);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              navigate(path);
                              setServicesOpen(false);
                            }
                          }}
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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

      {/* Mobile */}
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

              {/* Аккордеон в мобилке */}
              <li className={classes.mobileAccordion} ref={mobileDropdownRef}>
                <button
                  type="button"
                  className={classes.dropdownToggleMobile}
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                >
                  Dienstleistungen{' '}
                  <span className={classes.chevron} aria-hidden>
                    ▾
                  </span>
                </button>

                {servicesOpen && (
                  <ul
                    className={
                      classes.dropdownListMobile /* тот же стиль, что на ПК */
                    }
                    onClick={(e) => e.stopPropagation()}
                  >
                    {SERVICES.map(({ label, path }) => (
                      <li key={path}>
                        <button
                          type="button"
                          className={classes.dropdownItemBtn}
                          onClick={() => {
                            navigate(path);
                            setMenuOpen(false);
                            setServicesOpen(false);
                          }}
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
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
