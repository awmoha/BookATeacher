import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import AuthRoute from "./Components/AuthRoute";
import { initializeApp } from 'firebase/app';
import { config } from "./config/config";
import { Footer } from "./Components/Footer";

initializeApp(config.firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRoute><HomePage /></AuthRoute>}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
