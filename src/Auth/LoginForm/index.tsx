import { connect } from 'react-redux';
import { Dispatch } from 'redux';

/* Import RootStoreState */
import { RootStoreState } from 'src/rootReducer';

/* Import module files */
import * as actions from 'src/Auth/actions';
import { getAccessToken } from 'src/Auth/selectors';
import { AuthError } from 'src/Auth/types';

/* Import pure component */
import LoginForm from './pure';


/**
 * Interface for action callbacks that the container exposes to the component.
 * The component's `this.props` is typed `Props & Actions`.
 */
export interface Actions {
  onLogin: (email: string, password: string) => void;
}

export interface Props {
  isLoggedIn: boolean;
  error: Nullable<AuthError>;
}

/** Populate the Props from the store state. */
const mapStateToProps = (state: RootStoreState): Props => {
  return {
    isLoggedIn: Boolean(getAccessToken(state)),
    error: state.auth.error,
  };
};

/** Populate the Actions with the callbacks for the component. */
const mapDispatchToProps = (dispatch: Dispatch): Actions => ({
  onLogin: (email, password) => {
    dispatch(actions.loginRequest.started({ email, password }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
