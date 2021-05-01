import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Lisbon" />
        <footer>
          Open-source coded by
           <a href="https://github.com/brunadossantos-tech/weather-react"> Bruna Santos</a> 
        </footer>
      </div>
    </div>
  );
}

export default App;
