import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Shownavbar from "./components/Shownavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Shownavbar>
          <Navbar />
        </Shownavbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
