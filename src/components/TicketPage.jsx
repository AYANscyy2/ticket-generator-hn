import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Ticket from "./Ticket.jsx";
import ActionButtons from "./ActionButtons.jsx";

function TicketPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const name = params.get("name") || "Unknown";
  const team = params.get("team") || "Team";
  const theme = params.get("theme") || "blue";

  const handleGenerate = () => {
    navigate("/");
  };

  return (
    <div className="ticket-page-container">
      <Ticket name={name} team={team} theme={theme} />
      <ActionButtons onGenerateClick={handleGenerate} />
    </div>
  );
}

export default TicketPage;
