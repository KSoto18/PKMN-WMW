// Styling
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

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

      </div>

      <div className='footer'>
        <Footer />
      </div>

    </div>

  );
}

export default App;
