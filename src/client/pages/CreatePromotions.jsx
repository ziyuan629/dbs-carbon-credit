import React from 'react';
import { Link } from 'react-router-dom';
import AdminSideBar from '../components/SideBar/AdminSideBar';
import Aux from '../components/Aux';
import AdminNavBar from '../components/NavBar/AdminNavBar';
import classes from './CreatePromotions.css';
import imgBonusToken from '../asset/promotions/bonusTokens.png';
import imgChallenges from '../asset/promotions/challenges.png';
import imgEarnTokens from '../asset/promotions/earnTokens.png';
import imgFixedToken from '../asset/promotions/fixedTokens.png';

export default function CreatePromotions() {
  return (
    <Aux>
      <AdminNavBar />
      <AdminSideBar />
      <div className={classes.PageContent}>
        <div className={classes.NavLine}>
          <Link to="/admin">Promotions </Link>
/ Create new
</div>
        <h3>Create a new promotion</h3>
        <div className={classes.CardContainer}>
          <div className={classes.Card}>
            <h4>Bonus tokens</h4>
            <img src={imgBonusToken} />
            <button disabled className={classes.InactiveButton}>
              Create
            </button>
          </div>
          <div className={classes.Card}>
            <h4>Challenges</h4>
            <img src={imgChallenges} />
            <Link to="/admin/promotions/challenge">
              <button className={classes.ActiveButton}>Create</button>
            </Link>
          </div>
          <div className={classes.Card}>
            <h4>Earn tokens per $</h4>
            <img src={imgEarnTokens} />
            <button disabled className={classes.InactiveButton}>
              Create
            </button>
          </div>
          <div className={classes.Card}>
            <h4>Fixed tokens earn</h4>
            <img src={imgFixedToken} />
            <button disabled className={classes.InactiveButton}>
              Create
            </button>
          </div>
        </div>
        <div className={classes.BatchProc}>
          <button disabled className={classes.InactiveButton}>
            Upload CSV
          </button>
          <button disabled className={classes.InactiveButton}>
            View API docs
          </button>
          <h4>Batch import promotions</h4>
        </div>
      </div>
    </Aux>
  );
}
