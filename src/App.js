import logo from './logo.svg';
import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Categories from './pages/Categories';

function App() {
  return (
    <>
    <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
