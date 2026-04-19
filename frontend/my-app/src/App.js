import "./App.css";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("http://localhost:8080/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      });

      const data = await response.json();
      setResult(data.text);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>AI Document Generator</h1>
      <p className="subtitle">
        Generate structured content from any topic using a local LLM
      </p>

      <textarea
        placeholder="Enter a topic (e.g. Artificial Intelligence in healthcare...)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>

      {result && (
        <div className="result">
          <ReactMarkdown>{result}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default App;
