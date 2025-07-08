import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import Main_Page from './Components/Pages/Main_Page';
import Non_Found_Page from './Components/Pages/Non_Found_Page';
import Layout from './Components/Standart/Layout/Layout';
// import InstallButton from './Components/Pages/InstallButton/InstallButton';
import HomePage from './Components/Pages/HomePage/HomePage';
import UberUnsPage from './Components/Pages/UberUnsPage/UberUnsPage';
import ServicesPage from './Components/Pages/ServicesPage/ServicesPage';
import ProjektePage from './Components/Pages/ProjektePage/ProjektePage';
import OneProjektPage from './Components/Pages/OneProjektPage/OneProjektPage';
import KontaktPage from './Components/Pages/KontaktPage/KontaktPage';
import UnserTeamPage from './Components/Pages/UnserTeamPage/UnserTeamPage';
import BewertungenPage from './Components/Pages/BewertungenPage/BewertungenPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="überUns" element={<UberUnsPage />} />
          <Route path="services" element={<ServicesPage />} />\
          <Route path="projekte" element={<ProjektePage />} />
          <Route path="projekte/:id" element={<OneProjektPage />} />
          <Route path="kontakt" element={<KontaktPage />} />
          <Route path="unserTeam" element={<UnserTeamPage />} />
          <Route path="bewertungen" element={<BewertungenPage />} />
          <Route path="*" element={<Non_Found_Page />} />
        </Route>
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>

      {/* Кнопка установки */}
      {/* <InstallButton /> */}
    </>
  );
}

export default App;
