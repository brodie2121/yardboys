import React, { Component } from 'react';
import Weather from './weather/weather';
import JobBoardHP from './jobBoard/jobBoardHP'
import '../App.css'
import { Box } from 'bloomer';
import 'bulma';

const boxstyle = {
  background: "transparent",
  fontSize: "1rem",
  textAlign: "center",
  margin: "1px",
  position: "relative",
  padding: "10rem"
};

class HomePage extends Component {
  render() {
    return (
            <>
              <div className="homecontainer"></div>
                <Box style={boxstyle}>
                  <Weather />
                  <JobBoardHP />
                </Box>
            </>
    );
  }
}

export default HomePage;