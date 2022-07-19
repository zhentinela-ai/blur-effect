import { useState } from "react";
import "./App.css";
import Background from "./Background";

const pic = "https://images8.alphacoders.com/110/1101593.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Background />
      <h1>Zhent</h1>
      <div className="card">
        <img
          src="https://images8.alphacoders.com/110/1101593.jpg"
          alt="gojo"
          className="photo"
        />
      <button className="button">Follow</button>
      </div>
    </div>
  );
}

export default App;
