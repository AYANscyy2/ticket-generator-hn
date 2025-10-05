import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import TicketPage from "./components/TicketPage.jsx"; // <-- new file you'll create
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ticket" element={<TicketPage />} />
    </Routes>
  </BrowserRouter>
);
