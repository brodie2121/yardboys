import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EmployeeRegister extends Component {
	constructor(props) {
		super(props);

		this.state = {
            firstName : "",
            lastName : "", 
            email : "",
            phone : "",
            password : "",
            experience : "",
            dateStarted : "",
            course_id : ""
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
			fullname: '',
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Register</h2>
                    <div>
						<input
							type="text"
							placeholder="First Name"
							name="firsName"
							value={this.state.firstName}
							onChange={this.update}
						/>
                    </div>
                    <div>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							value={this.state.lastName}
							onChange={this.update}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>
                
					<div className="phone">
						<input
							type="text"
							placeholder="Phone"
							name="phone"
							value={this.state.phone}
							onChange={this.update}
						/>
					</div>

					<div className="pasword">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>

					<div className="experience">
						<input
							type="text"
							placeholder="Experience"
							name="experience"
							value={this.state.experience}
							onChange={this.update}
						/>
					</div>

					<div className="dateStarted">
						<input
							type="text"
							placeholder="Date Started"
							name="dateStarted"
							value={this.state.dateStarted}
							onChange={this.update}
						/>
					</div>

					<div className="course_id">
						<input
							type="text"
							placeholder="Course ID"
							name="course_id"
							value={this.state.course_id}
							onChange={this.update}
						/>
					</div>

					<div className="password">
						<input type="password" placeholder="Confirm Password" name="password1" />
					</div>

					<input type="submit" value="Login" />
				</form>

				<Link to="/">Login Here</Link>
			</div>
		);
	}
}

export default EmployeeRegister;