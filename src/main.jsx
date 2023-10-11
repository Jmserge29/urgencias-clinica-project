import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Home.jsx";
import "./index.css";
import Portal from "./Pages/Portal.jsx";
import Assistance from "./Pages/Assistance.jsx";
import Register from "./Pages/Register.jsx";
import SignInAdministrative from "./Pages/SignInAdministrative.jsx"
import SignInLaboral from "./Pages/SignInLaboral.jsx";
import ListPatients from "./Pages/ListPatients.jsx";
import PatientPortal from "./Pages/PatientPortal.jsx";
import Test from "./Pages/Test.jsx";
import SignInPatient from "./Pages/SignInPatient.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="/me" element={<PatientPortal />} />
      <Route path="/auth/administrative" element={<SignInAdministrative />} />
      <Route path="/auth/doctor" element={<SignInLaboral />} />
      <Route path="/auth/patient" element={<SignInPatient />} />
      <Route path="/assistance" element={<Assistance />} />
      <Route path="/assistance/patients" element={<ListPatients />} />
      <Route path="/register" element={<Register />} />
      <Route path="/test" element={<Test />} />


      </Routes>
    </Router>
  </React.StrictMode>
);
