import React, { Component } from 'react';
import GridContainer from './materialComponents/Grid/GridContainer.jsx';
import GridItem from './materialComponents/Grid/GridItem';

class Header extends Component {
  render() {
    return (
      <GridItem className="unauthenticated-header">
        <h3>App Name</h3>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SIGN IN</li>
        </ul>
      </GridItem>
    );
  }
}

export default Header;