import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import classes from './EarnAirbnb.css';
import logoAirbnb from '../asset/images/LogoAirbnb.png';
import logoDBS from '../asset/images/LogoDBS.png';
import logoDBSSmall from '../asset/images/LogoDBSSmall.png';
import label80Tokens from '../asset/images/label80Tokens.png';
import label480Tokens from '../asset/images/label480Tokens.png';
import bg from '../asset/images/bgHead.png';
import NavBar from '../components/NavBar/NavBar';
import CardMerim from '../asset/images/cardMerimbula.png';
import CardMel from '../asset/images/cardMelbourne.png';
import CardWater from '../asset/images/watercard.png';
import PlaceMerim from '../asset/images/placeMerimbula.png';
import PlaceMel from '../asset/images/placeMel.png';
import AvatorHist from '../asset/images/AvatarHistory.png';
import firstRecom from '../asset/images/firstRecom.png';
import WaterImg from '../asset/images/water.png';

export default function EarnAirbnb() {
  return (
    <div>
      <div className={classes.BgBoard}>
        <img alt="" src={bg} />
      </div>
      <NavBar />
      <div className={classes.BgTopBoard}>
        <p>
          ><Link to="/earn"> Back</Link>
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
        <p>Multiply your points earn when you come first in that month.</p>
        <h4>Begin this challenge</h4>
        <p>
          Earn points for every litre of your stay’s water usage under the local
          average.
        </p>
        <h4>Airbnb confirmation code</h4>
        <input type="text" name="promotionCode" />
        <button disabled>Submit</button>
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
        <h4>Your past clallenges</h4>

        <Card className={classes.Card}>
          <Card.Img variant="top" src={CardMerim} />
          <Card.Body>
            <div className={classes.CardRow}>
              <h5>60 Monaro Street, Merimbula, NSW</h5>
              <h6>6 Nov - 8 Nov</h6>
              <hr />
              <span>Your avg usage</span>
              <span>160 L / person</span>
              <hr />
              <span>Merimbula avg usage</span>
              <span>240 L / person</span>
              <hr />
              <span>Your position</span>
              <img alt="" src={PlaceMerim} />
              <hr />
              <img alt="" src={AvatorHist} />
              <img alt="" src={firstRecom} />
              <hr />
              <span>Points earned</span>
              <span>
                <img alt="" src={logoDBSSmall} />
                <img alt="" src={label80Tokens} />
              </span>
              <hr />
              <span className={classes.Details}>View details</span>
            </div>
          </Card.Body>
        </Card>
        <Card className={classes.Card}>
          <Card.Img variant="top" src={CardMel} />
          <Card.Body>
            <div className={classes.CardRow}>
              <h5>668 Bourke St 2110, Melbourne, VIC</h5>
              <h6>8 Jul - 15 Jul</h6>
              <hr />
              <span>Your avg usage</span>
              <span>150 L / person</span>
              <hr />
              <span>Melbourne avg usage</span>
              <span>280 L / person</span>
              <hr />
              <span>Your position</span>
              <img alt="" src={PlaceMel} />
              <hr />
              <span>Points earned</span>
              <span>
                <img alt="" src={logoDBSSmall} />
                <img alt="" src={label480Tokens} />
              </span>
              <hr />
              <span className={classes.Details}>View details</span>
            </div>
          </Card.Body>
        </Card>

        <h4>Your positive impact</h4>
        <div className={classes.Impact}>
          <p>
            <b>You've saved 6,510 litre of water</b>
            with your Airbnb stays.
          </p>
          <p>That's enough drinking water for an adult for 3,250 days.</p>
          <p>
            <u>How was this calculated</u>
          </p>
        </div>
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

        <Card className={classes.Card3}>
          <Card.Img variant="top" src={CardWater} />
          <Card.Body>
            <div className={classes.CardRow}>
              <h5>668 Bourke St 2110, Melbourne, VIC</h5>
              <h6>8 Jul - 15 Jul</h6>
              <hr />
              <span>Your avg usage</span>
              <span>150 L / person</span>
              <hr />
              <span>Melbourne avg usage</span>
              <span>280 L / person</span>
              <hr />
              <span>Your position</span>
              <img alt="" src={PlaceMel} />
              <hr />
              <span>Points earned</span>
              <span>
                <img alt="" src={logoDBSSmall} />
                <img alt="" src={label480Tokens} />
              </span>
              <button disabled>Learn more</button>
              <button disabled>Earn tokens per $</button>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/*
      <img alt="" className={classes.airbg} src={airbg} />
      <p className={classes.airtitle}>Airbnb water challenge</p>
      <img alt="" className={classes.vector} src={Vector} />
      <img alt="" className={classes.logosmall} src={logo} />
      <button className={classes.button1}>Recommended for you</button>
      <button className={classes.button2}>Water</button>
      <button className={classes.button3}>Travel</button>
      <p className={classes.airbgtext}>
        Earn points for every litre of your stay’s water usage under the local
        average.
        <br />
        Multiply your points earn when you come first in that month.
{" "}
      </p>
      <img className={classes.airbg1} src={rect} />
      <p className={classes.airtitle1}>Begin this challenge</p>
      <p className={classes.airtext1}>
        Create an account with DBS to join and start earning SusTokens
      </p>
      <button className={classes.button4}>Create account</button>
      <hr className={classes.hr} />
      <p className={classes.airtitle2}>How it works?</p>
      <p className={classes.airtext2}>
        1.Create an account with DBS’ SusToken
{' '}
<br></br>
        <p />
        2.Try to use a little water as possible during your stay
        <br />
{' '}
<p></p>
        3.On check-out, the smart metre will submit your water usage, and we’ll
        calculate your per person water usage
        <br />
{' '}
<p></p>
        4.If your water usage is below the suburb’s average, you’ll receive 1
        point for every 10 litres you’ve saved
        <br />
{' '}
<p></p>
        5.If you earn the champion title, i.e. lowest water usage, in that
        month, we’ll triple your points earn.
      </p>
      <p className={classes.airtext3}>Why save water? </p>
      <p className={classes.airtext4}>
        With a limited supply of water, it is crucial that we use it wisely and
        care for it properly.
        <br />
{' '}
Some of the reasons why we should conserve water:
</p>
      <p className={classes.airtext5}>
        • help protect and preserve our environment (including wildlife)
        <p />
        • minimise the effects of drought and water shortages
        <p />
        • save energy and money – saving water will reduce your water and energy
        bills
        <p />
        • recreational activities from water sports to gardens and public parks
        <p />
• build safe and beautiful communities – firefighters, street
        cleaners and hospitals (to name a few) all rely on large quantities of
        water.
</p>
      <img className={classes.waterimg} src={Waterimg} />
      <p className={classes.airtext6}>
        Target 155 is a water efficiency program encouraging
        <p />
        Melbournians to limit water consumption to 155 litres
        <p />
        per person per day. Learn more
{" "}
      </p>

      <p className={classes.airtitle3}>How to save water</p>

      <p className={classes.airtext7}>
        • Install a water-efficient showerhead
        <p />
        • Keep showers short and sweet
        <p />
        • Collect rain water
        <p />
        • Purchase water-efficient appliances and use them wisely
        <p />
        • Look for the Smart Approved WaterMark
        <p />
• Install a dual flush toilet Recycle greywater
</p> */}
    </div>
  );
}
