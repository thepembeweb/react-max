import { createMuiTheme } from '@material-ui/core/styles';

/*
 * See this for properties which can be edited in the theme object
 * https://material-ui.com/customization/default-theme/
 */

const borderRadius = 4;

const theme = createMuiTheme({
  shape: {
    borderRadius: borderRadius,
  },
  typography: {
    useNextVariants: true,
    'fontFamily': '\'Source Sans Pro\', \'Helvetica\', \'Arial\', sans-serif',
    'fontWeightLight': 300,
    'fontWeightMedium': 500,
    'fontWeightRegular': 400,
  },
});

export default theme;
