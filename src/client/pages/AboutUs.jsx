import React, { Component } from 'react';
import classes from './about.css';
import introimg from '../asset/images/intro.png';

import Step0 from '../components/Introtwo';
import Step1 from '../components/onEarn';
import Step2 from '../components/Redeem';
import Step3 from '../components/Resource';
import Step4 from '../components/Security';

class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    };
  }

  changeStep = () => {
    this.setState({ step: (this.state.step + 1) % 5 });
  };

  skip = () => {
    console.log(this.props);
    this.setState({ step: 0 });
    this.props.history.push('/');
  };

  render() {
    let component = null;
    switch (this.state.step) {
      case 0:
        component = <Step0 />;
        break;
      case 1:
        component = <Step1 />;
        break;
      case 2:
        component = <Step2 />;
        break;
      case 3:
        component = <Step3 />;
        break;
      case 4:
        component = <Step4 />;
        break;
      default:
        component = <h1>test this</h1>;
    }
    return (
      <div className={classes.BG}>
        <div className={classes.BgBoard}>
          {component}
          <div className={classes.Row}>
            {this.state.step == 4 ? null : (
              <button onClick={this.changeStep}>Next</button>
            )}
            <span className={classes.Skip} onClick={this.skip}>
              {this.state.step == 4 ? 'Return' : 'Skip'}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
