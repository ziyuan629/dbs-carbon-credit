import React from 'react';
import { Link } from 'react-router-dom';
import classes from './EarnAirbnb.css';
import logoAirbnb from '../asset/images/LogoAirbnb.png';
import logoDBS from '../asset/images/LogoDBS.png';
import bg from '../asset/images/bgHead.png';
import NavBar from '../components/NavBar/NavBar';
import WaterImg from '../asset/images/water.png';

export default function EarnAirbnbLanding() {
  return (
    <div>
      <div className={classes.BgBoard}>
        <img alt="" src={bg} />
      </div>
      <NavBar />
      <div className={classes.BgTopBoard}>
        <p>
          > <Link to="/earn"> Back</Link>
        </p>

        <h3>Airbnb water challenge</h3>
        <img alt="" src={logoAirbnb} />
        <span className={classes.VertBar} />
        <img alt="" src={logoDBS} />
        <span className={classes.CardLabelActive}>Recommended for you</span>
        <span className={classes.CardLabelInactive}>Water</span>
        <span className={classes.CardLabelInactive}>Travel</span>
        <p>
          Earn points for every litre of your stay's water usage under the local
          average.
        </p>
        <h4>Begin this challenge</h4>
        <p>Createan account with DBS to join and start earning SusTokens</p>

        <button disabled>Apply now</button>
        <hr />
        <h4>How it works</h4>
        <p>1. Enter your Airbnb booking reference number</p>
        <p>2. Try to use as little water as possible during your stay</p>
        <p>
          3. On check-out, the smart metre will submit your water usage, and
          we'll calculate your per person water usage
        </p>
        <p>
          4. If your water usage is below the suburb's average, you'll receive 1
          point for every 10 litres you've saved
        </p>
        <p>
          5. If you earn the champion title, i.e. lowest water usage, in the
          month, we'll triple your points earn
        </p>
      </div>

      <div className={classes.BgBottBoard}>
        <h4>Why save water?</h4>

        <p>
          With a limited supply of water, it is crucial that we use it wisely
          and care for it properly.
        </p>
        <p>Some of the reasons why we should conserve water:</p>
        <p>• help protect and preserve our environment (including wildlife)</p>
        <p>• minimise the effects of drought and water shortages</p>
        <p>
          • save energy and money – saving water will reduce your water and
          energy bills
        </p>
        <p>
          • recreational activities from water sports to gardens and public
          parks
        </p>
        <p>
          • build safe and beautiful communities – firefighters, street cleaners
          and hospitals (to name a few) all rely on large quantities of water.
        </p>

        <div className={classes.Card2}>
          <img alt="" src={WaterImg} />
          <p>
            Target 155 is a water efficiency program encouraging Melbournians to
            limit water consumption to 155 litres per person per day.
            <u> Learn more</u>
          </p>
          <h4>How to save water</h4>

          <p>• Install a water-efficient showerhead</p>
          <p>• Keep showers short and sweet</p>
          <p>• Collect rain water</p>
          <p>• Purchase water-efficient appliances and use them wisely</p>
          <p>• Look for the Smart Approved WaterMark</p>
          <p>• Install a dual flush toilet</p>
          <p>Recycle greywater</p>
        </div>
      </div>
    </div>
  );
}
