import './App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserHeader from './components/Header/UserHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <UserHeader />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
