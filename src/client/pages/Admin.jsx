import React from 'react';
import { Link } from 'react-router-dom';
import AdminSideBar from '../components/SideBar/AdminSideBar';
import Aux from '../components/Aux';
import AdminNavBar from '../components/NavBar/AdminNavBar';

import classes from './Admin.css';

export default function Admin() {
  return (
    <Aux>
      <AdminNavBar />
      <AdminSideBar />
      <div className={classes.Content}>
        <div className={classes.ContentHead}>
          <h3>Promotions</h3>
          <Link to="/admin/promotions">
            <button>Create a promotion</button>
          </Link>
        </div>
        <table className={classes.Table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Airbnb water challenge</td>
              <td>Challenge</td>
              <td>Running</td>
              <td>8 Aug, 2019 - 10 Oct, 2019</td>
              <td>Edit unpublish</td>
            </tr>
            <tr>
              <td>New treehouse boutique stay</td>
              <td>Earn tokens per $</td>
              <td>Expired</td>
              <td>7 Jul, 2019 - 8 Aug, 2019</td>
              <td>Edit unpublish</td>
            </tr>
            <tr>
              <td>Oceania specials</td>
              <td>Fixed tokens earn</td>
              <td>Closing soon</td>
              <td>1 Apr, 2019 - 10 Sep, 2019</td>
              <td>Edit unpublish</td>
            </tr>
            <tr>
              <td>Stay in Tiny House</td>
              <td>Earn tokens per $</td>
              <td>Running</td>
              <td>Always on </td>
              <td>Edit unpublish</td>
            </tr>
            <tr>
              <td>Sustainable Airbnb experiences</td>
              <td>Earn tokens per $</td>
              <td>Unpublished</td>
              <td>1 Jan, 2019 - 11 Dec, 2019</td>
              <td>Edit unpublish</td>
            </tr>
          </tbody>
        </table>
        <div className={classes.ContentHead}>
          <span />
          <Link to="/admin/promotions">
            <button>Create a promotion</button>
          </Link>
        </div>
      </div>
    </Aux>
  );
}

/*

        */

/* <table >
          <thead>
            <tr>

            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div> */
