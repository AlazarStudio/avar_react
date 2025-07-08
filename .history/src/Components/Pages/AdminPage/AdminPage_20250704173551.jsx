import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

import authProvider from './JS/authProvider';
import LoginPage from './LoginPage';

// import LoginPage from './LoginPage1';
import serverConfig from '../../../serverConfig';
// import authProvider from './JS/authProvider';
import { fetchJsonWithToken } from './JS/fetchJsonWithToken';
import {
  CategoriesCreate,
  CategoriesEdit,
  CategoriesList,
} from './ProductsComponent/CategoriesComponent';
import {
  ProjectCreate,
  ProjectEdit,
  ProjectList,
} from './ProductsComponent/ProjectComponent';
import {
  FeedbackCreate,
  FeedbackEdit,
  FeedbackList,
} from './ProductsComponent/FeedbackComponent';
import { BeratungList } from './ProductsComponent/BeratungComponent';

const dataProvider = simpleRestProvider(`${serverConfig}`, fetchJsonWithToken); // Ваш API
const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

const AdminPage = () => (
  <Admin
    basename="/admin"
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    loginPage={<LoginPage />}
  >
    <Resource
      name="projects"
      list={ProjectList}
      create={ProjectCreate}
      edit={ProjectEdit}
    />

    <Resource
      name="categories"
      list={CategoriesList}
      create={CategoriesCreate}
      edit={CategoriesEdit}
      options={{ label: 'Категории' }}
    />

    <Resource
      name="feedbacks"
      list={FeedbackList}
      create={FeedbackCreate}
      edit={FeedbackEdit}
    />

    <Resource
  name="beratungs"
  list={BeratungList}
  create={BeratungCreate}
/>

  </Admin>
);

export default AdminPage;
