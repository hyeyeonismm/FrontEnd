import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Main from './pages/Main.js';
import Card from './pages/Card';
import Stock from './pages/Stock';
import Onboarding from './pages/Onboarding.js';

const GlobalStyle = createGlobalStyle`

 body {
  letter-spacing: -0.1px;
  background-color: #000000;
}

.layout{
    max-width: 390px;
    max-height: 844px;
    background-color: white;
    margin: 0 auto;
    overflow-y: scroll;
    overflow-x: hidden;
}

.layout::-webkit-scrollbar {
  width: 0;
}

.layout::-webkit-scrollbar-thumb {
}

`;
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="layout">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/card" element={<Card />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
