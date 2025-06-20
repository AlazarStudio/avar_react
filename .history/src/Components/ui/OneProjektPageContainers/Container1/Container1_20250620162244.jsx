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
          <div className={classes.container1}></div>
      <img src={project.img[0]} className={classes.container1Bg} />
      <div className={classes.container1Block}>
        <img src={project.img[0]} />
        <span>{project.title}</span>
      </div>
    </div>
  );
}
