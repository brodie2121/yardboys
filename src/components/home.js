import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Weather from './weather/weather';
import JobBoardHP from './jobBoard/jobBoardHP'
import { Table } from "bloomer";

class HomePage extends Component {
  render() {
    return (
            <>
                <Weather />
                <JobBoardHP />
            </>
    );
  }
}

export default HomePage;