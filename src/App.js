import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [useLower, setUseLower] = useState(true);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "";
    if (useLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (useUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNumbers) chars += "0123456789";
    if (useSymbols) chars += "!@#$%^&*()-_=+[]{}|;:,.<>?/";

    if (!chars) {
      setPassword("⚠️ Select at least one option");
      return;
    }

    let pwd = "";
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pwd);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>

      <div className="display">
        <span>{password || "Your password will appear here"}</span>
        {password && <button onClick={copyToClipboard}>Copy</button>}
      </div>

      <label>
        Length: {length}
        <input
          type="range"
          min="4"
          max="64"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </label>

      <div className="options">
        <label>
          <input
            type="checkbox"
            checked={useLower}
            onChange={() => setUseLower(!useLower)}
          />
          Lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={useUpper}
            onChange={() => setUseUpper(!useUpper)}
          />
          Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={() => setUseNumbers(!useNumbers)}
          />
          Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={useSymbols}
            onChange={() => setUseSymbols(!useSymbols)}
          />
          Symbols
        </label>
      </div>

      <button className="generate" onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  );
}

export default App;
