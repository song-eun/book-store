import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
