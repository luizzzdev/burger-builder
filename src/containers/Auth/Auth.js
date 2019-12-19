import React from 'react';
import classes from './Auth.module.scss';
import { Route, Switch } from 'react-router-dom';
import { AuthForm } from './AuthForm/AuthForm';
import { Button } from '../../components/UI/Button/Button';
import { AuthService } from '../../services/auth';

export const Auth = props => {
  const defaultRoute = props.match.path;
  const signUpRoute = defaultRoute + '/signup';

  const goToSignIn = () => props.history.push(defaultRoute);
  const goToSignUp = () => props.history.push(signUpRoute);

  const onSignInHandler = props => {
    AuthService.signIn(props);
  };

  const onSignUpHandler = props => {
    AuthService.signUp(props);
  };

  return (
    <div className={classes.Auth}>
      <div>
        <Button primary clicked={goToSignIn}>
          Sign In
        </Button>
        <Button primary clicked={goToSignUp}>
          Sign Up
        </Button>
      </div>

      <Switch>
        <Route
          path={signUpRoute}
          render={() => <AuthForm title="Sign Up" onSubmit={onSignUpHandler} />}
        />
        <Route
          path={defaultRoute}
          render={() => <AuthForm title="Sign In" onSubmit={onSignInHandler} />}
        />
      </Switch>
    </div>
  );
};
