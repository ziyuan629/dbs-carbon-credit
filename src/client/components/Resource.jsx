import React from 'react';
import resimg from '../asset/images/resource1.png';
import resimg2 from '../asset/images/resource2.png';
import Aux from './Aux';

export default function Resource() {
  return (
    <Aux>
      <img alt="" src={resimg} />
      <img alt="" src={resimg2} />
      <h3>Get rewarded for sustainable spending</h3>
      <p>
        Mint by DBS Bank is a rewards ecosystem that offers you discounts for
        sustainable and impactful purchases.
      </p>
    </Aux>
  );
}
