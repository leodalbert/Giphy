import { createMuiTheme } from '@material-ui/core/styles';

// Material Ui Color Scheme
const theme = createMuiTheme({
  palette: {
    primary: {
      // Light Grey
      main: '#2ec4f1',
    },
    secondary: {
      // black
      main: '#000000',
      light: '#ffffff',
    },
  },
  spacing: 3,
  overrides: {},
});

export default theme;
