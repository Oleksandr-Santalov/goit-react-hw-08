import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const Loader = () => {
  return (
    <Typography
      sx={{ display: "flex", justifyContent: "center", marginTop: 20 }}
    >
      Loading...
      <CircularProgress />
    </Typography>
  );
};
