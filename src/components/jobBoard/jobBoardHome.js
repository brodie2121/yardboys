import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddJobBoard from './addJobBoard';
import { Title } from 'bloomer';

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
            <div className='home-photo'></div>
            <Title isSize={3}>Job Board Home</Title>
            <AddJobBoard />
                <ul>
                    {jobs.map(job => {
                        return ( 
                            <li key={`job-${job.id}`}>
                                <Link to={`/jobs/${job.id}`}>{job.date} {job.fullname}  </Link>
                            </li>
                        );
                    })}
                </ul>

            </>
        );
    }
}

export default JobBoardHome;