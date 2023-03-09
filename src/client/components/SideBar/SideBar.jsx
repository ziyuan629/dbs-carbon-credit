import React from 'react';

import classes from './SideBar.css';
import Aux from '../Aux';
// import Logo from '../../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const SideBar = props => (
  <div className={classes.SideBar}>
    <div>
      <h3>Filter by</h3>
    </div>
    <div>
      <h4>Categories</h4>
    </div>
    <div>
      <label>
        <input type="checkbox" />
        Energy
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" />
        Food & beverages
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" />
        Health & Wellness
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" />
        Shopping
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" />
        Social good
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" />
        Transport
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" />
        Travel & tourism
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" />
        Water
      </label>
    </div>
    <div>
      <h4>Reward type</h4>
    </div>
    <div>
      <label>
        <input type="checkbox" />
        Bonus tokens
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" />
        Challenges
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" />
        Earn tokens per $
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" />
        Fixed tokens earn
      </label>
    </div>

    <div className={classes.Foot}>
      <div>Powered by</div>
      <svg
        width="34"
        height="35"
        viewBox="0 0 34 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.8482 27.705L18.8399 20.8337C18.8399 20.8337 17.755 19.75 16.5382 19.75C15.3092 19.75 14.2243 20.8337 14.2243 20.8337L6.21851 27.705L6.19285 27.6812L12.9098 19.4875C12.9098 19.4875 13.9665 18.3812 13.9665 17.1212C13.9665 15.8737 12.9098 14.7662 12.9098 14.7662L6.19285 6.56622L6.21851 6.53747L14.2243 13.4162C14.2243 13.4162 15.3092 14.5025 16.5382 14.5025C17.755 14.5025 18.8399 13.4162 18.8399 13.4162L26.8482 6.53747L26.8812 6.57372L20.1508 14.7662C20.1508 14.7662 19.1014 15.8737 19.1014 17.1212C19.1014 18.3812 20.1508 19.4875 20.1508 19.4875L26.8812 27.6787L26.8482 27.705ZM30.5951 17.1212V17.1187C30.5951 14.8975 30.6831 12.9062 32.2933 9.40872C32.7588 8.39122 33.7887 6.90872 32.2713 5.17872C31.0386 3.92122 29.6385 4.12747 28.6954 4.68372C29.2378 3.71872 29.4394 2.27997 28.2079 1.01747C26.5183 -0.530025 25.0645 0.521225 24.0749 0.999975C20.6529 2.65122 18.7165 2.74247 16.5382 2.74247C14.3514 2.74247 12.4125 2.65122 8.99788 0.999975C8.00341 0.521225 6.54348 -0.530025 4.85875 1.01747C3.62728 2.27997 3.83496 3.71872 4.3774 4.68372C3.4318 4.12497 2.02929 3.92122 0.79537 5.17872C-0.720763 6.90872 0.314019 8.39122 0.770936 9.40872C2.39091 12.9062 2.4801 14.8975 2.4801 17.1212C2.4801 19.3512 2.39091 21.3475 0.770936 24.8425C0.314019 25.8525 -0.720763 27.345 0.79537 29.0737C2.02929 30.3275 3.4318 30.12 4.3774 29.57C3.83496 30.5375 3.62728 31.9725 4.85875 33.2225C6.54348 34.7812 8.00341 33.7275 8.99788 33.2487C12.415 31.5987 14.3514 31.5112 16.5382 31.5112C18.7165 31.5112 20.6529 31.5987 24.0737 33.2487C25.0645 33.7275 26.5183 34.7812 28.2079 33.2225C29.4394 31.9725 29.2329 30.5375 28.6929 29.57C29.6385 30.12 31.0386 30.335 32.2713 29.0737C33.7887 27.345 32.7588 25.8525 32.2933 24.8425C30.6831 21.3425 30.5951 19.3512 30.5951 17.1212Z"
          fill="#FF3333"
        />
      </svg>
      <svg width="77" height="32" viewBox="0 0 77 32" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.7224 29.2325C20.4676 28.2263 23.8651 23.4338 23.3019 15.8863C22.7595 8.58503 20.0388 2.84878 12.7941 2.31003C12.7941 2.31003 11.4221 2.20878 10.2725 2.20378C9.03978 2.19503 8.7759 2.15253 8.68427 3.50003C8.52667 6.02128 8.48147 25.6575 8.63907 28.4913C8.65739 28.88 8.69893 29.8125 10.2798 29.9763C13.1704 30.2625 15.5612 30.0325 17.7224 29.2325ZM14.9198 1.06628C21.0503 1.03753 29.1172 5.33753 29.0855 16.08C29.0647 25.4238 22.47 31.1788 16.3798 31.1788L0.914246 31.1825L0.933791 30.8488C1.80364 30.69 2.78101 30.135 2.94349 29.5425C3.45539 27.2913 3.33932 6.69378 3.02901 3.30128C2.93127 2.24003 2.11273 1.55628 1.11949 1.38878L1.08895 1.06628C1.08895 1.06628 13.5466 1.07378 14.9198 1.06628ZM48.8282 23.7975C48.9503 17.3263 44.314 15.61 39.5127 15.3413C39.4125 15.3338 39.4504 15.0913 39.5249 15.0788C41.085 15.015 47.2876 14.28 47.0359 8.21753C46.7843 2.31003 42.4045 2.17753 40.8028 2.15253C39.4956 2.13503 39.2109 2.13503 38.6587 2.16253C37.729 2.20378 37.4969 2.27378 37.5018 3.30628C37.5018 3.43753 37.2978 13.9488 37.1756 21.3388C37.1182 25.355 37.1023 28.4475 37.1023 28.4475C37.1255 29.1838 37.0363 29.93 38.8078 30.015C40.6367 30.1063 42.9946 30.1838 44.6451 29.825C46.1563 29.495 48.7256 28.3625 48.8282 23.7975ZM46.9309 15.0975C54.1426 16.9263 54.5775 22.2525 54.4773 23.75C54.1475 30.4188 48.6205 31.1825 46.3945 31.1825H29.3811L29.4007 30.8463C30.637 30.6725 31.5643 29.98 31.5643 27.7575L31.6645 4.79128C31.6926 2.30128 31.0524 1.54003 29.7049 1.37753L29.6743 1.06628H42.5389C44.9004 1.06628 52.0119 0.586282 52.6179 7.27503C53.0993 12.6275 47.3511 14.8638 46.9309 15.0975ZM74.6721 1.15753L74.9641 1.15503L75.0642 6.52128L74.7429 6.51878C74.2261 4.33378 72.1737 2.27378 68.0578 2.05878C63.1966 1.79753 61.0953 4.76128 61.0635 7.56628C61.0354 11.2938 63.8783 12.0638 68.0895 13.115C70.0736 13.6113 77.4258 14.5925 76.8369 23.045C76.4289 28.9488 71.4468 31.7563 64.3927 31.5338C64.3927 31.5338 61.4618 31.4338 57.3679 30.2725C56.6104 30.0525 56.4088 30.3138 56.1046 30.885L55.7699 30.9025L55.7809 25.1163L56.1046 25.1325C56.2659 25.7188 56.3111 26.81 57.3495 27.735C58.1058 28.4175 59.8834 30.1025 63.7818 30.1463C67.6082 30.1988 70.7797 28.5463 71.2049 24.1538C71.3209 22.9725 71.1988 20.2688 68.6185 19.0363C66.6003 18.0713 60.9963 17.435 58.2805 14.9988C58.2805 14.9988 55.0589 12.7025 55.5671 8.41628C56.2806 2.35878 61.2223 0.843782 65.662 0.751281C65.662 0.751281 69.6338 0.711282 72.798 1.54753C72.798 1.54753 73.5725 1.76253 74.2139 1.51253C74.4742 1.42378 74.5963 1.25753 74.6721 1.15753Z"
          fill="#2F2E41"
        />
      </svg>
    </div>
  </div>
);

export default SideBar;