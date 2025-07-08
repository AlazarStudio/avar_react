import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Components/Standart/Layout/Layout';
import Non_Found_Page from './Components/Pages/Non_Found_Page';
import HomePage from './Components/Pages/HomePage/HomePage';
import UberUnsPage from './Components/Pages/UberUnsPage/UberUnsPage';
import ServicesPage from './Components/Pages/ServicesPage/ServicesPage';
import ProjektePage from './Components/Pages/ProjektePage/ProjektePage';
import OneProjektPage from './Components/Pages/OneProjektPage/OneProjektPage';
import KontaktPage from './Components/Pages/KontaktPage/KontaktPage';
import UnserTeamPage from './Components/Pages/UnserTeamPage/UnserTeamPage';
import BewertungenPage from './Components/Pages/BewertungenPage/BewertungenPage';
import AdminPage from './Components/Pages/AdminPage/AdminPage';

function App() {
  const location = useLocation();

  // Отдельный рендер AdminPage без Router
  if (location.pathname.startsWith('/admin')) {
    return <AdminPage />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="überUns" element={<UberUnsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projekte" element={<ProjektePage />} />
        <Route path="projekte/:id" element={<OneProjektPage />} />
        <Route path="kontakt" element={<KontaktPage />} />
        <Route path="unserTeam" element={<UnserTeamPage />} />
        <Route path="bewertungen" element={<BewertungenPage />} />
        <Route path="*" element={<Non_Found_Page />} />
      </Route>
      <Route path="/admin/*" element={<Admi />} />
    </Routes>
  );
}

export default App;
