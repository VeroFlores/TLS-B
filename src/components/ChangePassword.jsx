/* eslint-disable no-alert */
import React, { useCallback } from 'react';
import { auth } from '../firebase/fb-configuration';

const RecoverPassword = () => {
  const handlePassword = useCallback(
    async (event) => {
      event.preventDefault();
      const { email } = event.target.elements;
      try {
        await
        auth.sendPasswordResetEmail(email.value);
      } catch (error) {
        alert(error);
      }
    },
    [],
  );
  return (
    <div>
      <h1> RecoverPassword</h1>
      <form onSubmit={handlePassword}>
        <label htmlFor="email">
          Email
          <input name="email" type="email" placeholder="email" />
        </label>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};
export default RecoverPassword;
