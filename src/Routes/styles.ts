import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    main: {
      display: 'flex',
      width: '100%',
    },
    loggedInMain: {
      minHeight: 'calc(100vh - 94px)',
    },
    loggedOutMain: {
      minHeight: 'calc(100vh - 30px)',
    },
  };
});

export default useStyles;
