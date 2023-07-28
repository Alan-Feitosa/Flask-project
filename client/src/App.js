import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
         <Route exact path="/" element={ <Home />} />
        {/* <Route path="/sobre" component={About} /> */ }
        <Route path="/login" element={ <Login />} />
        {/* Adicione mais rotas para outras páginas aqui */}
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
