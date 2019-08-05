import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddJobBoard from './addJobBoard';
import { Table, Title } from 'bloomer';

const listyle = {
    textAlign: "center"
}

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
            <Title isSize={3}>Employees Working</Title>
                <ul>
                    {jobs.map(job => {
                        return ( 
                            
                                <Table isBordered isStriped isNarrow>
                                    <thead>
                                        <tr>
                                            <th>
                                                <li style={listyle} key={`job-${job.id}`}>
                                                    <Link to={`/jobs/${job.id}`}> {job.fullname}  </Link>
                                                </li>
                                            </th>
                                        </tr>
                                    </thead>
                                </Table>

                        );
                    })}
                </ul>

            </>
        );
    }
}

export default JobBoardHome;