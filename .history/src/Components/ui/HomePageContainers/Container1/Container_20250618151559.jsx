import React, { useState, useRef, useEffect } from 'react';
import Modal from '@mui/material/Modal'; // можно и свою, если без MUI
import classes from './HomePage.module.css';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { projects, reviews } from '../../../../bd';

function HomePage({ children, ...props }) {
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

  useEffect(() => {
    const handleMouseMove = () => {
      moveRef.current += 1;
      setMouseMoves(moveRef.current);

      if (moveRef.current >= 10 && !submitted) {
        submitToBackend();
      }
    };

    if (modalOpen) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [modalOpen, submitted]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendClick = () => {
    setModalOpen(true);
    moveRef.current = 0;
    setMouseMoves(0);
    setSubmitted(false);
  };

  // const submitToBackend = async () => {
  //   try {
  //     await axios.post('/api/form', formData); // путь на backend
  //     setSubmitted(true);
  //     setModalOpen(false);
  //     alert('Форма успешно отправлена!');
  //   } catch (err) {
  //     console.error(err);
  //     alert('Ошибка при отправке формы.');
  //   }
  // };
  const submitToBackend = async () => {
    setSubmitted(true);
    console.log('Отправленные данные:', formData);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setModalOpen(false);
    alert('Форма "отправлена" (в консоль)');
  };

  return (
    <></>)