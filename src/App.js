import React from "react";

import CardSort from "./CardSort";
import "./App.css";

const App = () => {
  const words = [
    ["Acceptance", "to be accepted as I am"],
    ["Accuracy", "to be accurate in my opinions and beliefs"],
    ["Achievement", "to have important accomplishments"],
    ["Adventure", "to have new and exciting experiences"],
    ["Attractiveness", "to be physically attractive"],
    ["Authority", "to be in charge of and responsible for others"],
    ["Autonomy", "to be self-determined and independent"],
    ["Beauty", "to appreciate beauty around me"],
    ["Caring", "to take care of others"],
    ["Challenge", "to take on difficult tasks and problems"],
    ["Change", "to have a life full of change and variety"],
    ["Comfort", "to have a pleasant and comfortable life"],
    ["Commitment", "to make enduring, meaninful commitments"],
    ["Compassion", "to feel and act on concern for others"],
    ["Contribution", "to make a lasting contribution in the world"],
    ["Cooperation", "to work collaboratively with others"],
    ["Courtesy", "to be considerate and polite toward others"],
    ["Creativity", "to have new and original ideas"],
    ["Dependability", "to be reliable and trustworthy"],
    ["Duty", "to carry out my duties and obligations"],
    ["Ecology", "to live in harmony with the environment"],
    ["Excitement", "to have a life full of thrills and stimulation"],
    ["Faithfulness", "to be loyal and true in relationships"],
    ["Fame", "to be known and recognized"],
    ["Family", "to have a happy, loving family"],
    ["Fitness", "to be physically fit and strong"],
  ];

  return (
    <div>
      <CardSort data={words} />
    </div>
  );
};

export default App;
