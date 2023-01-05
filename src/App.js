import logo from './logo.svg';
import './App.css';

// Components
import Header from './components/Header'
import Footer from './components/Footer';
import Body from './components/Body';
import Navbar from './components/Navbar'

function App() {
  return (

    <div className="App">

      <div>
     <Header />
     </div>

     <div>
      <Body />
     </div>

      <div>
     <Navbar />
    </div>
   
     <div>
     <Footer />
     </div>

    </div>

  );
}

export default App;
