import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider } from "@mui/material";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import Routes from "src/routes";
import { initSressn } from "src/utils/methods";
import LiffProvider from "src/providers/Liff";
import ClientProvider from "src/providers/Client";
import AlertProvider from "src/providers/Alert";
import theme from "src/utils/theme";

import "./App.css";

dayjs.extend(utc);

window.addEventListener("resize", initSressn);
initSressn();

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <AlertProvider>
            <LiffProvider>
              <ClientProvider>
                <Routes />
              </ClientProvider>
            </LiffProvider>
            <CssBaseline />
          </AlertProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </StyledEngineProvider>
  );
}

export default App;
