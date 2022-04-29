import React from "react";
import "./page.css";

const Loading = () => {
  return (
    <div className="content">
      <div className="content-text, page1-text">
        <div className="first-row, text-flex">
          <div className="p1-letter">P</div>
          <div className="p1-letter">A</div>
          <div className="p1-letter">R</div>
          <div className="p1-letter">C</div>
          <div className="p1-letter">E</div>
          <div className="p1-letter">L</div>
          <div className="p1-letter">L</div>
          <div className="p1-letter">E</div>
          <div className="p1-letter">S</div>
        </div>
        <div className="second-row, text-flex">
          <div className="p1-letter">D</div>
          <div className="p1-letter">E</div>
        </div>
        <div className="three-row, text-flex">
          <div className="p1-letter">C</div>
          <div className="p1-letter">H</div>
          <div className="p1-letter">A</div>
          <div className="p1-letter">R</div>
          <div className="p1-letter">T</div>
          <div className="p1-letter">O</div>
          <div className="p1-letter">N</div>
          <div className="p1-letter">G</div>
          <div className="p1-letter">E</div>
        </div>
        <div className="fours-row, text-flex">
          <div className="p1-letter">T</div>
          <div className="p1-letter">A</div>
          <div className="p1-letter">I</div>
          <div className="p1-letter">L</div>
          <div className="p1-letter">L</div>
          <div className="p1-letter">E</div>
          <div className="p1-letter">T</div>
        </div>
      </div>
      <div class="progress">
        <span class="progress-bar"></span>
      </div>
    </div>
  );
};

export default Loading;
