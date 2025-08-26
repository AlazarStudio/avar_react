import React, { useState, useRef, useEffect } from 'react';
import classes from './Container1.module.css';

export default function Container1({ onScrollClick }) {
  const [callOpen, setCallOpen] = useState(false);
  const callRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (callRef.current && !callRef.current.contains(e.target)) {
        setCallOpen(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  return (
    <div>
      <div className={classes.container1}>
        <div className={classes.content}>
          <div className={classes.box}>
            <div className={classes.block}>
              <span>
                Wir schaffen Räume, die begeistern - sauber und solide
              </span>
              <span>
                Von der ersten Baustufe bis zur letzten Politur stehen wir für
                Qualität, Zuverlässigkeit und Sauberkeit. Ob Bauleitung oder
                Gebäudereinigung - wir begleiten Ihr Projekt mit Erfahrung,
                Präzision und einem hohen Anspruch an Perfektion. Vertrauen Sie
                auf einen Partner, der Handwerk und Sauberkeit vereint.
              </span>
              <div className={classes.buttons}>
                <button onClick={onScrollClick}>
                  Kostenlose Beratung gewünscht?
                </button>
              </div>
            </div>
          </div>

          <div className={classes.blockBottom}>
            <span>
              <a
                href="https://www.google.com/maps?q=Aalborgring+4,+24109+Kiel"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <img src="../images/coolicon (5).svg" alt="map icon" />
                Aalborgring 4, 24109 Kiel
              </a>
            </span>

            {/* --- телефоны с выбором как в Footer --- */}
            <span ref={callRef} style={{ position: 'relative' }}>
              <span
                onClick={() => setCallOpen((v) => !v)}
                // className={classes.callButton}
              >
                <img src="../images/footerCall.svg" alt="Call" />
                Rufen sie uns an
              </span>

              {callOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    marginTop: 6,
                    minWidth: 180,
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
                    href="tel:043179939875"
                    style={{
                      display: 'block',
                      padding: '6px 10px',
                      textDecoration: 'none',
                      color: '#000',
                    }}
                    onClick={() => setCallOpen(false)}
                  >
                    0431 / 79939875
                  </a>
                  <a
                    href="tel:01601229999"
                    style={{
                      display: 'block',
                      padding: '6px 10px',
                      textDecoration: 'none',
                      color: '#000',
                    }}
                    onClick={() => setCallOpen(false)}
                  >
                    0160 / 1229999
                  </a>
                </div>
              )}
            </span>
            <span>
              <span onClick={onScrollClick}>
                <img src="../images/freecodeformat.svg" alt="map icon" />
                Schreiben sie uns eine Email
              </span>
            </span>
            <div className={classes.contact}>
              <a
                href="https://www.instagram.com/avar_kiel?igsh=MWFkczFmanA1MDJ1Ng=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../images/coolicon (4).svg" alt="Instagram" />
              </a>
              <a
                href="https://www.tiktok.com/@avar_kiel?_t=ZN-8yfsSIXdfWQ&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../images/tikTokAvar.svg" alt="TikTok" />
              </a>
              <a
                href="https://www.facebook.com/share/199RyRPNRF/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../images/coolicon (1).svg" alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
