import '../../blocks/App.css';
import Footer from '../Footer/Footer.jsx';
import Home from '../Home/Home.jsx';
import Header from '../Header/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Detalle from '../Detalle/Detalle.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import { getUserInfo, signin, signup } from '../../utils/auth.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [_, setCurrentUser] = useState({});
  const [__, setToken] = useState('');
  const [___, setIsInfoSuccess] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      if (isLogin) {
        const response = await getUserInfo();
        setCurrentUser(response);
        navigate('/');
      }
    }

    fetchUser();
  }, [isLogin, navigate]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleSignup = (email, password) => {
    signup(email, password).then((response) => {
      if (response.token) {
        setIsInfoSuccess(false);
        setToken(response.token);
      } else {
        setIsInfoSuccess(true);
      }
    });
  };
  const handleSignin = (email, password) => {
    signin(email, password).then((response) => {
      if (!response.token) {
        setIsInfoSuccess(false);
        setIsLogin(false);
      } else {
        setToken(response.token);
        localStorage.setItem('token', response.token);
        setIsLogin(true);
        navigate('/');
      }
    });
  };
  const handleLogout = () => {
    setIsLogin(false);
    setToken('');
    localStorage.removeItem('token');
    setCurrentUser({});
    navigate('/signin');
  };

  const handleRegister = () => {
    if (location.pathname === '/signin') {
      navigate('/signup');
    } else {
      navigate('/signin');
    }
  };

  return (
    <>
      <Header handleRegister={handleRegister} handleLogout={handleLogout} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
        <Route path='/producto/:id' element={<Detalle />} />
        <Route path='/signin' element={<Login handleSignin={handleSignin} />} />
        <Route
          path='/signup'
          element={<Register handleSignup={handleSignup} />}
        />
        <Route
          path='/cuenta'
          element={<ProtectedRoute isLogin={true}></ProtectedRoute>}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
