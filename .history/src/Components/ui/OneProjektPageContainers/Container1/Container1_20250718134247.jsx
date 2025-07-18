import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Container1.module.css';
import serverConfig from '../../../../../serverConfig';
import axios from 'axios';
import uploadsConfig from '../../../../uploadsConfig';

export default function Container1() {
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
    <div className={classes.container1}>
      <div className={classes.container1Bg}>
        {/* <img src={project.images[0]} alt="" /> */}
        <img src={`${uploadsConfig}${el.images[0]}`} />
      </div>
      <div className={classes.container1Block}>
        <img src={project.images[0]} alt="" />
        <span>{project.title}</span>
      </div>
    </div>
  );
}
