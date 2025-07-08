import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

// import LoginPage from './LoginPage1';
import serverConfig from '../../../serverConfig';
import authProvider from './JS/authProvider';
import { fetchJsonWithToken } from './JS/fetchJsonWithToken';

// import authProvider from './JS/authProvider';
import LoginPage from './LoginPage';
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
} from './Resourses/CategoryResource';
import {
  ProjectCreate,
  ProjectEdit,
  ProjectList,
} from './Resourses/ProjectResource';
import {
  FeedbackCreate,
  FeedbackEdit,
  FeedbackList,
} from './Resourses/FeedbackResource';
import { BeratungCreate, BeratungList } from './Resourses/BeratungResource';
import CustomLayout from './CustomLayout';

const dataProvider = simpleRestProvider(`${serverConfig}`, fetchJsonWithToken); // Ваш API
const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

const AdminPage = () => (
  <Admin
    basename="/admin"
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    layout={CustomLayout}
    // loginPage={<LoginPage />}
  >
    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    />

    <Resource
      name="projects"
      list={ProjectList}
      edit={ProjectEdit}
      create={ProjectCreate}
    />

    <Resource
      name="handwerks"
      list={ProjectList}
      edit={ProjectEdit}
      create={ProjectCreate}
    />

    <Resource
      name="projects"
      list={ProjectList}
      edit={ProjectEdit}
      create={ProjectCreate}
    />

    <Resource
      name="feedbacks"
      list={FeedbackList}
      edit={FeedbackEdit}
      create={FeedbackCreate}
    />

    <Resource name="beratungs" list={BeratungList} create={BeratungCreate} />
  </Admin>
);

export default AdminPage;
