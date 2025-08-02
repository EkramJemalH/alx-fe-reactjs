// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import RecipeDetail from "./components/RecipeDetail"; // ✅ Create this if not yet done

function App() {
  return (
    <Router>
      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />

        {/* ✅ Route Configuration */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>

        <hr />
        <FavoritesList />
        <hr />
        <RecommendationsList />
      </div>
    </Router>
  );
}

export default App;
