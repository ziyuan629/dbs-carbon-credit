import React from "react";
import redeemimg from "../asset/images/redeem.png";
import Aux from "./Aux";

export default function Redeem() {
  return (
    <Aux>
      <img alt="" src={redeemimg} />
      <h3>Earn points for choosing a greener lifestyle</h3>
      <p>
        You can earn point by doing Challenges, such as walking to work, or by
        everyday purchases like organic groceries.
      </p>
    </Aux>
  );
}
