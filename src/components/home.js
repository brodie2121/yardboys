import React, { Component } from 'react';
import Weather from './weather/weather';
import JobBoardHP from './jobBoard/jobBoardHP'
import '../App.css'

class HomePage extends Component {
  render() {
    return (
            <>
              <div className='home-photo'></div>
                <Weather />
                <JobBoardHP />
            </>
    );
  }
}

export default HomePage;