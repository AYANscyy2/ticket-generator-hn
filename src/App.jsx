import { useState } from "react";
import Ticket from "./components/Ticket.jsx";
import TicketForm from "./components/TicketForm.jsx";
import ActionButtons from "./components/ActionButtons.jsx";
import ColorPicker from "./components/ColorPicker.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function App() {
  const navigate = useNavigate();

  const [name, setName] = useState("Enter Your Name");
  const [team, setTeam] = useState("Team Name");
  const [theme, setTheme] = useState("blue");

  const [inputName, setInputName] = useState("");
  const [inputTeam, setInputTeam] = useState("");

  const handleGenerate = () => {
    if (!inputName.trim() || !inputTeam.trim()) {
      alert("Please fill in both name and team name!");
      return;
    }

    const query = new URLSearchParams({
      name: inputName,
      team: inputTeam,
      theme,
    }).toString();

    navigate(`/ticket?${query}`);
  };

  return (
    <div className="center-container">
      <div className="scale-wrapper">
        <h1 id="main-ticket">GENERATE YOUR TICKET</h1>
        <div className="main-container">
          <div className="content-section">
            <div id="main-div">
              <div className="app-container">
                <Ticket name={name} team={team} theme={theme} />
                <TicketForm
                  setInputName={setInputName}
                  setInputTeam={setInputTeam}
                />
              </div>
            </div>
            <ActionButtons onGenerateClick={handleGenerate} />
          </div>
          <ColorPicker setTheme={setTheme} />
        </div>
      </div>
    </div>
  );
}

export default App;
