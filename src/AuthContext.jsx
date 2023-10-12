
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const tokenDto = {
  idUser: '',
  username: '',
  rol: ''
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(tokenDto);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
