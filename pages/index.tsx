import { Stack } from "@mui/system";
import RecipeCard from "components/RecipeCard";
import { MOCKED_RECIPES } from "mocks/recipes";

const Home = () => {
  const recipes = Object.values(MOCKED_RECIPES);

  return (
    <Stack>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          category={recipe.category}
          name={recipe.name}
          pictureUrl={recipe.pictureUrl}
        />
      ))}
    </Stack>
  );
};

export default Home;
