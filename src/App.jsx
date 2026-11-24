
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<h2>About Our College</h2>} />
            <Route path="/contact" element={<h2>Contact Us</h2>} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
