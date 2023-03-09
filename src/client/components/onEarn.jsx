import React from 'react';
import onearnimg from '../asset/images/onEarn.png';
import Aux from './Aux';

export default function OnEarn() {
  return (
    <Aux>
      <img alt="" src={onearnimg} />
      <h3>Get discounts or spend your points</h3>
      <p>
        Enjoy discounts or spend your Mint points on over 100,000s of products
        or services, from apps to zucchinis.
      </p>
    </Aux>
  );
}
