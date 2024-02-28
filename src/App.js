import logo from './logo.svg';
import './App.css';
import Sports from './components/Sports';
import Panini from './components/Panini';
import Path from './components/Path';
import Audio from './components/Audio';

function App() {
  return (
    <div className="App">
      <Panini />
      <Sports />
      <Path />
      {/* <Audio /> */}
    </div>
  );
}

export default App;
