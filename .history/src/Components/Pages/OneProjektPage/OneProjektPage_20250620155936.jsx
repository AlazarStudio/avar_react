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

  return (
    <div className={classes.container}>
        <
      {/* <div className={classes.projectHeader}>
        <img
          src={project.img[0]}
          alt={project.title}
          className={classes.projectImage}
        />
        <div className={classes.projectInfo}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </div>

      <div className={classes.projectDetails}>
        <h2>Детали проекта</h2>
        <p>{project.detailedDescription}</p>
      
      </div>

      <div className={classes.projectGallery}>
        {project.img.map((image, index) => (
          <img key={index} src={image} alt={`Project image ${index}`} />
        ))}
      </div> */}
    </div>
  );
}
