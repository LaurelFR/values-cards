import React, { useState } from "react";

export default function CardSort(data) {
  const arrayOne = data.data;
  // Initialize four arrays and their state variables
  const [array1, setArray1] = useState(arrayOne);
  const [array2, setArray2] = useState([]);
  const [array3, setArray3] = useState([]);
  const [array4, setArray4] = useState([]);

  // Function to move the string from array1 to the selected destination array
  const moveString = (string, destinationArray, setDestinationArray) => {
    // Find the index of the string in array1
    const index = array1.indexOf(string);

    // Remove the string from array1 and add it to the destination array
    setArray1(array1.filter((_, i) => i !== index));
    setDestinationArray([...destinationArray, string]);
  };

  const moveString2 = (string, destinationArray, setDestinationArray) => {
    const index = array2.indexOf(string);

    setArray2(array2.filter((_, i) => i !== index));
    setDestinationArray([...destinationArray, string]);
  };

  const moveString3 = (string, destinationArray, setDestinationArray) => {
    const index = array3.indexOf(string);

    setArray3(array3.filter((_, i) => i !== index));
    setDestinationArray([...destinationArray, string]);
  };

  const moveString4 = (string, destinationArray, setDestinationArray) => {
    const index = array4.indexOf(string);

    setArray4(array4.filter((_, i) => i !== index));
    setDestinationArray([...destinationArray, string]);
  };

  return (
    <div className="container">
      <h1 className="mt-3 mb-2">Personal Values Card Sort</h1>
      <p className="text-center mb-1">
        Based on Personal Values Card Sort by W.R. Miller, J.C'de Baca, D.B.
        Matthews, P.L. Wilbourne, University of New Mexico, 2001
      </p>
      <p className="text-center mb-2">
        This project was coded by <strong>Laurel Rubel</strong> and is{" "}
        <a
          href="https://github.com/LaurelFR/values-cards"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </p>
      <div className="row">
        <div className="col card-column">
          <h2>Values Cards</h2>
          <hr />
          <ul>
            {array1.map((strings, index) => (
              <li key={index} className="card shadow mb-2">
                {strings.map((string, index) => (
                  <span key={index}>{string}</span>
                ))}
                <div className="mt-2">
                  <button
                    className="btn btn-2"
                    onClick={() => moveString(strings, array2, setArray2)}
                  >
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </button>
                  <button
                    className="btn btn-3"
                    onClick={() => moveString(strings, array3, setArray3)}
                  >
                    <i className="fa-solid fa-star"></i>
                  </button>
                  <button
                    className="btn btn-4"
                    onClick={() => moveString(strings, array4, setArray4)}
                  >
                    <i className="fa-solid fa-circle-xmark"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col very-important">
          <h2>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i> Very Important
          </h2>
          <hr />
          <ul>
            {array2.map((strings, index) => (
              <li key={index} className="card shadow mb-2">
                {strings.map((string, index) => (
                  <span key={index}>{string}</span>
                ))}
                <div className="mt-2">
                  <button
                    className="btn btn-3"
                    onClick={() => moveString2(strings, array3, setArray3)}
                  >
                    <i className="fa-solid fa-star"></i>
                  </button>
                  <button
                    className="btn btn-4"
                    onClick={() => moveString2(strings, array4, setArray4)}
                  >
                    <i className="fa-solid fa-circle-xmark"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col important">
          <h2>
            <i className="fa-solid fa-star"></i> Important
          </h2>
          <hr />
          <ul>
            {array3.map((strings, index) => (
              <li key={index} className="card shadow mb-2">
                {strings.map((string, index) => (
                  <span key={index}>{string}</span>
                ))}
                <div className="mt-2">
                  <button
                    className="btn btn-2"
                    onClick={() => moveString3(strings, array2, setArray2)}
                  >
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </button>
                  <button
                    className="btn btn-4"
                    onClick={() => moveString3(strings, array4, setArray4)}
                  >
                    <i className="fa-solid fa-circle-xmark"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col not-important">
          <h2>
            <i className="fa-solid fa-circle-xmark"></i> Not Important
          </h2>
          <hr />
          <ul>
            {array4.map((strings, index) => (
              <li key={index} className="card shadow mb-2">
                {strings.map((string, index) => (
                  <span key={index}>{string}</span>
                ))}
                <div className="mt-2">
                  <button
                    className="btn btn-2"
                    onClick={() => moveString4(strings, array2, setArray2)}
                  >
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </button>
                  <button
                    className="btn btn-3"
                    onClick={() => moveString4(strings, array3, setArray3)}
                  >
                    <i className="fa-solid fa-star"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
