import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

// import LoginPage from './LoginPage1';
import serverConfig from '../../../serverConfig';
// import authProvider from './JS/authProvider';
import { fetchJsonWithToken } from './JS/fetchJsonWithToken';
import {
  CategoriesCreate,
  CategoriesEdit,
  CategoriesList,
} from './ProductsComponent/CategoriesComponent';



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
      name="categories"
      list={CategoriesList}
      create={CategoriesCreate}
      edit={CategoriesEdit}
      options={{ label: 'Категории' }}
    />

    <Resource
      name="developers"
      list={DeveloperList}
      create={DeveloperCreate}
      edit={DeveloperEdit}
      options={{ label: 'Разработчики' }}
    />
    <Resource
      name="casesHome"
      list={CaseHomeList}
      create={CaseHomeCreate}
      edit={CaseHomeEdit}
      options={{ label: 'Кейсы на главной' }}
    />
    <Resource
      name="cases"
      list={CaseList}
      create={CaseCreate}
      edit={CaseEdit}
      options={{ label: 'Кейсы' }}
    />

    <Resource
      name="shops"
      list={ShopList}
      create={ShopCreate}
      edit={ShopEdit}
      options={{ label: 'Магазин' }}
    />

    <Resource
      name="discussions"
      list={DiscussionsList}
      create={DiscussionsCreate}
      edit={DiscussionsEdit}
      options={{ label: 'Обсудить проект' }}
    />
  </Admin>
);

export default AdminPage;
