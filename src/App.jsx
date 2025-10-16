import "./style.css";

import React, { useEffect, useState } from "react";

import html2canvas from "html2canvas"; // Add this import
import { useNavigate } from "react-router-dom";

import ActionButtons from "./components/ActionButtons.jsx";
import ColorPicker from "./components/ColorPicker.jsx";
import Ticket from "./components/Ticket.jsx";
import TicketForm from "./components/TicketForm.jsx";

function App() {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadImage = (canvas) => {
    const link = document.createElement("a");
    link.download = "hacknitr-ticket.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const copyLinkToClipboard = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      console.log("Link copied to clipboard");
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleShare = async () => {
    setIsGenerating(true);
    try {
      const ticketElement = document.getElementById("ticket-div");

      if (!ticketElement) {
        alert("Ticket element not found!");
        setIsGenerating(false);
        return;
      }

      const shareableLink = `${
        window.location.origin
      }/ticket?name=${encodeURIComponent(name)}&team=${encodeURIComponent(
        team
      )}&theme=${theme}`;

      const canvas = await html2canvas(ticketElement, {
        scale: 2,
        backgroundColor: "white",
        logging: false,
        useCORS: true,
      });

      canvas.toBlob(async (blob) => {
        const file = new File([blob], "hacknitr-ticket.png", {
          type: "image/png",
        });

        if (navigator.share && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              title: `${name}'s HackNITR Ticket`,
              text: `Check out my HackNITR ticket for ${team}! 🎟️\n\nView ticket: ${shareableLink}`,
              files: [file],
            });
          } catch (err) {
            if (err.name !== "AbortError") {
              downloadImage(canvas);
              copyLinkToClipboard(shareableLink);
            }
          }
        } else {
          downloadImage(canvas);
          copyLinkToClipboard(shareableLink);
          alert(
            "📱 Image downloaded and link copied to clipboard! Upload it to Instagram Story from your phone."
          );
        }
        setIsGenerating(false);
      }, "image/png");
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to generate image. Please try again.");
      setIsGenerating(false);
    }
  };

  const [name, setName] = useState("Your Name");
  const [team, setTeam] = useState("Team Name");
  const [theme, setTheme] = useState("blue");
  const [inputName, setInputName] = useState("Your Name");
  const [inputTeam, setInputTeam] = useState("Team Name");

  useEffect(() => {
    setName(inputName);
    setTeam(inputTeam);
  }, [inputName, inputTeam]);

  const handleGenerate = () => {
    if (!inputName.trim() || !inputTeam.trim()) {
      alert("Please fill in both name and team name!");
      return;
    }

    setName(inputName);
    setTeam(inputTeam);

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
                <Ticket id="ticket-div" name={name} team={team} theme={theme} />
                <TicketForm
                  setInputName={setInputName}
                  setInputTeam={setInputTeam}
                />
              </div>
            </div>
            <ActionButtons
              onShareClick={handleShare}
              onGenerateClick={handleGenerate}
              isGenerating={isGenerating}
            />
          </div>
          <ColorPicker setTheme={setTheme} />
        </div>
      </div>
    </div>
  );
}

export default App;
