import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Avatar from '../../asset/Avatar.png';
import UserProf from '../../asset/UserProf.png';

import classes from './NavBar.css';

export default function NavBar() {
  return (
    <div className={classes.NavBar}>
      <Logo />
      <span className={classes.Title}>SusToken</span>
      <div className={classes.LinkBar}>
        <NavLink to="/adminauth" className={classes.Link}>
          Dashboard
        </NavLink>
        <NavLink
          to="/earn"
          className={classes.Link}
          activeClassName="active"
          activeStyle={{
            color: 'Red',
            textDecoration: 'underline'
          }}
        >
          Earn
        </NavLink>
        <NavLink to="/about" className={classes.Link}>
          About
        </NavLink>
      </div>
      <span className={classes.UserBox}>
        <img alt="" src={Avatar} />
        <span className={classes.ProfileBox}>
          <a href="https://rinkeby.etherscan.io/address/0x79f20fb947144c8c6C2f8684340B05e40aeF3Ce7">
            <img alt="" src={UserProf} />
          </a>
        </span>
      </span>
    </div>
  );
}
