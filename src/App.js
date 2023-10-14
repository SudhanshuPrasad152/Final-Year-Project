import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Shownavbar from "./components/Shownavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import RentHome from "./components/RentHome";
import ForgotPwd from "./components/ForgotPwd";
import ResetPwd from "./components/ResetPwd";

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
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/rent-item" element={<RentHome />} />
          <Route exact path="/forgot-password" element={<ForgotPwd />} />
          <Route exact path="/reset-password/:id/:authToken" element={<ResetPwd/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
