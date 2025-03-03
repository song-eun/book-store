import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
