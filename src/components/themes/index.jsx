import { createTheme } from "@mui/material/styles";
import { typography } from "./Typography";
import { palette } from "./Palette";

const theme = createTheme({
  spacing: [0, 4, 8, 12, 16, 20, 24, 32],
  palette,
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;