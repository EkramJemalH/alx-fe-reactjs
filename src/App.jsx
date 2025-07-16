import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
import UserContext from "./components/UserContext";

function App() {
  const userData = {
    name: "Ekram Jemal",
    age: 24,
    bio: "Fitness enthusiast and React learner.",
  };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <Header />
        <MainContent />
        <UserProfile /> {/* No props needed now */}
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
