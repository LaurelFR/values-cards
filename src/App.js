import React, { useState } from "react";

const App = () => {
  // Initialize four arrays and their state variables
  const [array1, setArray1] = useState(["String 1", "String 2", "String 3"]);
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
    <div>
      <h1>Values Card Sort</h1>

      <h2>Array 1: Cards</h2>
      <ul>
        {array1.map((string, index) => (
          <li key={index}>
            {string}
            <div>
              <button onClick={() => moveString(string, array2, setArray2)}>
                Move to Array 2
              </button>
              <button onClick={() => moveString(string, array3, setArray3)}>
                Move to Array 3
              </button>
              <button onClick={() => moveString(string, array4, setArray4)}>
                Move to Array 4
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h2>Array 2: Very Important</h2>
      <ul>
        {array2.map((string, index) => (
          <li key={index}>
            {string}{" "}
            <button onClick={() => moveString2(string, array3, setArray3)}>
              Move to Array 3
            </button>
            <button onClick={() => moveString2(string, array4, setArray4)}>
              Move to Array 4
            </button>
          </li>
        ))}
      </ul>

      <h2>Array 3: Important</h2>
      <ul>
        {array3.map((string, index) => (
          <li key={index}>
            {string}{" "}
            <button onClick={() => moveString3(string, array2, setArray2)}>
              Move to Array 2
            </button>
            <button onClick={() => moveString3(string, array4, setArray4)}>
              Move to Array 4
            </button>
          </li>
        ))}
      </ul>

      <h2>Array 4: Not Important</h2>
      <ul>
        {array4.map((string, index) => (
          <li key={index}>
            {string}
            <button onClick={() => moveString4(string, array2, setArray2)}>
              Move to Array 2
            </button>
            <button onClick={() => moveString4(string, array3, setArray3)}>
              Move to Array 3
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
