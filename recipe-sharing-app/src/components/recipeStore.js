import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // 🆕 Favorites
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // 🆕 Recommendations
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // 🆕 Search Feature
  searchTerm: "",
  setSearchTerm: (term) =>
    set(() => ({
      searchTerm: term,
    })),
}));

export { useRecipeStore };
