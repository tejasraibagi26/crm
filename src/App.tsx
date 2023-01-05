import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import DashboardPage from "./Pages/DashboardPage";

function App() {
  const [auth, setAuth] = useState<Boolean>(true);

  return (
    <Router>
      <Navbar auth={auth} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/:authType" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
