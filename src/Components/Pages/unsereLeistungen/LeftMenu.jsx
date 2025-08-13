import React from 'react';
import classes from './styles.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LeftMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { label: 'Reinigung', path: '/Reinigung' },
    { label: 'Elektroarbeiten', path: '/Elektroarbeiten' },
    { label: 'Sanitär - und Heizungsarbeiten', path: '/Sanitar' },
    { label: 'Malerarbeiten', path: '/Malerarbeiten' },
    { label: 'Trockenbau', path: '/Trockenbau' },
    { label: 'Pflasterverlegung und Grünpflege', path: '/Pflasterverlegung' },
    { label: 'Bodenbelagsarbeiten', path: '/Bodenbelagsarbeiten' },
    { label: 'Interior Design', path: '/InteriorDesign' },
    { label: 'Fliesenverlegung', path: '/Fliesenverlegung' },
  ];

  return (
    <div className={classes.containerLeft}>
      {items.map(({ label, path }) => (
        <span
          key={path}
          onClick={() => navigate(path)}
          className={location.pathname === path ? classes.active : ''}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
