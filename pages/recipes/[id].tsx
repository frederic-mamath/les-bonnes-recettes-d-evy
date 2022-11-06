import { Recipe } from "models/Recipe";
import { GetStaticPaths, GetStaticProps } from "next";
import { MOCKED_RECIPES } from "mocks/recipes";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Object.values(MOCKED_RECIPES).map((recipe: Recipe) => ({
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

  const recipe = MOCKED_RECIPES[recipeId];

  console.log({ recipe });

  return {
    props: { recipe },
  };
};

interface Props {
  recipe: Recipe;
}

const RecipePage = (props: Props) => {
  const { recipe } = props;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <h2>{recipe.category}</h2>
    </div>
  );
};

export default RecipePage;
