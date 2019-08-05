import React, { Component } from "react";

class UpdateJobBoard extends Component {
  state = {
    date : "",
    jobtype : "",
    employee : "",
    comments : "",
    jobboard_id : null
  };

  async componentDidMount() {
    const job = await this.loadData();
    console.log(job);
    this.setState({
        date : job.date,
        jobtype : job.jobtype,
        employee : job.employee,
        comments : job.comments,
        job_id : job.job_id
    });
  }

    loadData = async () => {
        const jobId = this.props.match.params.job_id;
        const url = `http://localhost:3000/jobboard/jobs/${jobId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    handleDateChange = e => {
        this.setState({
            date: e.target.value
        });
    };

    handleJobTypeChange = e => {
        this.setState({
            jobtype: e.target.value
        });
    };

    handleemployeeChange = e => {
        this.setState({
            employee: e.target.value
        });
    };

    handleCommentsChange = e => {
        this.setState({
            comments: e.target.value
        });
    };

  handleSubmit = e => {
    e.preventDefault();
    const jobId = this.props.match.params.job_id;
    const date = this.state.date;
    const jobtype = this.state.jobtype;
    const employee = this.state.employee;
    const comments = this.state.comments;
    const data = { date, jobtype, employee, comments };
    const url = `http://localhost:3000/jobboard/jobs/update/${jobId}`;
    const response = fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        
      },
      
      body: JSON.stringify(data)
    })
    console.log("response", response)
      .then(response => {
        if (response.status === 200) {
          this.props.history.push("/home");
        }
      })
      .catch(err => {
        console.log(err);
    });
  };
  
  render() {
    return (
      <>
        <h2>{this.state.jobboardId}</h2>
        <form onSubmit={this.handleSubmit}>
            <label> Date: </label>
            <input
                type="date"
                onChange={this.handleDateChange}
                name="date"
                value={this.state.date}
            />
            <label> Job: </label>
            <input
                type="text"
                onChange={this.handleJobTypeChange}
                name="jobtype"
                value={this.state.jobtype}
            />
            <label> First Name: </label>
            <input
                type="text"
                onChange={this.handleemployeeChange}
                name="employee"
                        value={this.state.employee}
            />
            <label> Comments: </label>
            <input
                type="text"
                onChange={this.handleCommentsChange}
                name="comments"
                value={this.state.comments}
            />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default UpdateJobBoard;