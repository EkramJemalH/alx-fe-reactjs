import React from "react";
import Header from "src/components/Header";
import MainContent from "src/components/MainContent";
import UserProfile from "src/components/UserProfile";
import Footer from "src/components/Footer";
import UserContext from "src/components/UserContext";

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
