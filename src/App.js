// Main Imports
import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';

// Styling
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// Pages
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  
  return (

    <div className="App">

      <div>
        <Header />
      </div>

      <div>

        <div className='container'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
        </div>

        <Navbar />

      </div>

      <div>
        <Footer />
      </div>

    </div>

  );
}

export default App;
