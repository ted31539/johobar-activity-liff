import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function CopyRight() {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        background: theme.palette.primary.main,
        maxheight: "32px",
        height: "32px",
        borderRadius: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        bottom: 0,
        zIndex: 2,
      }}
      elevation={0}
      square={false}
    >
      <Typography
        variant="caption"
        display="block"
        sx={{ textAlign: "center", color: "white" }}
      >
        Copyright © 2024 Ted. All rights reserved.
      </Typography>
    </Paper>
  );
}
