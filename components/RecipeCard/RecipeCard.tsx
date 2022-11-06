import { Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

interface Props {
  recipeId: string;
  name: string;
  category: string;
  pictureUrl: string;
}

const RecipeCard = (props: Props) => {
  const { recipeId, name, category, pictureUrl } = props;

  return (
    <Link href={`/recipes/${recipeId}`}>
      <Card sx={{ p: 2 }}>
        <Stack>
          <Image src={pictureUrl} height={64} width={64} alt={name} />
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">{category}</Typography>
        </Stack>
      </Card>
    </Link>
  );
};

export default RecipeCard;
