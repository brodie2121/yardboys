import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Title,
  Card,
  Field,
  Label,
  Control,
  Button,
  Input,
  Box
} from "bloomer";

const boxstyle = {
  background: "black",
  width: "40%",
  fontSize: "1rem",
  textAlign: "center",
  margin: " 0 auto"
};
const cardstyle = {
  background: "white"
};

class Register extends Component {
  state = {
    fullname: "",
    phone: "",
    email: "",
    password: "",
    experience: "",
    datestarted: "",
    adminstatus: "",
    course_id: ""
  };

  handleFullName = e => {
    this.setState({
      fullname: e.target.value
    });
  };

  handlePhone = e => {
    this.setState({
      phone: e.target.value
    });
  };

  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleExperience = e => {
    this.setState({
      experience: e.target.value
    });
  };

  handleDateStarted = e => {
    this.setState({
      datestarted: e.target.value
    });
  };

  handleAdminStatus = e => {
    this.setState({
      adminstatus: e.target.value
    });
  };

  handleCourse_id = e => {
    this.setState({
      course_id: e.target.value
    });
  };

  // prettier-ignore
  handleSubmit = async () => {
		const url = "http://localhost:3000/employee/register";
		const formData = this.state;
		console.log("this is form data: ", formData);
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(formData)
		});
		if (response.ok) {
			this.setState({
				accountCreated: true
			});
		}
		console.log("account created: ", this.state.accountCreated);
	  };

  render() {
    const { EmployeeRegistered } = this.state;
    return (
      <div className="job__board">
        <div className="parallaxfour">
          <Title style={{ color: "transparent" }} isSize={1}>
            REGISTER
          </Title>
          <Box style={boxstyle}>
            <Card style={cardstyle}>
              <Field>
                <Label> Full Name </Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="Steve"
                    onChange={this.handleFullName}
                    value={this.state.fullname}
                  />
                </Control>
              </Field>
              <Field>
                <Label> Phone </Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="your number"
                    onChange={this.handlePhone}
                    value={this.state.phone}
                  />
                </Control>
              </Field>
              <Field>
                <Label> Email </Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="your email"
                    onChange={this.handleEmail}
                    value={this.state.email}
                  />
                </Control>
              </Field>
              <Field>
                <Label> Password </Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="your password"
                    onChange={this.handlePassword}
                    value={this.state.password}
                  />
                </Control>
              </Field>
              <Field>
                <Label> Experience </Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="your experience"
                    onChange={this.handleExperience}
                    value={this.state.experience}
                  />
                </Control>
              </Field>
              <Field>
                <Label> Date Started </Label>
                <Control>
                  <Input
                    type="date"
                    placeholder="date started"
                    onChange={this.handleDateStarted}
                    value={this.state.datestarted}
                  />
                </Control>
              </Field>
              <Field>
                <Label> Admin Status </Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="are you an admin?"
                    onChange={this.handleAdminStatus}
                    value={this.state.adminstatus}
                  />
                </Control>
              </Field>
              <Field>
                <Label> Course ID </Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="your course"
                    onChange={this.handleCourse_id}
                    value={this.state.course_id}
                  />
                </Control>
              </Field>
              <Field isGrouped>
                <Control>
                  <Button iscolor="primary" onClick={this.handleSubmit}>
                    Submit
                  </Button>
                </Control>
                <Control>
                  <Button isLink>Cancel</Button>
                </Control>
              </Field>
              {!!EmployeeRegistered ? <Redirect to="/login" /> : ""}
            </Card>
          </Box>
        </div>
      </div>
    );
  }
}
export default Register;
