import './App.css';

function App(){

  function getAPI() {
    fetch('http://localhost:9000/testAPI')
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(data);
    })
  }
  getAPI();

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
