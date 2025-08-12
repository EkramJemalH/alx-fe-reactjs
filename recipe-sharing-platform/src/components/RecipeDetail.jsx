import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading data:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Loading recipe...</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-purple-500 hover:underline">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
