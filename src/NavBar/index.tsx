import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AuthLogoutButton from 'src/Auth/LogoutButton';
import useStyles from './styles';

interface NavProps {
  isLoggedIn: boolean;
}

function NavBar(props: NavProps) {

  const classes = useStyles({});

  // Return an empty div if the user is not logged in
  if (!props.isLoggedIn) {
    return <div></div>;
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' color='inherit' className={classes.grow}>
            React Max
          </Typography>
          <AuthLogoutButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
