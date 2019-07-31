
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Card, Field, Label, Control, Button, Input } from "bloomer";


class EmployeeLogin extends Component {
  state = {
    email: "",
    password: "",
    login: false
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

  handleSubmit = async () => {
        const url = "http://localhost:3000/employee/login";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state)
            });
            const data = await response.json();
            console.log('this is login response data: ', data)
            const { login } = data;
            if (!!login) {
                const { id, firstName, lastName, phone, email, experience, dateStarted, adminStatus, course_id } = data;
                this.props.handleLoginState({
                    login,
                    id,
                    firstName,
                    lastName,
					phone,
					email,
					experience,
					dateStarted,
					adminStatus,
					course_id
                });
            }
            this.setState({
                login
            });
        } catch (err) {
            console.log("there has been login error", err);
        }
    };
  render() {
    const { login } = this.state;
    return (
      <Card>
        <Field>
          <Label> Email </Label>
          <Control>
            <Input
              type="text"
              placeholder="Enter your email address..."
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
              placeholder="Enter your very secure password..."
              onChange={this.handlePassword}
              value={this.state.password}
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
        <p>
          Not signed up yet? <Link to="/signup">Register here!</Link>
        </p>
        {!!login ? <Redirect to="/jobboard/all" /> : ""}
      </Card>
    );
  }
}

export default EmployeeLogin;