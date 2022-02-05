import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello there!</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header> */}

      {/* <Greet name="Eric" aka="pk">
        <p>This is a child element</p>
        </Greet>
      <Greet name="Mike" aka="Mana"/>
      <Greet name="Joel" aka="Juju"/>

      <Welcome name="Eric" aka="pk"/>
      <Welcome name="Mike" aka="Mana"/>
      <Welcome name="Joel" aka="Juju"/>

      <Hello /> */}

      <Message />






    </div>
  );
}

export default App;
