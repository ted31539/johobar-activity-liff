import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

export const Space = styled(Box)((props) => ({
  ...props,
}));

export const flexAlignItemsCenter = { display: "flex", alignItems: "center" };

export const blink = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
