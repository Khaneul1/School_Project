import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Page48~Login/LoginPage/LoginPage';
import SignUpPage from './Page48~Login/LoginPage/SignUpPage';
import FirstPage from './Page42~43/FirstPage';
import SecondPage from './Page42~43/SecondPage';
import Page44 from './Page44~45/Page44';
import Page45 from './Page44~45/Page45';
import Start from './Page46~47/Page46/Start';
import Start2 from './Page46~47/Page47/Start2';
import MyDiaryPage from './Page48~Login/page48/MyDiaryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/page1" element={<FirstPage />} />
      <Route path="/page2" element={<SecondPage />} />
      <Route path="/page44" element={<Page44 />} />
      <Route path="/page45" element={<Page45 />} />
      <Route path="/page46" element={<Start />} />
      <Route path="/page47" element={<Start2 />} />
      <Route path="/page48" element={<MyDiaryPage />} />
    </Routes>
  );
}

export default App;
