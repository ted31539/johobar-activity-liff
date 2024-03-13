import { flexAlignItemsCenter } from "src/utils/style";

export const errorPageSx = {
  ...flexAlignItemsCenter,
  padding: "1rem",
  background: (theme) => theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  maxWidth: "600px",
  width: "100%",
  minHeight:
    "calc(var(--app-height) - var(--header-height) - var(--toolbar-height))",
  height: "100%",
  margin: "auto",
  zIndex: 1,
  position: "relative",
  " & form": {
    width: "100%",
  },
};
