import React from "react";
import "../style.css";

function Ticket({ name, team, theme }) {
  const dotPattern =
    "radial-gradient(rgba(0, 0, 0, 0.3) 1.2px, transparent 1px) 50px 0 / 50px 50px";

  const themes = {
    blue: {
      leftTicketBG: `linear-gradient(90deg, rgba(0, 194, 255, 0.35) 0%, rgba(255, 255, 255, 0.15) 33%, rgba(0, 194, 255, 0.35) 66%, rgba(255, 255, 255, 0.15) 100%)`,
      rightTicketBG: `linear-gradient(251.39deg, rgba(0, 194, 255, 0.35) -4.72%, rgba(255, 255, 255, 0.15) 109.51%)`,
      nameClass: "name-blue",
      teamClass: "team-blue",
      perforationColor: "#0534C7",
      teamIconSrc:
        "https://res.cloudinary.com/deuadrvkj/image/upload/v1759453552/UsersThree_hadgwy.png",
    },
    green: {
      leftTicketBG: `linear-gradient(90deg, rgba(20, 241, 149, 0.35) 0%, rgba(255, 255, 255, 0.15) 33%, rgba(20, 241, 149, 0.35) 66%, rgba(255, 255, 255, 0.15) 100%)`,
      rightTicketBG: `linear-gradient(251.39deg, rgba(20, 241, 149, 0.35) -4.72%, rgba(255, 255, 255, 0.15) 109.51%)`,
      nameClass: "name-green",
      teamClass: "team-green",
      perforationColor: "#049056",
      teamIconSrc:
        "https://res.cloudinary.com/deuadrvkj/image/upload/v1759520469/UsersThree-green_otralk.png",
    },
    violet: {
      leftTicketBG: `linear-gradient(90deg, rgba(81, 0, 114, 0.35) 0%, rgba(255, 255, 255, 0.15) 33%, rgba(81, 0, 114, 0.35) 66%, rgba(255, 255, 255, 0.15) 100%)`,
      rightTicketBG: `linear-gradient(251.39deg, rgba(81, 0, 114, 0.35) -4.72%, rgba(255, 255, 255, 0.15) 109.51%)`,
      nameClass: "name-violet",
      teamClass: "team-violet",
      perforationColor: "#510072",
      teamIconSrc:
        "https://res.cloudinary.com/deuadrvkj/image/upload/v1759520470/UsersThree-purple_ekepeq.png",
    },
  };

  const currentTheme = themes[theme];

  const leftTicketStyle = {
    background: `${dotPattern}, ${currentTheme.leftTicketBG}`,
    borderRadius: "14px 52px 52px 14px",
  };
  const rightTicketStyle = {
    background: `radial-gradient(rgba(0, 0, 0, 0.3) 1.2px, transparent 1px) 0 0 / 50px 50px, ${currentTheme.rightTicketBG}`,
    borderRadius: "52px 14px 14px 52px",
  };

  return (
    <div id="ticket-div-container">
      <div id="ticket-div">
      <div id="left-ticket" style={leftTicketStyle}>
        <img
          id="blue-ribbon"
          src="https://res.cloudinary.com/deuadrvkj/image/upload/v1759452278/blueribbon_kj9otn.png"
          alt="Blue Ribbon"
        />
        <img
          id="black-ribbon"
          src="https://res.cloudinary.com/deuadrvkj/image/upload/v1759452952/blackribbon_w7xzxg.png"
          alt="Black Ribbon"
        />
        <img
          id="qr-code"
          src="https://res.cloudinary.com/deuadrvkj/image/upload/v1759453117/qr-code_my2vcv.png"
          alt="QR Code"
        />

        <div id="team-details">
          <h2 id="name" className={currentTheme.nameClass}>
            {name}
          </h2>
          <div id="team-name-id">
            <img
              id="team-icon"
              src={currentTheme.teamIconSrc}
              alt="Team Icon"
            />
            <h3 id="team-name" className={currentTheme.teamClass}>
              {team}
            </h3>
          </div>
        </div>

        <div id="hn-title-div">
          <img
            id="hn-title-logo"
            src="https://res.cloudinary.com/deuadrvkj/image/upload/v1759446490/Hacknitr-logo_f7t8t8.svg"
            alt="HackNITR Logo"
          />
          <img
            id="hn-title"
            src="https://res.cloudinary.com/deuadrvkj/image/upload/v1759457604/titlehn_auchpz.png"
            alt="HackNITR Title"
          />
        </div>
        <img
          id="robot-icon"
          src="https://res.cloudinary.com/deuadrvkj/image/upload/v1759446496/robot-icon_lbkqjv.svg"
          alt="Robot Icon"
        />
      </div>

      <div
        className="perforation-line"
        style={{
          backgroundImage: `repeating-linear-gradient(to bottom, ${currentTheme.perforationColor} 0px, ${currentTheme.perforationColor} 17.312px, transparent 17.312px, transparent 34.624px)`,
        }}
      ></div>

      <div id="right-ticket" style={rightTicketStyle}>
        <img
          id="date-icon"
          src="https://res.cloudinary.com/deuadrvkj/image/upload/v1759446490/1st-2nd_November_2025_zj0azh.svg"
          alt="Date"
        />
        <img
          id="barcode-icon"
          src="https://res.cloudinary.com/deuadrvkj/image/upload/v1759446489/bar-code_nibq4m.svg"
          alt="Barcode"
        />
      </div>
      </div>
    </div>
  );
}
export default Ticket;
