const authProvider = {
  login: ({ password }) => {
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      localStorage.setItem('auth', 'true');
      return Promise.resolve();
    }
    return Promise.reject('Неверный пароль');
  },
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem('auth') === 'true'
      ? Promise.resolve()
      : Promise.reject(),
  checkError: () => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
  getIdentity: () =>
    Promise.resolve({
      id: 'admin',
      fullName: 'Admin',
    }),
};

export default authProvider;
