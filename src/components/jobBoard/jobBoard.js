import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Table, Title } from 'bloomer';

class Jobs extends Component {
    state = {
        job: [] 
    }

async componentDidMount() {
    const job = await this.loadData();
    console.log("job", job);
    this.setState({
        job
    });
}

    loadData = async () => {
        const jobboardId = this.props.match.params.jobboard_id;
        const url = `http://localhost:3000/jobboard/jobs/${jobboardId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    deleteData = async () => {
        const jobboardId = this.props.match.params.jobboard_id;
        const url = `http://localhost:3000/jobboard/delete/${jobboardId}`;
        const response = await fetch(url);
        return response;
    };

    render() {
        const { job } = this.state;
        return (
            <div>
                <Title isSize={3}>Job Details</Title>
                <Table isBordered isStriped isNarrow>
                    <thead>
                        <tr className='is-selected'>
                            <th>Date</th>
                            <th>Employee</th>
                            <th>Job</th>                         
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{job.date}</td>
                            <td>{job.firstname}</td>
                            <td>{job.jobtype}</td>
                            <td>{job.comments}</td>
                        </tr>
                </tbody>
            </Table>
                <Link onClick={this.deleteData} to={`/jobboard/all`}>
                    Delete job
                </Link>
                <Link to={`/jobs/update/${job.id}`}>Edit Job Board</Link>
            </div>
        );
    }
}

export default Jobs;