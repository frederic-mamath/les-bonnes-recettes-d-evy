import { Recipe } from "models/Recipe";

export const MOCKED_RECIPES: Record<string, Recipe> = {
  "894ea07e-e77b-4114-9767-9b772d380065": {
    id: "894ea07e-e77b-4114-9767-9b772d380065",
    name: "Oeufs de cent ans",
    category: "starter",
    ingredients: [],
    instructions: [],
    cookingDurationInMillis: 1000 * 60 * 10,
    restDurationInMillis: 1000 * 60 * 10,
    preparationDurationInMillis: 1000 * 60,
  },
  "61d80433-a26e-4964-a95b-20a7b489f5ec": {
    id: "61d80433-a26e-4964-a95b-20a7b489f5ec",
    name: "Zha Jiang Mian",
    category: "dish",
    ingredients: [],
    instructions: [],
    cookingDurationInMillis: 1000 * 60 * 10,
    restDurationInMillis: 1000 * 60 * 10,
    preparationDurationInMillis: 1000 * 60,
  },
};
