import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';
import { createBrowserHistory } from 'history';

import serverConfig from '../../../serverConfig';
import { fetchJsonWithToken } from './JS/fetchJsonWithToken';
import authProvider from './JS/authProvider';
import LoginPage from './LoginPage';

const history = createBrowserHistory(); // <- ключ

const dataProvider = simpleRestProvider(`${serverConfig}`, fetchJsonWithToken);
const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

const AdminPage = () => (
  <Admin
    history={history} // <- важная строка
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    loginPage={<LoginPage />}
  >
    {/* добавь ресурсы, если есть */}
  </Admin>
);

export default AdminPage;
