import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {
	Card,
	Field,
	Label,
	Control,
	Button,
	Input
  } from "bloomer";
  import { Checkbox } from "bloomer/lib/elements/Form/Checkbox";

class EmployeeRegister extends Component {
	state = {
		firstName : "",
		lastName : "", 
		phone : "",
		email : "",
		password : "",
		experience : "",
		dateStarted : "",
		adminStatus : "",
		course_id : ""
	};

	handleFirstName = e => {
		this.setState({
			firstName: e.target.value
		});
	};
  
	handleLastName = e => {
		this.setState({
			lastName: e.target.value
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
			dateStarted: e.target.value
		});
	};

	handleAdminStatus = e => {
		this.setState({
			adminStatus: e.target.value
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
		console.log("Response is... ", response);
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
		  <Card>
			<Field>
			  <Label> First Name </Label>
			  <Control>
				<Input
				  type="text"
				  placeholder="Steve"
				  onChange={this.handleFirstName}
				  value={this.state.firstName}
				/>
			  </Control>
			</Field>
			<Field>
			  <Label> Last Name </Label>
			  <Control>
				<Input
				  type="text"
				  placeholder="Jobs"
				  onChange={this.handleLastName}
				  value={this.state.lastName}
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
				  type="text"
				  placeholder="date started"
				  onChange={this.handleDateStarted}
				  value={this.state.dateStarted}
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
				  value={this.state.adminStatus}
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
			{!!EmployeeRegistered ? <Redirect to="/" /> : ""}
		  </Card>
		);
	  }
	}
export default EmployeeRegister;