import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Card from './pages/Card';
import Stock from './pages/Stock';

const GlobalStyle = createGlobalStyle`

 body,html {
  letter-spacing: -0.1px;
  margin: 0;
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
          <Route path="/" element={<Main />} />
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
