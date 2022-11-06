import { Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";

interface Props {
  name: string;
  category: string;
  pictureUrl: string;
}

const RecipeCard = (props: Props) => {
  const { name, category, pictureUrl } = props;

  return (
    <Card>
      <Stack>
        <Image src={pictureUrl} height={64} width={64} alt={name} />
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body2">{category}</Typography>
      </Stack>
    </Card>
  );
};

export default RecipeCard;
