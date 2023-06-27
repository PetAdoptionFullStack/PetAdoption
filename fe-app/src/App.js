import './css/App.css'

import Navigation from './components/Navigation'
import Body from './components/Body';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';

function App(){
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Body />
      </div>
      <Routes>
        <Route path="/AboutUs" element={<AboutUs />}/>
      </Routes>
    
    </Router>
  );
}

export default App;
