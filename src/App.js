import './App.css';
import Portfolio from './component/Portfolio';
import Navbar from "./component/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Portfolio name={"Stainley"} />
    </div>
  );
}

export default App;
