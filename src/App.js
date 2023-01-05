import logo from './logo.svg';
import './App.css';

// Components
import Header from './components/Header'
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (

    <div className="App">

     <Header />

     <section>
      <Body />
     </section>


     <Footer />
    </div>

  );
}

export default App;
