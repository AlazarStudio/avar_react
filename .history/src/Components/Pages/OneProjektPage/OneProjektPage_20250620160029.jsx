import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../../../bd'; // Импортируем данные
import classes from './OneProjektPage.module.css';

export default function OneProjectPage() {
  const { id } = useParams(); // Получаем id из URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    const selectedProject = projects.find(
      (project) => project.id.toString() === id
    );
    setProject(selectedProject);
  }, [id]);

  if (!project) return <div>Проект не найден.</div>; // Если проект не найден

  return <div className={classes.container}>
    <Container
  </div>;
}
