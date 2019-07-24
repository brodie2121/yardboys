import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JobTypeList extends Component {
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
        const url = "http://localhost:3000/jobtype/all";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    handleChange = async event => {
        const changeValue = await this.setState({
          posts: event.target.value
        });
        console.log(changeValue);
        return changeValue;
      };
      
    render() {
        const { jobs } = this.state;

        return(
            <>
                <h2>Jobs Type List</h2>
                <ul>
                    {jobs.map(job => {
                        return ( 
                            <li key={`job-${jobtype.id}`}>
                                <Link to={`/jobs/${jobtype.id}`}>{job.jobtype} </Link>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default JobTypeList;