import Box from "@mui/material/Box";

import ToolBar from "src/components/ToolBar";
import CopyRight from "src/components/CopyRight";

import { pageSx } from "./style";

export default function Page({
  children,
  showToolBar = true,
  showCopyRight = true,
}) {
  return (
    <Box sx={pageSx}>
      {showToolBar ? <ToolBar /> : <></>}
      {children}
      {showCopyRight ? <CopyRight /> : <></>}
    </Box>
  );
}
