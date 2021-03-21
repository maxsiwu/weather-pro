import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ActiveLink from '../ActiveLink';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: 'white',
    },
}));

function NavBar() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.root} elevation={1}>
        <Toolbar>
            <Box display="flex" justifyContent="space-between" width="100%">
                <Typography variant="h5" color="primary">
                    <i className="fas fa-rainbow"></i>&nbsp;
                    <b>WeatherPro</b>
                </Typography>
                <Box display="flex">
                    <ActiveLink href="/">Home</ActiveLink>
                    <ActiveLink href="/about">About</ActiveLink>
                    <ActiveLink href="/users">Users</ActiveLink>
                    <ActiveLink href="/api/users">API Users</ActiveLink>
                </Box>
            </Box>
        </Toolbar>
      </AppBar>
    );
}

export default NavBar;
