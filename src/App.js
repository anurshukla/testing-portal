import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This portal is for Testing Applications
        </p>
        <a
          className="App-link"
          href="beers/bira"
        >
          Click to open mobile app
        </a>
      </header>
    </div>
  );
}

export default App;
