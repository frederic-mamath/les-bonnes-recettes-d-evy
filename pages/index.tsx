import { Stack } from "@mui/system";
import RecipeCard from "components/RecipeCard";
import { MOCKED_RECIPES } from "mocks/recipes";

const Home = () => {
  const recipes = Object.values(MOCKED_RECIPES);

  return (
    <Stack direction="row" gap={4} p={4}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipeId={recipe.id}
          category={recipe.category}
          name={recipe.name}
          pictureUrl={recipe.pictureUrl}
        />
      ))}
    </Stack>
  );
};

export default Home;
