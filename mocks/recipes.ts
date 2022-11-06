import { Recipe } from "models/Recipe";

export const MOCKED_RECIPES: Record<string, Recipe> = {
  "894ea07e-e77b-4114-9767-9b772d380065": {
    id: "894ea07e-e77b-4114-9767-9b772d380065",
    name: "Oeufs de cent ans",
    category: "starter",
    pictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_400/v1613508634/PXL_20201124_183850908.PORTRAIT_qaxreq.jpg",
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
    pictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_400/v1613509187/149990910_1909050255915243_2559880426026161432_n_mxm0mu.jpg",
    ingredients: [],
    instructions: [],
    cookingDurationInMillis: 1000 * 60 * 10,
    restDurationInMillis: 1000 * 60 * 10,
    preparationDurationInMillis: 1000 * 60,
  },
};
