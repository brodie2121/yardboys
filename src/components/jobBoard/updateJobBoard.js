import React, { Component } from "react";

class UpdateJobBoard extends Component {
  state = {
    date : "",
    jobType : "",
    employee : "",
    comments : "",
    jobboard_id : null
  };

  async componentDidMount() {
    const job = await this.loadData();
    console.log(job);
    this.setState({
        date : job.date,
        jobType : job.jobtype,
        employee : job.employee,
        comments : job.comments,
        jobboard_id : job.jobboard_id

    });
  }

    loadData = async () => {
        const jobboardId = this.props.match.params.jobboard_id;
        const url = `http://localhost:3000/jobboard/jobs/${jobboardId}`;
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
            jobType: e.target.value
        });
    };

    handleEmployeeChange = e => {
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
    const jobboardId = this.props.match.params.jobboard_id;
    const date = this.state.date;
    const jobType = this.state.jobType;
    const employee = this.state.employee;
    const comments = this.state.comments;
    const data = { date, jobType, employee, comments };
    const url = `http://localhost:3000/jobboard/jobs/update/${jobboardId}`;
    const response = fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        
      },
      
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200) {
          this.props.history.push("/");
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
                type="text"
                onChange={this.handleDateChange}
                name="date"
                value={this.state.date}
            />
            <label> Job: </label>
            <input
                type="text"
                onChange={this.handleJobTypeChange}
                name="jobType"
                value={this.state.jobType}
            />
            <label> Employee: </label>
            <input
                type="text"
                onChange={this.handleEmployeeChange}
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