import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './app.css';
import AboutUs from '../pages/AboutUs';
import Earn from '../pages/Earn';
import EarnAirbnb from '../pages/EarnAirbnb';
import EarnAirbnbLanding from '../pages/EarnAirbnbLanding';
import Admin from '../pages/Admin';
import CreatePromotions from '../pages/CreatePromotions';
import PromotionChallenge from '../pages/PromotionChallenge';
import AdminAuth from '../pages/AdminAuth';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="1024">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc' }}>
            <Switch>
              <Route path="/earn" exact component={Earn} />
              <Route path="/about" exact component={AboutUs} />
              <Route path="/earn/airbnb" exact component={EarnAirbnb} />
              <Route
                path="/earn/airbnblanding"
                exact
                component={EarnAirbnbLanding}
              />
              <Route path="/adminauth" exact component={AdminAuth} />
              <Route path="/admin" exact component={Admin} />
              <Route
                path="/admin/promotions"
                exact
                component={CreatePromotions}
              />
              <Route
                path="/admin/promotions/challenge"
                exact
                component={PromotionChallenge}
              />
              <Redirect from="/" to="/earn" />
            </Switch>
          </Typography>
        </Container>
      </React.Fragment>
    </Router>
  );
}
