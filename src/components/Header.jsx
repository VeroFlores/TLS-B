import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase/fb-configuration';
// import Logo from '../img/pwc-logo.jpg';
import '../styles/Header.scss';

const Header = () => (
  <header className="header__container">
    <div className="logo-logout">
      {/* <NavLink to="/" className="logo"><img src={Logo} alt="pwc" /></NavLink> */}
      <div className="logout">
        <button type="button" onClick={() => auth.signOut()}>Cerrar sesión</button>
        <img src="https://user-images.githubusercontent.com/68167686/110983245-83a4fd00-8337-11eb-82a7-f3ec14ad86ae.jpeg" alt="avatar" />
      </div>
    </div>
    <nav>
      <NavLink activeClassName="activeRoute" activeStyle={{ color: '#ffffff' }} exact to="/">  Registrar consulta </NavLink>
      <NavLink activeClassName="activeRoute" activeStyle={{ color: '#ffffff' }} to="/consultasVigentes">  Consultas vigentes </NavLink>
      <NavLink activeClassName="activeRoute" activeStyle={{ color: '#ffffff' }} to="/consultasHistoricas">  Consultas históricas </NavLink>
      <NavLink activeClassName="activeRoute" activeStyle={{ color: '#ffffff' }} to="/informacion">  Información de interés </NavLink>
    </nav>
  </header>
);
export default Header;
