import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import RecipeDetail from "./components/RecipeDetail"; // <-- Ensure this file exists

function App() {
  return (
    <Router>
      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
