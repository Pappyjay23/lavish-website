import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Products from './components/pages/Products/Products';
import Services from './components/pages/Services/Services';
import SignUp from './components/pages/SignUp/SignUp';

function App() {
  
  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/services" exact element={<Services />}></Route>
            <Route path="/products" exact element={<Products />}></Route>
            <Route path="/sign-up" exact element={<SignUp />}></Route>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
