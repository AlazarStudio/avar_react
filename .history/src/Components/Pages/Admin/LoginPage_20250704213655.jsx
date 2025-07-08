import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(password);
    navigate('/admin/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto mt-20 space-y-4">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full"
        placeholder="Admin Password"
      />
      <button type="submit" className="bg-black text-white px-4 py-2 w-full">
        Войти
      </button>
    </form>
  );
};

export default LoginPage;
