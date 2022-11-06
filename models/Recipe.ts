import { Duration } from "luxon";
export interface Recipe {
  id: string;
  name: string;
  category: "starter" | "dish" | "dessert";
  ingredients: string[];
  instructions: string[];
  cookingDuration: Duration;
  restDuration: Duration;
  preparationDuration: Duration;
}
