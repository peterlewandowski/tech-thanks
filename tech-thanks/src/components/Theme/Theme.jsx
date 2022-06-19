import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#424242",
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: grey[700],
    },
    text: {
      primary: grey[300],
      secondary: grey[500]
    },
    divider: "#000",
    action: {
      active: "#000"
    }
  },
});
