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
		console.log(this.state);
		this.setState({
			fullname: '',
			email: '',
			password: ''
		});
    }
    
    handleSubmit = () => {
        const firstName = this.state.firstName; 
        const lastName = this.state.lastName;
        const email = this.state.email;
        const phone = this.state.phone;
        const password = this.state.password;
        const experience = this.state.experience;
        const dateStarted = this.state.dateStarted;
        const course_id = this.state.course_id;
        const data = { firstName, lastName, email, phone, password, experience, dateStarted, course_id }
        const url = `http://localhost:3000/register`;
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
                this.props.history.push("/all");
            }
            console.log("response is", response);
        })
        .catch(err => {
            console.log(err);
        });
    }

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Register</h2>
                    <div className="firstName">
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							value={this.state.firstName}
							onChange={this.update}
						/>
                    </div>
                    <div className="lastName">
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

					<div className="password">
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

					<input type="submit" value="Register" />
				</form>

				<Link to="/login">Login Here</Link>
			</div>
		);
	}
}

export default EmployeeRegister;