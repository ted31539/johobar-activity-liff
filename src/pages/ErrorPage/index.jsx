import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

import Page from "src/Layout/Page";

import { errorPageSx } from "./style";

export default function ErrorPage() {
  return (
    <Page showToolBar={true}>
      <Box sx={errorPageSx}>
        <Alert severity="error"> 抱歉啦，找不到頁面～</Alert>
      </Box>
    </Page>
  );
}
