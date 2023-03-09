import React from 'react';
import classes from './Avatar.css';

const Avatar = props => (
  <svg
    className={classes.Avatar}
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="36"
      height="36"
      rx="18"
      fill="url(#pattern0)"
      stroke="#20C997"
      strokeWidth="2"
    />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0" transform="scale(0.000976562)" />
      </pattern>
      <image
        id="image0"
        width="1024"
        height="1024"
      />
    </defs>
  </svg>
);

export default Avatar;