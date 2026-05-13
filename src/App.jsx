import "./App.css";
import { Home } from "./Components/Home.jsx";
import { Navbar } from "./Components/Navbar.jsx";
import { About } from "./Components/About.jsx";
import { Service } from "./Components/Service.jsx";
import { Counter } from "./Components/Counter.jsx";
import { Todolist } from "./Components/Todolist.jsx";
import Apifetch from "./Components/Apifetch.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todolist" element={<Todolist />} />
        <Route path="/apifetch" element={<Apifetch/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
