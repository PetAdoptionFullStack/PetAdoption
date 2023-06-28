import './css/App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdoptPage from './components/Adopt';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<AdoptPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
