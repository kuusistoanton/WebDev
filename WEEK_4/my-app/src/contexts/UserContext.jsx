import {createContext, useState, useCallback, useEffect} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useLocation, useNavigate} from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [hasAutoLoginRun, setHasAutoLoginRun] = useState(false);
  const {postLogin} = useAuthentication();
  const {getUserByToken, postUser} = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = useCallback(async (credentials) => {
    try {
      const result = await postLogin(credentials);
      // extract token from common response shapes
      let token = null;
      if (result) {
        if (typeof result === 'string') token = result;
        else token = result.token ?? result.access_token ?? result.accessToken ?? result.data?.token;
      }
      if (token) {
        localStorage.setItem('token', token);
      }
      const userResult = await getUserByToken(token);
      setUser(userResult.user);
      navigate('/');
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  }, [postLogin, getUserByToken, navigate]);

  const handleLogout = useCallback(() => {
    try {
      localStorage.removeItem('token');
      setUser(null);
      navigate('/login');
    } catch (e) {
      console.log(e.message);
    }
  }, [navigate]);

  const handleAutoLogin = useCallback(async () => {
    if (hasAutoLoginRun) return;
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const userResult = await getUserByToken(token);
        setUser(userResult.user);
        console.log('location', location);
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setHasAutoLoginRun(true);
    }
  }, [getUserByToken, location, hasAutoLoginRun]);

  const handleRegister = useCallback(async (credentials) => {
    try {
      const result = await postUser(credentials);
      console.log('register result', result);
      // Optionally auto-login after registration
      await handleLogin({username: credentials.username, password: credentials.password});
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  }, [postUser, handleLogin]);

  return (
    <UserContext.Provider value={{user, handleLogin, handleLogout, handleAutoLogin, handleRegister}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider, UserContext};