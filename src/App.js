import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Introduction } from "./Components/Introduction";
import { About } from "./Components/About";
import { Work } from "./Components/Work";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Introduction />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
