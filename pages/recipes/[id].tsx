import { useRouter } from "next/router";

import { Recipe } from "models/Recipe";
import { GetStaticPaths, GetStaticProps } from "next";
import { Duration } from "luxon";

const recipes: Record<string, Recipe> = {
  "894ea07e-e77b-4114-9767-9b772d380065": {
    id: "894ea07e-e77b-4114-9767-9b772d380065",
    name: "Oeufs de cent ans",
    category: "starter",
    ingredients: [],
    instructions: [],
    cookingDuration: Duration.fromMillis(1000 * 60 * 10),
    restDuration: Duration.fromMillis(1000 * 60 * 10),
    preparationDuration: Duration.fromMillis(1000 * 60),
  },
  "61d80433-a26e-4964-a95b-20a7b489f5ec": {
    id: "61d80433-a26e-4964-a95b-20a7b489f5ec",
    name: "Zha Jiang Mian",
    category: "dish",
    ingredients: [],
    instructions: [],
    cookingDuration: Duration.fromMillis(1000 * 60 * 60),
    restDuration: Duration.fromMillis(1000 * 60 * 10),
    preparationDuration: Duration.fromMillis(1000 * 60),
  },
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Object.values(recipes).map((recipe: Recipe) => ({
    params: { id: recipe.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const { params = {} } = context;

  const { id: recipeId } = params;

  if (!recipeId || typeof recipeId !== "string")
    return {
      props: { recipe: undefined },
    };

  const recipe = recipes[recipeId];

  return {
    props: { recipe },
  };
};

interface Props {
  recipe: Recipe;
}

const RecipePage = (props: Props) => {
  const { recipe } = props;
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <h2>{recipe.category}</h2>
    </div>
  );
};

export default RecipePage;
