import React, { Component } from "react";
import { Link } from 'react-router-dom';

class JobTypes extends Component {
    state = {
        jobTypes: [] 
    }

async componentDidMount() {
    const jobTypes = await this.loadData();
    this.setState({
        jobTypes
    });
}

    loadData = async () => {
        const jobtypeId = this.props.match.params.jobtype_id;
        const url = `http://localhost:3000/jobtype/jobtypes/${jobtypeId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    deleteData = async () => {
        const jobtypeId = this.props.match.params.jobtype_id;
        const url = `http://localhost:3000/jobtype/delete/${jobtypeId}`;
        const response = await fetch(url);
        return response;
    };

    render() {
        const { jobTypes } = this.state;
        return (
            <div>
                <h2>{jobTypes.jobType}</h2>
                <p>{jobTypes.instructions}</p>
                <Link onClick={this.deleteData} to={`/jobtype/all`}>
                    Delete Job Type
                </Link>
                <Link to={`/jobtypes/update/${jobtype.id}`}>Edit Job</Link>
            </div>
        );
    }
}

export default JobTypes;