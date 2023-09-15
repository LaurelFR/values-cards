import React, { useState } from "react";

export default function Summary(props) {
  const veryImportant = props.veryImportant;
  const important = props.important;
  const notImportant = props.notImportant;

  const [active, setActive] = useState(false);

  function handleXClick(event) {
    event.preventDefault();
    setActive(false);
  }

  function handleClick(event) {
    event.preventDefault();
    setActive(true);
  }

  if (active) {
    return (
      <div className="Summary">
        <div className="summary-screen">
          <div className="d-flex justify-content-end mb-1">
            <i className="fa-solid fa-xmark" onClick={handleXClick}></i>
          </div>
          <h2 className="mb-0">Summary</h2>
          <hr className="line" />
          <div className="row">
            <div className="col very-important-summary">
              <h3 className="text-center">Very Important</h3>
              <ul>
                {veryImportant.map((strings, index) => (
                  <li key={index}>
                    {strings.map((string, index) => (
                      <span key={index}>{string} </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col">
              <h3 className="text-center">Important</h3>
              <ul>
                {important.map((strings, index) => (
                  <li key={index}>
                    {strings.map((string, index) => (
                      <span key={index}>{string} </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col">
              <h3 className="text-center">Not Important</h3>
              <ul>
                {notImportant.map((strings, index) => (
                  <li key={index}>
                    {strings.map((string, index) => (
                      <span key={index}>{string} </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Summary d-flex justify-content-center">
        <button className="btn summary-button" onClick={handleClick}>
          Summary
        </button>
      </div>
    );
  }
}
