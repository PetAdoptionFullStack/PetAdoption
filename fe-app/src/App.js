import './css/App.css'
import './css/About.css'
import AboutUs from './components/AboutUs';
import './css/App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdoptPage from './components/AdoptPage';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/about" element={<AboutUs />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
