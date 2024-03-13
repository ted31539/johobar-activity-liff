import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";

import { useClient } from "src/Providers/Client";
import Badge from "src/components/Badge";

export default function ToolBar({ showMenu = false }) {
  const theme = useTheme();
  const { client, isAuth } = useClient();

  console.log({ theme });

  return (
    <Box sx={{ flexGrow: 1, zIndex: 0 }}>
      <AppBar
        className="app"
        position="static"
        sx={{
          color: "black",
          background: "nuset",
          height: "var(--header-height)",
          boxShadow: "initial",
        }}
      >
        <Toolbar>
          {showMenu ? (
            <IconButton
              size="large"
              edge="start"
              color="white"
              aria-label="menu"
              sx={{ mr: 2, color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <></>
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white", fontWeight: "900" }}
          >
            🔥 作伙吧！
          </Typography>
          <Badge
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: isAuth ? "" : theme.palette.error.main,
                color: isAuth ? "" : theme.palette.error.main,
              },
            }}
          >
            <Avatar
              alt="avatar"
              src={client?.pictureUrl}
              sx={{ width: 36, height: 36 }}
            />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
