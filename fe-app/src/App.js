import './css/App.css'
import Navigation from './components/Navigation'
import PetImages from './components/PetImages';
import Form from './components/Form'

function App(){
  return (
    <div className="App">
      <Navigation />
      <PetImages />
      <Form />
    </div>
  );
}

export default App;
