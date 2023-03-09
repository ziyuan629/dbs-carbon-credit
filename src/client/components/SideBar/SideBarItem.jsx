import React from 'react';
import classes from './SideBarItem.css';

const SideBarItem = props => (
  <div>
    <div className={classes.Item}>{props.children}</div>
  </div>
);

export default SideBarItem;
