import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Board from './components/Board/Board';
import Legend from './components/Legend/Legend';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Board/>
      <Legend/>
    </div>
  );
}

export default App;
