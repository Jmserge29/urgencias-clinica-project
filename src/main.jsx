import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Home.jsx";
import "./index.css";
import Portal from "./Pages/Portal.jsx";
import Register from "./Pages/Register.jsx";
import PatientPortal from "./Pages/PatientPortal.jsx";
import Test from "./Pages/Test.jsx";
import Plataforma from "./Pages/Plataforma.jsx";
import Login from "./Pages/Login.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/plataform" element={<Plataforma />} />



      
      <Route path="/portal" element={<Portal />} />
      <Route path="/me" element={<PatientPortal />} />
      <Route path="/register" element={<Register />} />
      <Route path="/test" element={<Test />} />



      </Routes>
    </Router>
  </React.StrictMode>
);
