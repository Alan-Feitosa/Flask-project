import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import About from './pages/About';
import Login from './pages/Login';

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
    </Router>
  );
};

export default App;
