import React, { useEffect, useRef, useState } from 'react';
import classes from './HomePage.module.css';

function HomePage({ children, ...props }) {
  const canvasRef = useRef(null);
  const [erasing, setErasing] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [showCaptchaModal, setShowCaptchaModal] = useState(false);
  const [canvasCleared, setCanvasCleared] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(100, 100, 100, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [showCaptchaModal]);

  const startErasing = () => setErasing(true);
  const stopErasing = () => setErasing(false);

  const erase = (e) => {
    if (!erasing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    checkCleared();
  };

  const checkCleared = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let clearedPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) clearedPixels++;
    }

    const percent = (clearedPixels / (canvas.width * canvas.height)) * 100;
    if (percent > 90 && !canvasCleared) {
      setCanvasCleared(true);
      setShowCaptchaModal(false);
      submitForm();
    }
  };

  const submitForm = async () => {
    try {
      const response = await fetch('/api/send-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Anfrage erfolgreich versendet!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        setCanvasCleared(false);
      } else {
        alert('Fehler beim Senden der Anfrage.');
      }
    } catch (err) {
      console.error(err);
      alert('Fehler beim Senden.');
    }
  };

  return (
    <>
      <div className={classes.contaier}>
        {/*Container1*/}
        <div className={classes.container1}>
          <div className={classes.content}>
            <div className={classes.box}>
              <div className={classes.block}>
                <span>Ein Team mit VIP Klasse</span>
                <span>
                  Unser Standard ist ein VIP Handwerk für andere. Ob Neu-
                  oderAltbau, ob Gewerbegebiet oder Ihr Privatzuhause, das
                  Teamvon AVAR bietet Ihnen nicht nur Qualität zu einem
                  angemessenPreis, sondern zeigt Ihnen eine neue Welt des
                  Handwerks.
                </span>
                <div className={classes.buttons}>
                  <button>Kostenlose Beratung gewünscht?</button>
                  <button>Unsere Dienstleistungen</button>
                </div>
              </div>
            </div>
            <div className={classes.blockBottom}>
              <span>
                {' '}
                <img src="../images/coolicon (5).svg" />
                Aalborgring 4, 24109 Kiel
              </span>
              <div className={classes.contact}>
                <img src="../images/coolicon (1).svg" />
                <img src="../images/coolicon (2).svg" />
                <img src="../images/coolicon (3).svg" />
                <img src="../images/coolicon (4).svg" />
              </div>
            </div>
          </div>
        </div>
        {/*Container2*/}
        <div className={classes.container2}>
          <div className={classes.container2Block}>
            <div className={classes.container2Left}>
              <span>Wir Freuen Uns uber Ihr Interesse</span>
              <span>
                Gerne nehmen wir uns die Zeit mit Ihnen Ihr Bauvorhaben
                persönlich zubesprechen, Ideen für die Umsetzung zu liefern und
                Sie positiv zuüberzeugen.
              </span>
              <span>
                Beratung mit Niveau. Unverbindlich und Kostenlos. Das Team AVAR
                freut sichIhnen zuhören zu können und Ihre fragen zu
                beantworten. Eine passendeLösung für Ihr Projekt zu finden ist
                für uns ein muss. Mit mehr als 25 JahreBranchenerfahrung, einem
                Starken und Erfahrenen Team, Kreativität undunser engamore
                werden wir Sie überzeugen. Zögern Sie nicht.
              </span>
            </div>
            <div className={classes.container2Right}>
              <div className={classes.container2RightBlock}>
                <span>Erhalte Kostenlos Beratung</span>
                <input
                  placeholder="Name*"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  placeholder="Eamiladresse*"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  placeholder="Telefonnummer*"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <input
                  placeholder="Gewunschte Dienstleistung*"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                />
                <textarea
                  placeholder="Nachricht*"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button
                  onClick={() => {
                    const filled = Object.values(formData).every((v) => v.trim() !== '');
                    if (!filled) return alert('Bitte alle Felder ausfüllen');
                    setShowCaptchaModal(true);
                  }}
                >
                  Anfrage versenden
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*Container3*/}
        {/* ... остальная часть содержимого страницы ... */}
        {showCaptchaModal && (
          <div className={classes.modalOverlay}>
            <div className={classes.modalContent}>
              <h3>Bitte überstreichen Sie das Logo 20 Mal</h3>
              <canvas
                ref={canvasRef}
                width={200}
                height={200}
                className={classes.captchaCanvas}
                onMouseDown={startErasing}
                onMouseMove={erase}
                onMouseUp={stopErasing}
                onMouseLeave={stopErasing}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
