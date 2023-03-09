import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import './Links.css';

/*
const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``
*/

class Links extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/intro" className="links">
          Intro
        </Link>
        <Link to="/card" className="links">
          Cards
        </Link>
        <Link to="/about" className="links">
          About Us
        </Link>
      </React.Fragment>
    );
  }
}

export default Links;
