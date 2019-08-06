import React, { Component } from "react";
import {
  Field,
  Box,
  Control,
  Button,
  Input,
  TextArea,
  Card,
  Title
} from "bloomer";
import "bulma";

const cardstyle = {
  padding: "4px",
  background: "darkblue",
  margin: "10rem"
};
class AddJobBoard extends Component {
  state = {
    date: "",
    jobtype: "",
    employee: "",
    comments: ""
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

  handleSubmit = () => {
    const date = this.state.date;
    const jobtype = this.state.jobtype;
    const employee = this.state.employee;
    const comments = this.state.comments;
    const data = { date, jobtype, employee, comments };
    const url = `http://localhost:3000/jobboard/post/add`;
    const response = fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200) {
          this.props.history.push("/home");
        }
        console.log("response is", response);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("response", response);
  };

  render() {
    return (
      <div className="ui equal width form">
        <div className="fields">
          <div className="field">
            <label>Date</label>
            <input
              type="date"
              placeholder="Date"
              onChange={this.handleDateChange}
              name="date"
              value={this.state.date}
            />
          </div>
          <div className="fields">
            <div className="field">
              <Input
                type="text"
                placeholder="Job"
                onChange={this.handleJobTypeChange}
                name="jobtype"
                value={this.state.jobtype}
              />
            </div>
            <div className="fields">
              <div className="field">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  onChange={this.handleemployeeChange}
                  name="employee"
                  value={this.state.employee}
                />
              </div>
              <div className="fields">
                <div className="field">
                  <TextArea
                    placeholder={"Comments "}
                    type="text"
                    onChange={this.handleCommentsChange}
                    name="comments"
                    value={this.state.comments}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddJobBoard;
