import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JobTypeHome extends Component {
    state = {
        jobTypeHome: []
    };

    async componentDidMount() {
        const jobTypeHome = await this.loadData();
        console.log("jobTypeHome", jobTypeHome);
        this.setState({
            jobTypeHome
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
          jobTypeHome: event.target.value
        });
        console.log(changeValue);
        return changeValue;
      };
      
    render() {
        const { jobTypeHome } = this.state;

        return(
            <>
                <h2>Jobs Type List</h2>
                <ul>
                    {jobTypeHome.map(jobtypehome => {
                        return ( 
                            <li key={`job-${jobtypehome.id}`}>
                                <Link to={`/jobtypehome/${jobtypehome.id}`}>{jobtypehome.jobtype} </Link>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default JobTypeHome;