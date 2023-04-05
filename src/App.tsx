import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home'
import Research from './pages/Research';
import CV from './pages/CV';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import './App.css';
import Teaching from './pages/Teaching';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/research" element={<Research />} />
              <Route path="/teaching" element={<Teaching />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
