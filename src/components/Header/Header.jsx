import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'components/Container/Container.jsx';
import 'components/Header/Header.scss';

const Header = () => (
  <div className="Header">
    <Container>
      <img
        src="/img/react.svg"
        className="Header-logo"
        alt="hatch-react"
        width="80"
      />
      <h1 className="Header-title">hatch-react</h1>
      <p className="Header-subTitle">A React starter kit</p>
      <nav className="Header-navigation">
        <NavLink
          exact
          to="/"
          className="Header-navigation-item"
          activeClassName="Header-navigation-item--isActive"
        >Home</NavLink>
        <NavLink
          exact
          to="/counter"
          className="Header-navigation-item"
          activeClassName="Header-navigation-item--isActive"
        >Counter Example</NavLink>
        <NavLink
          exact
          to="/animation"
          className="Header-navigation-item"
          activeClassName="Header-navigation-item--isActive"
        >Animation Example</NavLink>
      </nav>
    </Container>
  </div>
);

export default Header;
