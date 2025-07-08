import { Admin, Resource } from 'react-admin';
import { BrowserRouter } from 'react-router-dom';
import simpleRestProvider from './dataProvider';
import authProvider from './authProvider';
import { ProjectList } from './resources/Project';

export default function AdminApp() {
  return (
    <Admin  basename="/admin">
      <Admin
        dataProvider={simpleRestProvider}
        authProvider={authProvider}
      >
        <Resource name="project" list={ProjectList} />
      </Admin>
    </Admin>
  );
}
