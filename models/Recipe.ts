export interface Recipe {
  id: string;
  name: string;
  category: "starter" | "dish" | "dessert";
  ingredients: string[];
  instructions: string[];
  cookingDurationInMillis: number;
  restDurationInMillis: number;
  preparationDurationInMillis: number;
}
