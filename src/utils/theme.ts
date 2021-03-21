import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2c82e6',
        },
        secondary: {
            main: '#616b77',
        },
    },
    typography: {
        fontFamily: [
            'Karla',
            'sans-serif',
        ].join(','),
    }
});
