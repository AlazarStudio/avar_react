import { Admin, Resource } from 'react-admin';
import simpleRestProvider from './dataProvider';
import authProvider from './authProvider';
import { ProjectList } from './resources/Project';

export default function AdminApp() {
  return (
    <Admin
      basename="/admin"
      dataProvider={simpleRestProvider}
      authProvider={authProvider}
    >
      <Resource name="project" list={ProjectList} />
    </Admin>
  );
}
