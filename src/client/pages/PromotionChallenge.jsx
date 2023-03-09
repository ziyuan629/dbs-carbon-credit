import React from 'react';
import { Link } from 'react-router-dom';
import AdminSideBar from '../components/SideBar/AdminSideBar';
import Aux from '../components/Aux';
import AdminNavBar from '../components/NavBar/AdminNavBar';
import imgChallenges from '../asset/promotions/challenges.png';

import classes from './PromotionChallenge.css';

export default function PromotionChallenge() {
  return (
    <Aux>
      <AdminNavBar />
      <AdminSideBar />
      <div className={classes.Content}>
        <div className={classes.NavLine}>
          <Link to="/admin">Promotions </Link>/
          <Link to="/admin/promotions"> Create new </Link>/ Untitled challenge
          promotion
        </div>
        <div className={classes.Challenge}>
          <div className={classes.ChaLine}>ID</div>
          <span className={classes.ChaSpan80}>
            <input
              type="text"
              disabled
              name="promotionID"
              value="5BAA61E4C9B93F3F0682250B6CF8331B7EE68FD8 "
            />
          </span>
          <p className={classes.FakeLink}>Copy</p>
          <div className={classes.ChaLine}>Promotion name</div>
          <span className={classes.ChaSpan80}>
            <input
              type="text"
              name="promotionName"
              value="untitled challenge promotion"
            />
          </span>
          <p>Preview page</p>
          <div className={classes.ChaLine}>Challenge type</div>
          <span className={classes.ChaSpan80}>
            <select>
              <option value="volvo">Save water</option>
            </select>
          </span>
          <div className={classes.ChaLine}>Reward tokens per litre saved</div>
          <span className={classes.ChaSpan80}>
            <input
              style={{ width: '50%' }}
              type="text"
              name="rewardToken"
              value="1"
            />
            <input
              style={{ width: '50%' }}
              disabled
              type="text"
              name="rewardToken"
              value="points per litre saved"
            />
          </span>
          <p>How this works?</p>
          <div className={classes.ChaLine}>Description</div>
          <span className={classes.ChaSpan80}>
            <textarea rows="4" cols="50" />
          </span>
        </div>
        <div className={classes.Publish}>
          <h3>Publish / schedule promo</h3>
          <p>Start date</p> <input type="date" name="user_date" />
          <p>End date</p>
          <input type="date" name="user_date" />
          <Link to="/admin">
            <button className={classes.PrimaryButton}>Save and publish</button>
          </Link>
          <button disabled className={classes.SecondaryButton}>
            Save draft
          </button>
          <div className={classes.Alert}>Archive</div>
          <img src={imgChallenges} />
        </div>
      </div>
    </Aux>
  );
}
