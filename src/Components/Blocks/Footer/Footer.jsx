import React from 'react';
import classes from './Footer.module.css';
import { useNavigate } from 'react-router-dom';

function Footer({ children, ...props }) {
  const navigate = useNavigate();

  const handleScrollClick = () => {
    navigate('/#beratung');
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerBlock1}>
          <div className={classes.containerBlockTop}>
            <div className={classes.containerBlockTopLeft}>
              <span>Kostenlose Beratung Sichern</span>
              <span>
                Sichern Sie sich jetzt kostenlos und unverbindlich eine Beratung
                vonAVAR und lassen Sie sich überzeugen von unseren Visionen und
                derenUmsetzungsideen. Wir schaffen Perfektion!
              </span>
              <span>
                <button onClick={handleScrollClick}>
                  Kostenlose Beratung Sichern
                </button>
                <a href="tel:043179939875">
                  <img src="../images/footerCall.svg" /> Rufen Sie uns an
                </a>
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
