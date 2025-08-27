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

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // выбор номера (как в футере)
  const [callOpen, setCallOpen] = useState(false); // desktop
  const [callOpenMobile, setCallOpenMobile] = useState(false); // mobile
  const callRef = useRef(null);
  const callMobileRef = useRef(null);

  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  // клик вне и Esc — закрыть
  useEffect(() => {
    const onClickOutside = (e) => {
      if (callRef.current && !callRef.current.contains(e.target))
        setCallOpen(false);
      if (callMobileRef.current && !callMobileRef.current.contains(e.target))
        setCallOpenMobile(false);
      if (
        servicesOpen &&
        !dropdownRef.current?.contains(e.target) &&
        !mobileDropdownRef.current?.contains(e.target)
      ) {
        setServicesOpen(false);
      }
    };
    const onEsc = (e) => {
      if (e.key === 'Escape') {
        setCallOpen(false);
        setCallOpenMobile(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('click', onClickOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, [servicesOpen]);

  // закрывать меню услуг при смене маршрута
  useEffect(() => setServicesOpen(false), [location.pathname]);

  return (
    <div className={classes.container}>
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

            {/* Dienstleistungen (desktop) */}
            <li className={classes.hasDropdown} ref={dropdownRef}>
              <button
                type="button"
                className={classes.dropdownToggle}
                onClick={() => setServicesOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Dienstleistungen{' '}
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

            {/* ОДНА КНОПКА → выбор номера (desktop), стили как в футере */}
            <li ref={callRef} className={classes.callWrapper}>
              <button
                type="button"
                onClick={() => setCallOpen((v) => !v)}
                aria-expanded={callOpen}
                aria-haspopup="menu"
                className={`${classes.w} ${classes.callBtn}`}
              >
                {/* <img src="../images/footerCall.svg" alt="" /> */}
                Rufen Sie uns an
              </button>

              {callOpen && (
                <div
                  role="menu"
                  className={classes.callMenu}
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    role="menuitem"
                    href="tel:+4943179939875"
                    className={classes.callItem}
                    onClick={() => setCallOpen(false)}
                  >
                    0431 / 79939875
                  </a>
                  <a
                    role="menuitem"
                    href="tel:+491601229999"
                    className={classes.callItem}
                    onClick={() => setCallOpen(false)}
                  >
                    0160 / 1229999
                  </a>
                </div>
              )}
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

              {/* Dienstleistungen (mobile) */}
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
                    className={classes.dropdownListMobile}
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

              {/* «как в футере» — выбор номера (mobile) */}
              <li
                className={`${classes.mobileAccordion} ${classes.callWrapper}`}
                ref={callMobileRef}
              >
                <button
                  type="button"
                  className={`${classes.dropdownToggleMobile} ${classes.callBtnMobile}`}
                  onClick={() => setCallOpenMobile((v) => !v)}
                  aria-expanded={callOpenMobile}
                >
                  {/* <img src="../images/footerCall.svg" alt="" /> */}
                  Rufen Sie uns an
                </button>

                {callOpenMobile && (
                  <ul
                    className={` ${classes.callMenuMobile}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <li>
                      <a
                        href="tel:+4943179939875"
                        className={classes.callItem}
                        onClick={() => {
                          setCallOpenMobile(false);
                          setMenuOpen(false);
                        }}
                      >
                        0431 / 79939875
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+491601229999"
                        className={classes.callItem}
                        onClick={() => {
                          setCallOpenMobile(false);
                          setMenuOpen(false);
                        }}
                      >
                        0160 / 1229999
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
