import React, { useEffect, useRef, useState } from 'react';
import classes from './Container2.module.css';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

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

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendClick = () => {
    // Проверка на заполненность всех полей
    const allFilled = Object.values(formData).every((val) => val.trim() !== '');
    if (!allFilled) {
      alert('Bitte füllen Sie alle Felder aus.');
      return;
    }

    setModalOpen(true);
    moveRef.current = 0;
    setMouseMoves(0);
    setSubmitted(false);
  };

  const submitToBackend = async () => {
    setSubmitted(true);
    console.log('Отправленные данные:', formData);
    await new Promise((res) => setTimeout(res, 1000));
    setModalOpen(false);
    alert('Форма отправлена!');
  };

  useEffect(() => {
    const handleMouseMove = () => {
      if (!modalOpen || submitted) return;

      moveRef.current += 1;
      setMouseMoves(moveRef.current);

      if (moveRef.current >= 500 && !submitted) {
        submitToBackend();
      }
    };

    if (modalOpen) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [modalOpen, submitted]);

  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        {/* Левая часть */}
        <div className={classes.container2Left}>
          <span>Wir Freuen Uns über Ihr Interesse</span>
          {/* ... текст ... */}
        </div>

        {/* Правая часть */}
        <div className={classes.container2Right}>
          {/* ✅ Модалка-капча */}
          <Modal open={modalOpen} onClose={() => {}}>
            <div className={classes.modalOverlay}>
              <div className={classes.modalContent}>
                <button className={classes.modalClose} onClick={() => setModalOpen(false)}>
                  <CloseIcon />
                </button>

                <div className={classes.maskContainer}>
                  <svg
                    viewBox="0 0 200 200"
                    className={classes.logoSvg}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <mask id="fillMask">
                        <rect
                          x="0"
                          y="0"
                          width={`${(mouseMoves / 10) * 100}%`}
                          height="100%"
                          fill="white"
                        />
                      </mask>
                    </defs>
                    <image
                      href="/images/Vector.svg"
                      width="200"
                      height="200"
                      mask="url(#fillMask)"
                    />
                  </svg>
                </div>

                <p>Fahren Sie mit der Maus, bis die Figur voll ist ({mouseMoves}/10)</p>
              </div>
            </div>
          </Modal>

          <div className={classes.container2RightBlock}>
            <span>Erhalte Kostenlos Beratung</span>
            <input name="name" placeholder="Name*" value={formData.name} onChange={handleInput} />
            <input name="email" placeholder="Emailadresse*" value={formData.email} onChange={handleInput} />
            <input name="phone" placeholder="Telefonnummer*" value={formData.phone} onChange={handleInput} />
            <input name="service" placeholder="Gewünschte Dienstleistung*" value={formData.service} onChange={handleInput} />
            <textarea name="message" placeholder="Nachricht*" value={formData.message} onChange={handleInput} />
            <button onClick={handleSendClick}>Anfrage versenden</button>
          </div>
        </div>
      </div>
    </div>
  );
}
