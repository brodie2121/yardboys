import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calendar from "react-calendar";

class JobBoardHome extends Component {
    state = {
        jobs: []
    };

    async componentDidMount() {
        const jobs = await this.loadData();
        console.log("jobs", jobs);
        this.setState({
            jobs
        });
    }

    loadData = async () => {
        const url = "http://localhost:3000/jobboard/all";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    handleChange = async event => {
        const changeValue = await this.setState({
          jobs: event.target.value
        });
        console.log(changeValue);
        return changeValue;
      };
    
    render() {
        const { jobs } = this.state;

        return(
            <>
                <h2>Job Board Home</h2>
                <ul>
                    {jobs.map(job => {
                        return ( 
                            <li key={`job-${job.id}`}>
                                <Link to={`/jobs/${job.id}`}>{job.date} </Link>
                            </li>
                        );
                    })}
                </ul>
                <div>
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>
            </>
        );
    }
}

export default JobBoardHome;