import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Standart/Layout/Layout';

import AdminPage from './Components/Pages/AdminPage/AdminPage';
import HomePage from './Components/Pages/HomePage/HomePage';
import UberUnsPage from './Components/Pages/UberUnsPage/UberUnsPage';
import ServicesPage from './Components/Pages/ServicesPage/ServicesPage';
import ProjektePage from './Components/Pages/ProjektePage/ProjektePage';
import OneProjektPage from './Components/Pages/OneProjektPage/OneProjektPage';
import KontaktPage from './Components/Pages/KontaktPage/KontaktPage';
import UnserTeamPage from './Components/Pages/UnserTeamPage/UnserTeamPage';
import BewertungenPage from './Components/Pages/BewertungenPage/BewertungenPage';
import ImpressumPage from './Components/Pages/ImpressumPage/ImpressumPage';
import DatenPage from './Components/Pages/DatenPage/DatenPage';
import AGB from './Components/Pages/AGB/AGB';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="überUns" element={<UberUnsPage />} />
        <Route path="dienstleistungen" element={<ServicesPage />} />
        <Route path="projekte" element={<ProjektePage />} />
        <Route path="projekte/:id" element={<OneProjektPage />} />
        <Route path="kontakt" element={<KontaktPage />} />
        <Route path="unserTeam" element={<UnserTeamPage />} />
        <Route path="bewertungen" element={<BewertungenPage />} />
        <Route path="Impressum" element={<ImpressumPage />} />
        <Route path="Datenschutz" element={<DatenPage />} />
        <Route path="AGB" element={<AGB />} />
      </Route>

      <Route path="/admin/*" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
