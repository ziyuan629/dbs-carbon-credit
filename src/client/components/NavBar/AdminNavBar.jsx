import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Avatar from '../../asset/AdminAvatar.png';
import UserProf from '../../asset/AdminProf.png';
import classes from './NavBar.css';

export default function AdminNavBar() {
  return (
    <div className={classes.NavBar}>
      <Logo />
      <span className={classes.Title}>SusToken</span>
      <div className={classes.LinkBar}>
        <Link to="/adminauth">
          <span className={classes.Link}>Dashboard</span>
        </Link>
        <Link to="/earn">
          <span className={classes.Link}>Earn</span>
        </Link>
        <Link to="/about">
          <span className={classes.Link}>About</span>
        </Link>
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
