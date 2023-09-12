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
      <h1 className="mt-3 mb-5">Values Card Sort</h1>
      <div className="row">
        <div className="col">
          <h2>Array 1: Cards</h2>
          <hr />
          <ul>
            {array1.map((strings, index) => (
              <li key={index} className="card mb-2">
                {strings.map((string, index) => (
                  <span key={index}>{string}</span>
                ))}
                <div className="mt-3">
                  <button
                    className="btn btn-2"
                    onClick={() => moveString(strings, array2, setArray2)}
                  >
                    2
                  </button>
                  <button
                    className="btn btn-3"
                    onClick={() => moveString(strings, array3, setArray3)}
                  >
                    3
                  </button>
                  <button
                    className="btn btn-4"
                    onClick={() => moveString(strings, array4, setArray4)}
                  >
                    4
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>2: Very Important</h2>
          <hr />
          <ul>
            {array2.map((strings, index) => (
              <li key={index} className="card">
                {strings.map((string, index) => (
                  <span key={index}>{string}</span>
                ))}
                <div>
                  <button
                    className="btn btn-3"
                    onClick={() => moveString2(strings, array3, setArray3)}
                  >
                    3
                  </button>
                  <button
                    className="btn btn-4"
                    onClick={() => moveString2(strings, array4, setArray4)}
                  >
                    4
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>3: Important</h2>
          <hr />
          <ul>
            {array3.map((strings, index) => (
              <li key={index} className="card">
                {strings.map((string, index) => (
                  <span key={index}>{string}</span>
                ))}
                <div>
                  <button
                    className="btn btn-2"
                    onClick={() => moveString3(strings, array2, setArray2)}
                  >
                    2
                  </button>
                  <button
                    className="btn btn-4"
                    onClick={() => moveString3(strings, array4, setArray4)}
                  >
                    4
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>4: Not Important</h2>
          <hr />
          <ul>
            {array4.map((strings, index) => (
              <li key={index} className="card">
                {strings.map((string, index) => (
                  <span key={index}>{string}</span>
                ))}
                <div>
                  <button
                    className="btn btn-2"
                    onClick={() => moveString4(strings, array2, setArray2)}
                  >
                    2
                  </button>
                  <button
                    className="btn btn-3"
                    onClick={() => moveString4(strings, array3, setArray3)}
                  >
                    3
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
