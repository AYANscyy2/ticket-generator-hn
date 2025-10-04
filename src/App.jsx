import { useState } from "react";
import Ticket from "./components/Ticket.jsx";
import TicketForm from "./components/TicketForm.jsx";
import ActionButtons from "./components/ActionButtons.jsx";
import ColorPicker from "./components/ColorPicker.jsx";
import React from "react";

import "./style.css";

function App() {
  const [name, setName] = useState("Enter Your Name");
  const [team, setTeam] = useState("Team Name");
  const [theme, setTheme] = useState("blue");

  const [inputName, setInputName] = useState("");
  const [inputTeam, setInputTeam] = useState("");

  const handleGenerate = async () => {
    if (!inputName.trim() || !inputTeam.trim()) {
      alert("Please fill in both name and team name!");
      return;
    }

    try {
      const response = await fetch(
        `https://your-backend-api.com/api/ticket?name=${encodeURIComponent(
          inputName
        )}&team=${encodeURIComponent(inputTeam)}`
      );

      const data = await response.json();

      setName(data.name || inputName);
      setTeam(data.team || inputTeam);
    } catch (error) {
      console.error("Error generating ticket:", error);
      setName(inputName);
      setTeam(inputTeam);
    }

    setInputName("");
    setInputTeam("");

    const nameInputEl = document.getElementById("name-input");
    const teamInputEl = document.getElementById("team-name-input");
    if (nameInputEl) nameInputEl.value = "";
    if (teamInputEl) teamInputEl.value = "";
  };

  return (
    <>
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
    </>
  );
}

export default App;
