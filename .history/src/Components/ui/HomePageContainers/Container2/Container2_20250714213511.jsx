import React, { useEffect, useRef, useState } from 'react';
import classes from './Container2.module.css';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const BOT_TOKEN = '7815898211:AAEc2SBH3c1k0089_dDXA70zjPVQsouvPg4'; // ← сюда токен от BotFather
const CHAT_ID = '-4891726232'; // ← сюда свой chat_id

export default function Container2() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [mouseMoves, setMouseMoves] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const moveRef = useRef(0);
  const submittedRef = useRef(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendClick = () => {
    const allFilled = Object.values(formData).every((val) => val.trim() !== '');
    submittedRef.current = false;
    if (!allFilled) {
      alert('Bitte füllen Sie alle Felder aus.');
      return;
    }

    setModalOpen(true);
    moveRef.current = 0;
    setMouseMoves(0);
    setSubmitted(false);
  };

  const sendToTelegram = async () => {
    setSubmitted(true);

    const text = `
📩 Neue Anfrage:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Telefon: ${formData.phone}
🛠️ Dienstleistung: ${formData.service}
💬 Nachricht: ${formData.message}
  `.trim();

    try {
      await fetch(
        `https://api.telegram.org/bot7815898211:AAEc2SBH3c1k0089_dDXA70zjPVQsouvPg4/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: '-4891726232',
            text,
          }),
        }
      );

      setModalOpen(false);
      alert('Gesendet!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (err) {
      alert('Fehler beim Senden.');
      console.error(err);
    }
  };

  useEffect(() => {
    const handleMove = () => {
      if (!modalOpen || submittedRef.current) return;

      moveRef.current += 3;
      setMouseMoves(moveRef.current);

      if (moveRef.current >= 1500 && !submittedRef.current) {
        submittedRef.current = true;
        sendToTelegram();
      }
    };

    if (modalOpen) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('touchmove', handleMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, [modalOpen]);

  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        <div className={classes.container2Left}>
          <span>Wir Freuen Uns über Ihr Interesse</span>
          <span>
            Gerne nehmen wir uns die Zeit mit Ihnen Ihr Projekt persönlich zu
            besprechen, Ideen für die Umsetzung zu liefern und Sie positiv zu
            überzeugen.
          </span>
          <span>
            Beratung mit Niveau. Unverbindlich und kostenlos. Das Team AVAR
            freut sich Ihnen zuhören zu können und Ihre fragen zu beantworten.
          </span>
        </div>

        <div className={classes.container2Right}>
          <Modal open={modalOpen} onClose={() => {}}>
            <div className={classes.modalOverlay}>
              <div className={classes.modalContent}>
                <button
                  className={classes.modalClose}
                  onClick={() => setModalOpen(false)}
                >
                  <CloseIcon />
                </button>

                <div className={classes.maskContainer}>
                  <svg
                    viewBox="0 0 324 288"
                    className={classes.logoSvg}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <mask id="fillMask">
                        <rect
                          x="0"
                          y="0"
                          width={`${(mouseMoves / 1500) * 324}`}
                          height="288"
                          fill="white"
                        />
                      </mask>
                    </defs>

                    {/* Серый путь (фон) */}
                    <path
                      d="M254.276 132.461C252.493 148.357 249.101 158.493 244.698 169.901C244.698 169.901 282.797 192.362 288.717 221.3C293.396 244.289 266.304 262.07 219.414 242.316C170.343 221.671 137.73 186.106 129.308 145.738C102.154 147.371 93.064 156.309 93.064 156.309C93.064 156.309 115.35 235.94 207.638 277.818C297.624 318.651 392.409 229.867 254.276 132.461ZM180.145 34.2419C215.009 27.401 235.226 150.638 173.547 203.367C173.547 203.367 185.757 218.436 203.387 225.891C203.387 225.891 255.975 177.232 247.931 86.0816C239.883 -5.07898 182.024 -6.06535 158.104 4.57054C134.155 15.198 99.1954 47.8961 90.8144 104.139C105.019 99.0833 111.805 97.9468 131.131 96.6769C131.131 96.6769 142.322 41.6726 180.145 34.2419ZM39.5749 229.252C14.7667 185.372 94.1997 110.702 200.024 147.836C200.024 147.836 205.633 133.226 206.812 111.901C206.812 111.901 105.604 82.5929 38.4079 138.188C-6.93585 175.693 -12.9171 233.504 24.6631 267.403C55.1783 294.983 109.059 293.32 160.195 260.066C148.578 251.477 141.858 246.111 131.906 234.955C131.906 234.955 64.3625 273.195 39.5749 229.252Z"
                      fill="#E0E0E0"
                    />

                    {/* Оранжевый путь (накладывается по маске) */}
                    <g mask="url(#fillMask)">
                      <path
                        d="M254.276 132.461C252.493 148.357 249.101 158.493 244.698 169.901C244.698 169.901 282.797 192.362 288.717 221.3C293.396 244.289 266.304 262.07 219.414 242.316C170.343 221.671 137.73 186.106 129.308 145.738C102.154 147.371 93.064 156.309 93.064 156.309C93.064 156.309 115.35 235.94 207.638 277.818C297.624 318.651 392.409 229.867 254.276 132.461ZM180.145 34.2419C215.009 27.401 235.226 150.638 173.547 203.367C173.547 203.367 185.757 218.436 203.387 225.891C203.387 225.891 255.975 177.232 247.931 86.0816C239.883 -5.07898 182.024 -6.06535 158.104 4.57054C134.155 15.198 99.1954 47.8961 90.8144 104.139C105.019 99.0833 111.805 97.9468 131.131 96.6769C131.131 96.6769 142.322 41.6726 180.145 34.2419ZM39.5749 229.252C14.7667 185.372 94.1997 110.702 200.024 147.836C200.024 147.836 205.633 133.226 206.812 111.901C206.812 111.901 105.604 82.5929 38.4079 138.188C-6.93585 175.693 -12.9171 233.504 24.6631 267.403C55.1783 294.983 109.059 293.32 160.195 260.066C148.578 251.477 141.858 246.111 131.906 234.955C131.906 234.955 64.3625 273.195 39.5749 229.252Z"
                        fill="#E55645"
                      />
                    </g>
                  </svg>
                </div>

                <p>
                  Fahren Sie mit der Maus, bis die Figur voll ist ({mouseMoves}
                  /1500)
                </p>
              </div>
            </div>
          </Modal>

          <div className={classes.container2RightBlock}>
            <span>Erhalte Kostenlos Beratung</span>
            <div className={classes.inputBlock}>
              <input
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleInput}
              />
              <input
                name="email"
                placeholder="Emailadresse*"
                value={formData.email}
                onChange={handleInput}
              />
              <input
                name="phone"
                placeholder="Telefonnummer*"
                value={formData.phone}
                onChange={handleInput}
              />
              <input
                name="service"
                placeholder="Gewünschte Dienstleistung*"
                value={formData.service}
                onChange={handleInput}
              />
              <textarea
                name="message"
                placeholder="Nachricht*"
                value={formData.message}
                onChange={handleInput}
              />
            </div>
            <button onClick={handleSendClick}>Anfrage versenden</button>
          </div>
        </div>
      </div>
    </div>
  );
}
