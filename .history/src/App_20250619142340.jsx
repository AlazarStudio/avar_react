import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import Main_Page from './Components/Pages/Main_Page';
import Non_Found_Page from './Components/Pages/Non_Found_Page';
import Layout from './Components/Standart/Layout/Layout';
// import InstallButton from './Components/Pages/InstallButton/InstallButton';
import HomePage from './Components/Pages/HomePage/HomePage';
import UberUnsPage from './Components/Pages/UberUnsPage/UberUnsPage';
import ServicesPage from './Components/Pages/ServicesPage/ServicesPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="überUns" element={<UberUnsPage />} />
          <Route path="services" element={<ServicesPage />} />\
           <Route path="services" element={<ServicesPage />} />
          <Route path="*" element={<Non_Found_Page />} />
        </Route>
      </Routes>

      {/* Кнопка установки */}
      {/* <InstallButton /> */}
    </>
  );
}

export default App;
