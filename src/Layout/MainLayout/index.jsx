import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

import { sx } from "./style";

const MainLayout = () => {
  return (
    <Box sx={sx}>
      <Outlet />
    </Box>
  );
};

export default MainLayout;
