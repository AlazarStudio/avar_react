import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import classes from './OneProjektPage.module.css';
import { projects } from '../../../../bd'; // Подразумеваем, что проекты находятся в этом файле

export default function OneProjektPage() {
  // Извлекаем параметр id из URL
  const { id } = useParams();

  // Состояние для хранения проекта
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Ищем проект с нужным id
    const foundProject = projects.find((project) => project.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]); // Обновляем проект, если id в URL изменится

  if (!project) {
    return <div>Проект не найден</div>; // Если проект не найден
  }

  return (
    <div className={classes.container}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div>
        <strong>Цена:</strong> {project.price}
      </div>
      {/* Выводим другие данные проекта */}
    </div>
  );
}
