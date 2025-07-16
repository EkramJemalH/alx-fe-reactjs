import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile
        name="Ekram Jemal"
        age={24}
        bio="Fitness enthusiast and React learner."
      />
      <Footer />
    </div>
  );
}

export default App;
