import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './Components/Navbar.jsx';
import Home from './pages/Home';
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Dashboard from "./pages/Dashboard.js";
import { useState } from "react";


function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>

    </div>
  );
}

export default App;
