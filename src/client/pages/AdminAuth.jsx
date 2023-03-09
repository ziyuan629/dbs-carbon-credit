import React from "react";
import LogoImg from "../asset/images/LogoDBS34.png";
import classes from "./AdminAuth.css";
import { Link } from "react-router-dom";

export default function AdminAuth() {
  return (
    <div className={classes.BG}>
      <div className={classes.Card}>
        <img alt="" src={LogoImg} />
        <h3>SusToken Partner Portal</h3>
        <p>Partner/Admin name</p>
        <input disabled type="text" name="adminName" value="DBS Partner" />
        <p>Password</p>
        <input disabled type="text" name="password" value="xxxxxxxx" />
        <Link to="/admin">
          <button>Demo Login</button>
        </Link>
      </div>
    </div>
  );
}
