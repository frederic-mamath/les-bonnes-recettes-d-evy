import { Recipe } from "models/Recipe";
import { GetStaticPaths, GetStaticProps } from "next";
import { MOCKED_RECIPES } from "mocks/recipes";
import { Card, List, ListItem, Stack, Typography } from "@mui/material";
import { Duration } from "luxon";
import Image from "next/image";
import { toCamelCase } from "services/string";

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
    <Stack gap={4} p={3}>
      <Stack direction="row">
        <Stack>
          <Typography variant="h2">{recipe.name}</Typography>
          <Stack direction="row" gap={2}>
            <Typography variant="h3">{recipe.category}</Typography>
            <Typography variant="h3">{recipe.country}</Typography>
          </Stack>
          <Stack direction="row">
            {Duration.fromMillis(recipe.preparationDurationInMillis).toFormat(
              "hh:mm"
            )}
          </Stack>
          <Stack direction="row">
            {Duration.fromMillis(recipe.restDurationInMillis).toFormat("hh:mm")}
          </Stack>
          <Stack direction="row">
            {Duration.fromMillis(recipe.cookingDurationInMillis).toFormat(
              "hh:mm"
            )}
          </Stack>
          <Stack direction="row">
            {Duration.fromMillis(
              recipe.preparationDurationInMillis +
                recipe.restDurationInMillis +
                recipe.cookingDurationInMillis
            ).toFormat("hh:mm")}
          </Stack>
        </Stack>
        <Image
          src={recipe.pictureUrl}
          alt={recipe.name}
          height={256}
          width={256}
          style={{ objectFit: "cover" }}
        />
      </Stack>
      <Stack direction="row" gap={4}>
        <Card sx={{ p: 2 }}>
          <Typography variant="h3">Ingrédients</Typography>
          <List>
            {recipe.ingredients.map((ingredient) => (
              <ListItem key={toCamelCase(ingredient)}>{ingredient}</ListItem>
            ))}
          </List>
        </Card>
        <Card sx={{ p: 2 }}>
          <Typography variant="h3">Instructions</Typography>
          <List>
            {recipe.instructions.map((instruction) => (
              <ListItem key={toCamelCase(instruction)}>{instruction}</ListItem>
            ))}
          </List>
        </Card>
      </Stack>
    </Stack>
  );
};

export default RecipePage;
