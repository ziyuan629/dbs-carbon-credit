import React from 'react';
import introimg from '../asset/images/intro.png';
import Aux from './Aux';

export default function Introtwo() {
  return (
    <Aux>
      <img alt="" src={introimg} />
      <h3>Transparent reports on the impact of your spends</h3>
      <p>
        Learn about the positive impact of your spend. We provide 100%
        transparent information, powered by blockchain.
      </p>
    </Aux>
  );
}
