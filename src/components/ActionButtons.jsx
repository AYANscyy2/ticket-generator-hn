import React from "react";

function ActionButtons({ onGenerateClick }) {
  return (
    <div id="buttons">
      <button id="generate-button" onClick={onGenerateClick}>
        {" "}
        <span>Generate</span>
        <img
          src="https://res.cloudinary.com/deuadrvkj/image/upload/v1759471077/Sparkle_chye0z.png"
          id="generate-icon"
          alt="Generate Icon"
        />
      </button>

      <button id="share-button">
        <span>Share</span>
        <img
          src="https://res.cloudinary.com/deuadrvkj/image/upload/v1759471077/ShareNetwork_zykzlp.png"
          id="share-icon"
          alt="Share Icon"
        />
      </button>

      {/* <button id="download-button">
        <span>Download</span>
        <img
          src="https://res.cloudinary.com/deuadrvkj/image/upload/v1759471077/DownloadSimple_q8ahhy.png"
          id="download-icon"
          alt="Download Icon"
        />
      </button> */}
    </div>
  );
}

export default ActionButtons;
