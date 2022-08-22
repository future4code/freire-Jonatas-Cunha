import Router from "./router/Router";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeMui } from "./constants/ThemeMui";

function App() {
  return (
    <ThemeProvider theme={ThemeMui}>
      <GlobalStyle/>
      <Router />
    </ThemeProvider>

  );
}

export default App;
