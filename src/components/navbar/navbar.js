import { IconContext } from 'react-icons';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ResponsiveMenu from 'react-responsive-navbar';
import { FaAngleDoubleDown, FaAngleDoubleUp   } from 'react-icons/fa';

class Navbar extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<FaAngleDoubleDown size={30} color="MediumPurple" />}
        menuCloseButton={<FaAngleDoubleUp size={30} color="MediumPurple" />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu"
        smallMenuClassName="small-menu"
        menu={
          <ul>
            <li><NavLink to="/jobboard/all">Job Board</NavLink></li>
            <li><NavLink to="/spraychart/all">Spray Chart</NavLink></li>
            <li><NavLink to="/employee/all">Yard Boys</NavLink></li>
            <li><NavLink to="/spraychart/all">Spray Chart</NavLink></li>
          </ul>
        } 
      />
    );
  }
}

export default Navbar;