import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../../../bd'; // Импортируем данные
import classes from './OneProjektPage.module.css';
import Container1 from '../../ui/OneProjektPageContainers/Container1/Container1';
import Container2 from '../../ui/OneProjektPageContainers/Container2/Container2';

export default function OneProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${serverConfig}/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (!project) return <div>Проект не найден</div>;

  return (
    <div className={classes.container}>
      <Container1 />
      <Container2 project={project} />
    </div>
  );
}
