import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>CI-CD PIPELINE</p>
        <a
          className="App-link"
          href="https://about.gitlab.com/topics/ci-cd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn CI-CD
        </a>
      </header>
    </div>
  );
}

export default App;
