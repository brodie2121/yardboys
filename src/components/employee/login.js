import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
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
  width: "50%",
  fontSize: "1rem",
  textAlign: "center",
  margin: "0 auto"
};
const cardstyle = {
  padding: "0px",
  background: "white"
};

class Login extends Component {
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
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      });
      const data = await response.json();
      console.log("this is login response data: ", data);
      const { login } = data;
      if (!!login) {
        const {
          id,
          fullname,
          phone,
          email,
          experience,
          datestarted,
          adminstatus,
          course_id
        } = data;
        this.props.handleLoginState({
          login,
          id,
          fullname,
          phone,
          email,
          experience,
          datestarted,
          adminstatus,
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

  saveToLocal() {
    const local = this.state.login;
    localStorage.setItem("login", JSON.stringify(local));
  }

  render() {
    const { login } = this.state;
    return (
      <div className="landcontainer">
        <Title style={{ color: "transparent" }} isSize={1}>
          REGISTER
        </Title>
        <Box style={boxstyle}>
          <Card style={cardstyle}>
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
            <p className="text">
              Not signed up yet?{" "}
              <Link to="/employee/register">Register here!</Link>
            </p>
            {!!login ? <Redirect to="/home" /> : ""}
          </Card>
        </Box>
      </div>
    );
  }
}

export default Login;
