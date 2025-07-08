import React, { useEffect, useRef, useState } from 'react';
import classes from './Container2.module.css';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import serverConfig from '../../../../serverConfig';
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
  const submittedRef = useRef(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendClick = () => {
    // Проверка на заполненность всех полей
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

  const submitToBackend = async () => {
    setSubmitted(true);
    try {
      await axios.post(`${serverConfig}/beratungs`, {
        name: formData.name,
        email: formData.email,
        nachricht: formData.message,
        service: formData.service,
        phoneNumber: formData.phone,
      });

      setModalOpen(false);
      alert('Daten erfolgreich gesendet!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (err) {
      alert('Fehler beim Senden. Bitte versuchen Sie es erneut.');
      console.error(err);
    }
  };
  useEffect(() => {
    const handleMove = () => {
      if (!modalOpen || submittedRef.current) return;

      moveRef.current += 3; // Можно увеличить значение для "более активного" пальца
      setMouseMoves(moveRef.current);

      if (moveRef.current >= 1500 && !submittedRef.current) {
        submittedRef.current = true;
        submitToBackend();
      }
    };

    if (modalOpen) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('touchmove', handleMove); // 👉 добавлено
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove); // 👉 удаляем тоже
    };
  }, [modalOpen]);
  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        <div className={classes.container2BlockLeft}>
          <span>Wir Freuen Uns uber Ihr Interesse</span>
          <span>
            Gerne nehmen wir uns die Zeit mit Ihnen Ihr Bauvorhaben persönlich
            zu besprechen, Ideen für die Umsetzung zu liefern und Sie positiv zu
            überzeugen.
          </span>
          <span>
            Beratung mit Niveau. Unverbindlich und Kostenlos. Das Team AVAR
            freut sich Ihnen zuhören zu können und Ihre fragen zu beantworten.
            Eine passende Lösung für Ihr Projekt zu finden ist für uns ein muss.
            Mit mehr als 25 Jahre Branchenerfahrung, einem Starken und
            Erfahrenen Team, Kreativität und unser engamore werden wir Sie
            überzeugen. Zögern Sie nicht.
          </span>
          <div className={classes.container2BlockLeftBottom}>
            <div className={classes.container2BlockLeftBottomEl}>
              <span>
                <img src="../images/kontakt3.svg" />
              </span>
              <div className={classes.container2BlockLeftBottomElRight}>
                <span>Address</span>
                <span>Aalborgring 4, 24109 Kie</span>
              </div>
            </div>
            <div className={classes.container2BlockLeftBottomEl}>
              <span>
                <img src="../images/kontakt4.svg" />
              </span>
              <div className={classes.container2BlockLeftBottomElRight}>
                <span>Call Us</span>
                <span>0178 5029999</span>
              </div>
            </div>
            <div className={classes.container2BlockLeftBottomEl}>
              <span>
                <img src="../images/kontakt2.svg" />
              </span>
              <div className={classes.container2BlockLeftBottomElRight}>
                <span>Email Us</span>
                <span>info@avar-kiel.de</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.container2BlockRight}>
          <div className={classes.container2BlockRightForm}>
            <span>Erhalte Kostenlos Beratung</span>
            <div className={classes.container2BlockRightFormInput}>
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
            <button>Anfrage versenden</button>
          </div>
        </div>
      </div>
    </div>
  );
}
