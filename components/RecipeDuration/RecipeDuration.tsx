import { Stack } from "@mui/material";
import { ReactNode } from "react";
import { Duration } from "luxon";

interface Props {
  durationInMillis: number;
  Icon: ReactNode;
}

const RecipeDuration = (props: Props) => {
  const { durationInMillis, Icon } = props;

  return (
    <Stack direction="row" gap={2}>
      {Icon}
      {Duration.fromMillis(durationInMillis).toFormat("hh:mm")}
    </Stack>
  );
};

export default RecipeDuration;
