import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import RecipeDetails from "./components/RecipeDetails";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

function RecipeDetailsWrapper() {
  // To extract the :id param from URL and pass as prop to RecipeDetails
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
}
