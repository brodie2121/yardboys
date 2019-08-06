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

const boxstyle = {
  background: "black",
  width: "50%",
  fontSize: "4rem",
  textAlign: "center",
  margin: "0 auto"
};
const cardstyle = {
  padding: "0px",
  background: "white"
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
      <>
        {/* <div className="form-container"> */}
        <Box style={boxstyle}>
          <Card style={cardstyle}>
            <Title isSize={2}>Add Job Board</Title>
            <Field onSubmit={this.handleSubmit}>
              <Control>
                <Input
                  type="date"
                  placeholder="Date"
                  onChange={this.handleDateChange}
                  name="date"
                  value={this.state.date}
                />
              </Control>
            </Field>
            <Field onSubmit={this.handleSubmit}>
              <Control>
                <Input
                  type="text"
                  placeholder="Job"
                  onChange={this.handleJobTypeChange}
                  name="jobtype"
                  value={this.state.jobtype}
                />
              </Control>
            </Field>
            <Field onSubmit={this.handleSubmit}>
              <Control>
                <Input
                  type="text"
                  placeholder="Full Name"
                  onChange={this.handleemployeeChange}
                  name="employee"
                  value={this.state.employee}
                />
              </Control>
            </Field>
            <Field onSubmit={this.handleSubmit}>
              <Control>
                <TextArea
                  placeholder={"Comments "}
                  type="text"
                  onChange={this.handleCommentsChange}
                  name="comments"
                  value={this.state.comments}
                />
              </Control>
            </Field>
            <Field isGrouped>
              <Control>
                <Button iscolor="primary" onClick={this.handleSubmit}>
                  Submit
                </Button>
              </Control>
            </Field>
          </Card>
        </Box>
        {/* </div> */}
      </>
    );
  }
}
export default AddJobBoard;
