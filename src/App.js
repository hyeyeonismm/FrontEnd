import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Start from './pages/Start.js';
import Shareholder from './pages/Shareholder.js';

const GlobalStyle = createGlobalStyle`
 body {
  letter-spacing: -0.1px;
  background-color: #000000;
}


.layout{
    max-width: 390px;
    background-color: white;
    margin: 0 auto;
    min-height:100vh;
}
`;
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="layout">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shareholder" element={<Shareholder />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
