import React, { useEffect, useState } from 'react';
import classes from './Container1.module.css';
import { useParams } from 'react-router-dom';
import { projects } from '../../../../../bd';

export default function Container1() {
  const { id } = useParams(); // Получаем id из URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    const selectedProject = projects.find(
      (project) => project.id.toString() === id
    );
    setProject(selectedProject);
  }, [id]);

  if (!project) {
    return <div>Загружается...</div>; // Показываем индикатор загрузки, пока проект не загружен
  }

  return (
    <div className={classes.container1}>
      <div className={classes.container1Bg}>
        <img src={project.images[0]} />
      </div>
      <div className={classes.container1Block}>
        <span>{project.title}</span>
        <img src={project.images[0]} />
      </div>
    </div>
  );
}
