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
    // <BrowserRouter>
      <Admin dataProvider={simpleRestProvider} authProvider={authProvider}>
        {/* <Resource
          name="project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
        /> */}
        {/* <Resource
          name="category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
        />
        <Resource
          name="feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
        /> */}
        {/* <Resource name="beratung" list={BeratungList} create={BeratungCreate} /> */}
      </Admin>
    // </BrowserRouter>
  );
}
