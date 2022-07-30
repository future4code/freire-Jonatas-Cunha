import { createTheme } from '@mui/material/styles';
import { TertiaryTextColor } from "./Colors";

export const ThemeMui = createTheme({
    palette: {
      primary: {
        main: TertiaryTextColor
      },
    },
  });