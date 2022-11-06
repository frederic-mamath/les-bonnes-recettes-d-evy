import { Stack } from "@mui/system";
import { MOCKED_RECIPES } from "mocks/recipes";

const Home = () => {
  const recipes = Object.values(MOCKED_RECIPES);

  return (
    <Stack>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <div>{recipe.name}</div>
          <div>{recipe.category}</div>
        </div>
      ))}
    </Stack>
  );
};

export default Home;
