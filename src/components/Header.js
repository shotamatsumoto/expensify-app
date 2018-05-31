import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/components/Header.scss';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName={styles.isActive} exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName={styles.isActive}>Create Expense</NavLink>
  </header>
);

export default Header;
