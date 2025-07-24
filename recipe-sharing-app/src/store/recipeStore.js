import create from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterRecipes(updatedRecipes, state.searchTerm),
      };
    }),

  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: filterRecipes(recipes, get().searchTerm),
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filterRecipes(state.recipes, term),
    })),
}));

// Helper filter function outside store for reuse
function filterRecipes(recipes, term) {
  if (!term) return recipes;
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
}

export { useRecipeStore };
