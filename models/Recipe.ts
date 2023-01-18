export interface Recipe {
  id: string;
  name: string;
  category: "starter" | "dish" | "dessert";
  country:
    | "chinese"
    | "french"
    | "english"
    | "italian"
    | "vietnamese"
    | "spanish"
    | "maghrebian"
    | "indochinese"
    | "french japanese"
    | "american"
    | "japanese"
    | "filipino";
  servingCount: number;
  ingredients: string[];
  instructions: string[];
  cookingDurationInMillis: number;
  restDurationInMillis: number;
  preparationDurationInMillis: number;
  pictureUrl: string;
}
