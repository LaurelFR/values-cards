import React, { useState } from "react";

export default function NewValue({ addToParentArray }) {
  const [active, setActive] = useState(false);

  let newValue = ["Value", "Description"];

  function handleValueChange(event) {
    newValue[0] = event.target.value;
  }

  function handleDescriptionChange(event) {
    newValue[1] = event.target.value;
  }

  function handleClick(event) {
    event.preventDefault();
    setActive(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newValue[0] !== "Value" && newValue[1] !== "Description") {
      addToParentArray(newValue);
    }
    event.target.reset();
  }

  if (active) {
    return (
      <div className="NewValue d-flex justify-content-center mb-2">
        <form
          className="new-value-form form-control d-flex justify-content-around align-items-center flex-column"
          onSubmit={handleSubmit}
        >
          <label className="mb-1">Value</label>
          <input
            type="text"
            id="value"
            className="mb-1"
            onChange={handleValueChange}
            autoFocus
          />
          <label className="mb-1">Description</label>
          <input
            type="text"
            id="description"
            onChange={handleDescriptionChange}
          />
          <input
            type="submit"
            className="btn new-value-button mt-3 mb-1"
            value="Add Value"
          />
        </form>
      </div>
    );
  } else {
    return (
      <div className="NewValue d-flex justify-content-center mb-2">
        <button className="btn new-value-button" onClick={handleClick}>
          Add your own value
        </button>
      </div>
    );
  }
}
