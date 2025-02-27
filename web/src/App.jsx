import { Routes, Route, Navigate } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';

import AllTapes from './pages/AllTapes';
import Tape from './pages/Tape';

import a from './App.module.css';

function App() {

  return (
    
    <div className={a.app}>
      <Header />

      <Routes>
        <Route path="/" element={<AllTapes />} />
        <Route path="/tapes" element={<Navigate to="/" />} />
        <Route path="/tapes/:id" element={<Tape />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;
