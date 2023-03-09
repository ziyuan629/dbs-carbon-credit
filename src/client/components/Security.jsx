import React from 'react';
import securityimg from '../asset/images/security.png';
import Aux from './Aux';

export default function Security() {
  return (
    <Aux>
      <img alt="" src={securityimg} />
      <h3>Your privacy is our number 1 priority</h3>
      <p>
        We work hard to protect your privacy and manage the data to bring better
        rewards and environmental impact.
      </p>
    </Aux>
  );
}
