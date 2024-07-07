import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Introduction } from "./Components/Introduction";
import { About } from "./Components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <About />
    </div>
  );
}

export default App;
