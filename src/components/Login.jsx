/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { auth } from '../firebase/fb-configuration';
import { AuthContext } from '../Context/Auth';

const Login = (props) => {
  const { history } = props;

  console.log('login');
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await
        auth.signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>LogIn</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
export default Login;
Login.propTypes = {
  history: PropTypes.string.isRequired,
};
