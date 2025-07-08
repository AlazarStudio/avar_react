import { Admin, Resource } from 'react-admin';
// import { BrowserRouter } from 'react-router-dom';
import simpleRestProvider from './dataProvider';
import authProvider from './authProvider';

// import { ProjectList, ProjectEdit, ProjectCreate } from './resources/Project';
// import {
//   CategoryList,
//   CategoryEdit,
//   CategoryCreate,
// } from './resources/Category';
// import {
//   FeedbackList,
//   FeedbackEdit,
//   FeedbackCreate,
// } from './resources/Feedback';
// import { BeratungList, BeratungCreate } from './resources/Beratung';

export default function AdminApp() {
  return (

      <Admin dataProvider={simpleRestProvider} authProvider={authProvider}>

      </Admin>

  );
}
