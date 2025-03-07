import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email"></input>
          <label htmlFor="password">Password</label>
          <input id="password" ></input>
          <button>OK</button>
        </div>
      </div>
      <footer className="App-footer" >
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
