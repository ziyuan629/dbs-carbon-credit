import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import SideBar from '../components/SideBar/SideBar';
import NavBar from '../components/NavBar/NavBar';
import Aux from '../components/Aux';
import classes from './Earn.css';
import ImgHeart from '../asset/heart_gray.png';
import ImgAirbnb from '../asset/cards/Airbnb.png';
import ImgQuantas from '../asset/cards/Quantas.png';
import ImgUber from '../asset/cards/Uber.png';
import ImgGrilld from '../asset/cards/Grilld.png';
import ImgRecycMob from '../asset/cards/RecycleMobile.png';
import ImgEnergy from '../asset/cards/Energy.png';
import ImgTelstra from '../asset/cards/Telstra.png';
import ImgSuper from '../asset/cards/FutureSuper.png';
import ImgOfficeworks from '../asset/cards/OfficeWorks.png';

export default function Earn() {
  return (
    <Aux>
      <NavBar />
      <SideBar />
      <div className={classes.Content}>
        <h3>Earn</h3>
        <p>
          Browse over 2,000 ways to earn more Mint rewards points. More added
          everday.
        </p>
        <div className={classes.CardContainer}>
          <Card className={classes.Card}>
            <Card.Img variant="top" src={ImgAirbnb} />
            <Card.Body className={classes.CardBody}>
              <h4>Airbnb water challenges</h4>
              <img src={ImgHeart} />
              <span className={classes.CardLabelActive}>
                Recommended for you
              </span>
              <span className={classes.CardLabelInactive}>Water</span>
              <span className={classes.CardLabelInactive}>Travel</span>
              <p>
                Earn points for every litre of your stay's water usage under the
                local average.
              </p>
              <p>
                Multiply your points earn when you come first in that month.
              </p>
              <Link to="/earn/airbnblanding">
                <button className={classes.CardPrimaryButton}>
                  Learn more
                </button>
              </Link>
              <Link to="/earn/airbnb">
                <button className={classes.CardPrimaryButton}>
                  Save water & earn
                </button>
              </Link>
            </Card.Body>
          </Card>
          <Card className={classes.Card}>
            <Card.Img variant="top" src={ImgQuantas} />
            <Card.Body className={classes.CardBody}>
              <h4>Fly carbon neutral with Qantas</h4>
              <img src={ImgHeart} />

              <span className={classes.CardLabelInactive}>Travel</span>

              <p>
                Choose Fly Carbon Neutral when you book through qnatas.com and
                earn the same Mint points as your Qantas Frequent Flyer Points.
              </p>
              <button disabled className={classes.CardDisabled}>
                Learn more
              </button>
              <button disabled className={classes.CardDisabled}>
                Earn tokens per $
              </button>
            </Card.Body>
          </Card>
          <Card className={classes.Card}>
            <Card.Img variant="top" src={ImgUber} />
            <Card.Body className={classes.CardBody}>
              <h4>Rideshare with UberPool</h4>
              <img src={ImgHeart} />
              <span className={classes.CardLabelInactive}>Transport</span>
              <p>
                Earn Mint Points per dollar spent on every UberPool rideshare
                trips
              </p>
              <button disabled className={classes.CardDisabled}>
                Learn more
              </button>
              <button disabled className={classes.CardDisabled}>
                Earn tokens per $
              </button>
            </Card.Body>
          </Card>
          <Card className={classes.Card}>
            <Card.Img variant="top" src={ImgGrilld} />
            <Card.Body className={classes.CardBody}>
              <h4>Even carnivores deserve a day off</h4>
              <img src={ImgHeart} />
              <span className={classes.CardLabelInactive}>
                Food & beverages
              </span>
              <p>
                Take a break from meat and enjoy burgers that are use 99% less
                water and 90% less green house gas emission. Earn bonus points
                when you purchase any of the Grill'd Beyond Burger range.
              </p>
              <button disabled className={classes.CardDisabled}>
                Learn more
              </button>

              <button disabled className={classes.CardDisabled}>
                Earn tokens per $
              </button>
            </Card.Body>
          </Card>
          <Card className={classes.Card}>
            <Card.Img variant="top" src={ImgRecycMob} />
            <Card.Body className={classes.CardBody}>
              <h4>Recycle your old iPhone</h4>
              <img src={ImgHeart} />
              <span className={classes.CardLabelInactive}>Electronics</span>
              <p>
                Trade in your old iPhone to any Apple store and earn Mint points
                per dollar value of your phone.
              </p>
              <button disabled className={classes.CardDisabled}>
                Learn more
              </button>
              <button disabled className={classes.CardDisabled}>
                Earn tokens per $
              </button>
            </Card.Body>
          </Card>
          <Card className={classes.Card}>
            <Card.Img variant="top" src={ImgEnergy} />
            <Card.Body className={classes.CardBody}>
              <h4>Renewable energy with Powershop</h4>
              <img src={ImgHeart} />
              <span className={classes.CardLabelInactive}>Energy</span>
              <p>
                Switch to Powershop to support renewable energy. Earn points for
                every dollar you pay on your bills, plus get 10,000 points when
                you sign up.
              </p>
              <button disabled className={classes.CardDisabled}>
                Learn more
              </button>
              <button disabled className={classes.CardDisabled}>
                +10,000 tokens
              </button>
            </Card.Body>
          </Card>
          <Card className={classes.Card}>
            <Card.Img variant="top" src={ImgTelstra} />
            <Card.Body className={classes.CardBody}>
              <h4>Telstra - Join a telco that cares</h4>
              <img src={ImgHeart} />
              <span className={classes.CardLabelInactive}>Ad</span>
              <p>
                Fast, reliable nbn plans. It's why more Australians choose us.
              </p>
              <button disabled className={classes.CardDisabled}>
                Learn more
              </button>
              <button disabled className={classes.CardDisabled}>
                Join today
              </button>
            </Card.Body>
          </Card>
          <Card className={classes.Card}>
            <Card.Img variant="top" src={ImgSuper} />
            <Card.Body className={classes.CardBody}>
              <h4>Invest in an ethical future with FutureSuper</h4>
              <img src={ImgHeart} />
              <span className={classes.CardLabelInactive}>Social good</span>
              <span className={classes.CardLabelInactive}>Finance</span>
              <p>
                Invest in a fossil fule-free, ethically screened and high
                performing super. Earn 100,000 points when you sign up.
              </p>
              <button disabled className={classes.CardDisabled}>
                Learn more
              </button>
              <button disabled className={classes.CardDisabled}>
                +100,000 tokens
              </button>
            </Card.Body>
          </Card>
          <Card className={classes.Card}>
            <Card.Img variant="top" src={ImgOfficeworks} />
            <Card.Body className={classes.CardBody}>
              <h4>
                Earn bonus points with OfficeWork's recycled products range
              </h4>
              <img src={ImgHeart} />
              <span className={classes.CardLabelInactive}>Shopping</span>
              <p>
                Receive 10% discount, plus earn bonus points per $, when you
                purchase any of OfficeWork's recycled products range.
              </p>
              <button disabled className={classes.CardDisabled}>
                Learn more
              </button>
              <button disabled className={classes.CardDisabled}>
                Earn tokens per $
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Aux>
  );
}
