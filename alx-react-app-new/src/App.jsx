import React from "react";
import "./App.css";

import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter"; // Import the Counter component

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <Counter /> {/* Add the Counter component here */}
      <Footer />
      <WelcomeMessage />
    </>
  );
}

export default App;
