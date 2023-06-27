import './css/App.css'
import Navigation from './components/Navigation'
import PetImages from './components/PetImages';
import Form from './components/Form'
import Adopt from './components/Adopt'

function App(){
  return (
    <div className="App">
      <Navigation />
      <PetImages />
      <Form />
      <Adopt />
    </div>
  );
}

export default App;
