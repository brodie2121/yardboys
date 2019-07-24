import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Jobs extends Component {
    state = {
        job: [] 
    }

async componentDidMount() {
    const job = await this.loadData();
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
                <h2>{job.date}</h2>
                <p>{job.jobType_id}</p>
                <p>{job.employee_id}</p>
                <p>{job.comments}</p>
                <Link onClick={this.deleteData} to={`/jobboard/all`}>
                    Delete job
                </Link>
                <Link to={`/jobs/update/${job.id}`}>Edit Job Board</Link>
            </div>
        );
    }
}

export default Jobs;