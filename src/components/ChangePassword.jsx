/* eslint-disable no-alert */
import React, { useCallback } from 'react';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { auth } from '../firebase/fb-configuration';
import '../styles/App.scss';

const RecoverPassword = () => {
  const handlePassword = useCallback(
    async (event) => {
      event.preventDefault();
      const { email } = event.target.elements;
      try {
        await
        auth.sendPasswordResetEmail(email.value);
        Swal.fire({
          title: 'Realizado',
          text: 'Revise su correo',
          icon: 'success',
          confirmButtonColor: '#D04A02',
        });
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'No hay ningún registro de usuario que corresponda a este correo electrónico.',
          icon: 'warning',
          confirmButtonColor: '#D04A02',
        });
      }
    },
    [],
  );
  return (
    <div className="recoverPassword">
      <div className="header-recover">
        <h1> Cambiar Contraseña</h1>
        <p>Ingrese la dirección de correo electrónico asociada a su cuenta:</p>
      </div>
      <form onSubmit={handlePassword}>
        <div className="div-input">
          <MdEmail />
          <label htmlFor="email">
            <input name="email" type="email" placeholder="email" />
          </label>
        </div>
        <button type="submit" className="recuperar">Cambiar Contraseña</button>
      </form>
      <Link to="/login" className="return-login"><AiOutlineArrowLeft /></Link>
    </div>
  );
};
export default RecoverPassword;
