import React from 'react';
import classes from './OneProjektPage.module.css';
import { projects } from '../../../../bd';
import { useParams } from 'react-router-dom';

export default function OneProjektPage() {
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

  return <div className={classes.container}></div>;
}
