import React, { useEffect, useState } from 'react';
import classes from './Container4.module.css';
// import { projects } from '../../../../../bd';

import axios from 'axios';
import serverConfig from '../../../../serverConfig';
import uploadsConfig from '../../../../uploadsConfig';
import { useNavigate } from 'react-router-dom';

export default function Container4() {
const navi

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${serverConfig}/projects`)
      .then((res) => setProjects(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className={classes.loading}>Laden...</div>;


  
  return (
    <div className={classes.container4}>
      <div className={classes.container4Block}>
        {projects
          .filter((el) => el.favorite === false)
          .map((el) => (
            <div
              className={classes.container4BlockEl}
              key={el.id}
              onClick={() => navigate(`/projekte/${el.id}`)}
            >
              {/* <img src={el.images[0]} /> */}
              <img src={`${uploadsConfig}${el.images[0]}`} />
              <div className={classes.container4BlockElBottom}>
                <span>{el.title}</span>
                <span>{el.description}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
