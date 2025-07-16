import React from "react";

function MainContent() {
  return (
    <main
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h2 style={{ color: "#333" }}>Welcome to the City Guide</h2>
      <p style={{ maxWidth: "600px", margin: "10px auto" }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;
