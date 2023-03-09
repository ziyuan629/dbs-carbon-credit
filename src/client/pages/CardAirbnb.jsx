import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Trip, Champions } from '../components';
import Aux from '../components/Aux';
import ImageAvatar from '../components/NavBar/Avatar';
import Profile from '../components/Profile';
import ContainedButtons from '../components/ContainedButtons';

class CardAirbnb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTrips: true,
      showCampaign: false
    };
  }

  render() {
    return (
      <Aux>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ImageAvatar />
          </Grid>
          <Grid item xs={6}>
            <Profile />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color={this.state.showTrips ? 'primary' : 'secondary'}
            >
              Trips
            </Button>
            <Button
              variant="contained"
              color={this.state.showCampaign ? 'primary' : 'secondary'}
            >
              Local Camp
            </Button>
          </Grid>
          <Grid item xs={12}>
            {this.state.showTrips ? <Trip /> : null}
            {this.state.showCampaign ? <Champions /> : null}
          </Grid>
        </Grid>
      </Aux>
    );
  }
}

export default CardAirbnb;
/*
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));
const classes = useStyles();

export default function CardAirbnb() {
  return (
    <Aux className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <ImageAvatar />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Profile />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <ContainedButtons>Test</ContainedButtons>
            <ContainedButtons />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Trip />
            <Champions />
          </Paper>
        </Grid>
      </Grid>
    </Aux>
  );
}
*/
