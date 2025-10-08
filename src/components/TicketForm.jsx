import React from "react";

function TicketForm({ setInputName, setInputTeam }) {
    const handleNameChange = (event) => {
        setInputName(event.target.value);
    };

    const handleTeamChange = (event) => {
        setInputTeam(event.target.value);
    };

    return (
        <div className="form-container">
            <div id="name-input-div">
                <p className="body-txt">Your Name</p>
                <input
                    type="text"
                    id="name-input"
                    placeholder="Your full name here"
                    onChange={handleNameChange}
                />
            </div>
            <div id="team-input-div">
                <p className="body-txt">Team Name</p>
                <input
                    type="text"
                    id="team-name-input"
                    placeholder="Full name of your team"
                    onChange={handleTeamChange}
                />
            </div>
        </div>
    );
}

export default TicketForm;
