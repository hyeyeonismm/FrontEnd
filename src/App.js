import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Main from './pages/Main.js';
import Card from './pages/Card';
import Onboarding from './pages/Onboarding.js';
import StockApp from './components/Stock/StockApp.js';

const GlobalStyle = createGlobalStyle`
 body,html {
  letter-spacing: -0.1px;
  margin: 0;
  background-color: black;
  padding: 0;
  height: 100vh;
  overflow-x: hidden; 
}
 

.layout{
  max-width: 390px;
  height: auto;
  background-color: white;
  margin: 0 auto; 
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
          <Route path="/stock/*" element={<StockApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
