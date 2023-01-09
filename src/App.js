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
import Home from './pages/Home';

function App() {
  
  return (

    <div className="App">

      <div>
        <Header />
      </div>

      <div>

      <Home />

         <div className='navbar'>
        <Navbar />
       </div>

      </div>

      <div className='footer'>
        <Footer />
      </div>

    </div>

  );
}

export default App;
