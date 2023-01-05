import logo from './logo.svg';
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
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/contact":
      component = <Contact />
      break
  }
  return (

    <div className="App">

      <div>
        <Header />
      </div>

      <div>

        <div className='container'>
              {component}
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
