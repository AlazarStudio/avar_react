import { Routes, Route } from 'react-router-dom';
import LoginPage from '../components/admin/LoginPage';
import DashboardPage from '../components/admin/DashboardPage';
import ProtectedRoute from '../components/admin/ProtectedRoute';

const Admin = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Admin;
