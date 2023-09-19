import React, { useState } from "react";

export default function Instructions() {
  const [active, setActive] = useState(false);
  function handleClick(event) {
    event.preventDefault();
    setActive(true);
  }

  function handleXClick(event) {
    event.preventDefault();
    setActive(false);
  }

  if (active) {
    return (
      <div className="Instructions">
        <div className="d-flex justify-content-end mt-3">
          <button
            className="btn instructions-button shadow"
            onClick={handleClick}
          >
            Instructions
          </button>
        </div>
        <div className="instructions-screen shadow">
          <div className="d-flex justify-content-end mb-1">
            <i className="fa-solid fa-xmark" onClick={handleXClick}></i>
          </div>
          <h2>User Information</h2>
          <p>
            The Personal Values Card Sort is intended to help people clarify
            their own central values and consider how they might reflect those
            values in their daily lives. The usual procedure is to have the
            person sort the cards into 3-5 piles based on how important each
            value is. After you have sorted the provided values, you may add
            additional values. This set provides 3 piles to designate cards:
          </p>
          <ul>
            <li>
              {" "}
              <i className="fa-solid fa-circle-xmark"></i> Not Important to Me
            </li>
            <li>
              <i className="fa-solid fa-star"></i> Important to Me
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i> Very Important to Me
            </li>
          </ul>
          <p>
            This process can strengthen your understanding of yourself and teach
            you much about your guiding principles for living.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Instructions d-flex justify-content-end mt-3">
        <button
          className="btn instructions-button shadow"
          onClick={handleClick}
        >
          Instructions
        </button>
      </div>
    );
  }
}
