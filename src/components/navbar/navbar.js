
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ResponsiveMenu from 'react-responsive-navbar';
import styled from 'styled-components';
import { FaAngleDoubleDown, FaAngleDoubleUp   } from 'react-icons/fa';

const Menu = styled.div`
  border-bottom: 2px solid black;

  ul {
    padding: 0;
  }

  li {
    display: inline;
    font-size: 20px;
    list-style-type: none;
    margin-left: 30px;
    color: black;
  }

  NavLink {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    color: black;

    &:hover {
      color: white;
    }
  }

  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

class Navbar extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<FaAngleDoubleDown size={30} color="black" />}
        menuCloseButton={<FaAngleDoubleUp size={30} color="black" />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu"
        smallMenuClassName="small-menu"
        menu={
            <Menu>
                <ul>
                    <li><NavLink to="/jobboard/all">Job Board</NavLink></li>
                    <li><NavLink to="/spraychart/all">Spray Chart</NavLink></li>
                    <li><NavLink to="/employee/all">Yard Boys</NavLink></li>
                    <li><NavLink to="/spraychart/all">Spray Chart</NavLink></li>
                </ul>
            </Menu>
        } 
      />
    );
  }
}

export default Navbar;