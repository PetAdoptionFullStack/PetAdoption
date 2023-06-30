import './css/App.css';
import './css/adopt.css';
import './css/about.css'
import './css/contact.css';
import AboutUs from './components/AboutUs';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdoptPage from './components/Adopt';
import Home from './components/Home';
import Contact from './components/Contact';
import NewAdoption from './components/NewAdoption';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/create-adoption" element={<NewAdoption />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;