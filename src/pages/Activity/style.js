import { flexAlignItemsCenter } from "src/utils/style";

export const activityFormWrapper = {
  ...flexAlignItemsCenter,
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

export const textFieldSx = { "& input": { background: "white" } };

export const circularProgressSx = {
  color: "blue",
  position: "absolute",
  top: "50%",
  left: "50%",
  marginTop: "-12px",
  marginLeft: "-12px",
};

export const fabSx = {
  position: "absolute",
  left: 10,
  top: 40,
  m: 1,
  color: "white",
};

export const infoFabSx = {
  position: "absolute",
  right: 0,
  m: 1,
  color: "white",
};

export const cardSx = {
  maxWidth: "500px",
  width: "85vw",
  position: "relative",
};

export const infoTitleSx = {
  textAlign: "center",
  maxWidth: "500px",
  width: "85vw",
  wordBreak: "break-all",
};
