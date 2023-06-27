import './css/App.css';
import Navigation from './components/Navigation';
import PetImages from './components/PetImages';
import Form from './components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdoptPage from './components/AdoptPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />      
        <PetImages />
        <Form />
      </div>
      
      <Routes>
        <Route path="/adopt" element={<AdoptPage />}/>
      </Routes>

    </Router>
  );
}

export default App;
