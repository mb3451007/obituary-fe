import axios from './axios';

const login = async (credentials: { email: string; password: string }) => {
  const endpoint = '/auth/login';

  const response = await axios.post(endpoint, credentials);

  return response.data;
};

const logout = async () => {
  const endpoint = '/auth/logout';

  const response = await axios.post(endpoint);

  return response.data;
};

const authService = {
  login,
  logout,
};

export default authService;
