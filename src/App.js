import './App.css';
import AboutUs from './components/Aboutus';
import Whyus from './components/Whyus';

import Services from './components/Services';
import ClientSection from './components/ClientSection';
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
 
  return (
    <div className="App">
       <Header/>
       <HeroSection/>
       <ClientSection/>
       <AboutUs/>
       <Whyus/>
       <Services/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
