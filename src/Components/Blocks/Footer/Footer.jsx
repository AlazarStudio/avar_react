import React, { useState, useEffect, useRef } from 'react';
import classes from './Footer.module.css';
import { useNavigate } from 'react-router-dom';

function Footer({ children, ...props }) {
  const navigate = useNavigate();

  const handleScrollClick = () => {
    navigate('/#beratung');
  };

  // --- локальная логика для кнопки-выбора номера
  const [callOpen, setCallOpen] = useState(false);
  const callRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (callRef.current && !callRef.current.contains(e.target)) {
        setCallOpen(false);
      }
    };
    const onEsc = (e) => {
      if (e.key === 'Escape') setCallOpen(false);
    };
    document.addEventListener('click', onClickOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('click', onClickOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerBlock1}>
          <div className={classes.containerBlockTop}>
            <div className={classes.containerBlockTopLeft}>
              <span>Kostenlose Beratung Sichern</span>
              <span>
                Sichern Sie sich jetzt kostenlos und unverbindlich eine Beratung
                von AVAR und lassen Sie sich überzeugen von unseren Visionen und
                derenUmsetzungsideen. Wir schaffen Perfektion!
              </span>
              <span style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <button onClick={handleScrollClick}>
                  Kostenlose Beratung Sichern
                </button>

                {/* ОДНА КНОПКА → ВЫБОР НОМЕРА (вариант №2) */}
                <div
                  ref={callRef}
                  style={{ position: 'relative', display: 'inline-block' }}
                >
                  <button
                    type="button"
                    onClick={() => setCallOpen((v) => !v)}
                    aria-expanded={callOpen}
                    aria-haspopup="menu"
                    className={
                      classes.callButton /* при желании добавь класс в css */
                    }
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      background: 'inherit',
                      color: 'fff',
                    }}
                  >
                    <img src="../images/footerCall.svg" alt="Call" />
                    Rufen Sie uns an
                  </button>

                  {callOpen && (
                    <div
                      role="menu"
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        marginTop: 6,
                        width: '100%',
                        // minWidth: 210,
                        background: '#fff',
                        border: '1px solid rgba(0,0,0,0.1)',
                        borderRadius: 8,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                        padding: 8,
                        zIndex: 20,
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        role="menuitem"
                        href="tel:043179939875"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '8px 10px',
                          borderRadius: 6,
                          textDecoration: 'none',
                          color: 'black',
                        }}
                        onClick={() => setCallOpen(false)}
                      >
                        0431 / 79939875
                      </a>
                      <a
                        role="menuitem"
                        href="tel:01601229999"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '8px 10px',
                          borderRadius: 6,
                          textDecoration: 'none',
                          color: 'black',
                        }}
                        onClick={() => setCallOpen(false)}
                      >
                        0160 / 1229999
                      </a>
                    </div>
                  )}
                </div>
              </span>
            </div>
            <div className={classes.containerBlockTopRight}>
              <img src="../images/footerLogo.svg" />
            </div>
          </div>
        </div>

        <div className={classes.containerBlock2}>
          <div className={classes.containerBlockBottom}>
            <div className={classes.containerBlockBottomBlockLeft}>
              <img
                src="../images/footerLogo2.svg"
                className={classes.logo}
                onClick={() => navigate('/')}
              />
              <span>
                Wir sind Ihr starker Partner rund um Ihr Bauprojekt und des
                Innendesigns,unterstützen Sie bei der Umsetzung Ihrer Ideen und
                machen Ihr Wunsch wahr.
              </span>
              <span>
                <a
                  href="https://www.instagram.com/avar_kiel?igsh=MWFkczFmanA1MDJ1Ng=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../images/footerI.svg" alt="Instagram" />
                </a>
                <a
                  href="https://www.tiktok.com/@avar_kiel?_t=ZN-8yfsSIXdfWQ&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../images/footerTik.svg" alt="TikTok" />
                </a>
                <a
                  href="https://www.facebook.com/share/199RyRPNRF/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../images/footerF.svg" alt="Facebook" />
                </a>
              </span>
            </div>

            <div className={classes.containerBlockBottomBlockAll}>
              <span>Kontakt Informationen</span>
              <span>Aalborgring 4, 24109 Kiel</span>
              <span>0431/79939875</span>
              <span>0160/1229999</span>
              <span>info@avar-kiel.de</span>
            </div>

            <div className={classes.containerBlockBottomBlockAll}>
              <span>Schnelle Links</span>
              <span onClick={() => navigate('/Datenschutz')}>Datenschutz</span>
              <span onClick={() => navigate('/Impressum')}>Impressum</span>
              <span onClick={() => navigate('/AGB')}>AGB</span>
            </div>

            <div className={classes.containerBlockBottomBlockAll}>
              <span>Unsere Leistungen</span>
              <span onClick={() => navigate('/Reinigung')}>Reinigung</span>
              <span onClick={() => navigate('/Elektroarbeiten')}>
                Elektroarbeiten{' '}
              </span>
              <span onClick={() => navigate('/Sanitär')}>
                Sanitär - und Heizungsarbeiten
              </span>
              <span onClick={() => navigate('/Malerarbeiten')}>
                Malerarbeiten{' '}
              </span>
              <span onClick={() => navigate('/Trockenbau')}>Trockenbau </span>
              <span onClick={() => navigate('/Pflasterverlegung')}>
                Pflasterverlegung und Grünpflege
              </span>
              <span onClick={() => navigate('/Bodenbelagsarbeiten')}>
                Bodenbelagsarbeiten
              </span>
              <span onClick={() => navigate('/InteriorDesign')}>
                Interior Design
              </span>
              <span onClick={() => navigate('/Fliesenverlegung')}>
                Fliesenverlegung
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
