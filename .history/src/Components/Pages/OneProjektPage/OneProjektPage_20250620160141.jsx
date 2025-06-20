import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../../../bd'; // Импортируем данные
import classes from './OneProjektPage.module.css';
import Container1 from '../../ui/OneProjektPageContainers/Container1/Container1';

export default function OneProjectPage() {
  const { id } = useParams(); // Получаем id из URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    const selectedProject = projects.find(
      (project) => project.id.toString() === id
    );
    setProject(selectedProject);
  }, [id]);



  return (
    <div className={classes.container}>
      <Container1 />
    </div>
  );
}
