import React from 'react';
import classes from './UnserTeamPage.module.css';
import Container1 from '../../ui/UnserTeamPageContainers/Container1/Container1';
import Container2 from '../../ui/UnserTeamPageContainers/Container2/Container2';

export default function UnserTeamPage() {
  return (
    <div className={classes.container}>
      <Container1 />
      <Container2 />
    </div>
  );
}
