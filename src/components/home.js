import React, { Component } from 'react';
import Weather from './weather/weather';
import JobBoardHP from './jobBoard/jobBoardHP'
import '../App.css'
import { Box } from 'bloomer';

const boxstyle = {
  background: "transparent",
  textAlign: "center",
  margin: "25px",
  padding: "35px",
  overFlow: "scroll"
}

class HomePage extends Component {
  render() {
    return (
            <>
              <div className='home-photo'></div>
                <Box style={boxstyle}>
                  <Weather />
                  <JobBoardHP />
                </Box>
            </>
    );
  }
}

export default HomePage;