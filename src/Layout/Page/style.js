import { blink } from "src/utils/style";

export const pageSx = {
  display: "flex",
  flexDirection: "column",
  minWidth: "100vw",
  overflowX: "hidden",
  overflowY: "scroll",
  "& .blink": {
    animation: (theme) =>
      `${blink} 1s ${theme.transitions.easing.easeInOut} infinite`,
  },
};
