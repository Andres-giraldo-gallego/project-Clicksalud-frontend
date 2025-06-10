import '../../blocks/App.css';
import Footer from '../Footer/Footer.jsx';
import Home from '../Home/Home.jsx';
import Header from '../Header/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Detalle from '../Detalle/Detalle.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<Home />} />
        <Route path='/producto/:id' element={<Detalle />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
