import React, { Component } from "react";

class UpdateEmployee extends Component {
  state = {
    fullname: "",
    phone: "",
    email: "",
    experience: "", 
    datestarted: "",
    course_id: "",
    employee_id: null
  };

  async componentDidMount() {
    const employee = await this.loadData();
    console.log(employee);
    this.setState({
        fullname: employee.fullname,
        phone: employee.phone,
        email: employee.email,
        experience: employee.experience, 
        datetarted: employee.datestarted,
        course_id: employee.course_id,
        employee_id: employee.employee_id
    });
  }
  
    componentDidUpdate() {
      console.log("Updated!");
  }

    loadData = async () => {
        const employeeId = this.props.match.params.employee_id;
        const url = `http://localhost:3000/employee/employees/${employeeId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    handleFullNameChange = e => {
        this.setState({
            fullname: e.target.value
        });
    };

    handlePhoneChange = e => {
        this.setState({
            phone: e.target.value
        });
    };

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    };

    handleExperienceChange = e => {
        this.setState({
            experience: e.target.value
        });
    };

    handleDateStartedChange = e => {
        this.setState({
            datestarted: e.target.value
        });
    };

    handleCourse_idChange = e => {
        this.setState({
            course_id: e.target.value
        });
    };

  handleSubmit = e => {
    e.preventDefault();
    const employeeId = this.props.match.params.employee_id;
    const fullname = this.state.fullname;
    const phone = this.state.phone;
    const email = this.state.email;
    const experience = this.state.experience;
    const datestarted = this.state.datestarted;
    const course_id = this.state.course_id;
    const data = { fullname, phone, email, experience, datestarted ,course_id };
    const url = `http://localhost:3000/employee/employees/update/${employeeId}`;
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
    console.log("response", response);
  };
  
  render() {
    return (
      <>
        <h2>{this.state.employeeId}</h2>
        <form onSubmit={this.handleSubmit}>
            <label> Full Name: </label>
            <input
                type="text"
                onChange={this.handleFullNameChange}
                name="fullname"
                value={this.state.fullname}
            />
            <label> Phone Number: </label>
            <input 
                type="text"
                onChange={this.handlePhoneChange}
                name="phone"
                value={this.state.phone}
            />
            <label> Email: </label>
            <input
                type="text"
                onChange={this.handleEmailChange}
                name="email"
                value={this.state.email}
            />
            <label> Experience: </label>
            <input
                type="text"
                onChange={this.handleExperienceChange}
                name="experience"
                value={this.state.experience}
            />
            <label> Date Started: </label>
            <input
                type="date"
                onChange={this.handleDateStartedChange}
                name="datestarted"
                value={this.state.datestarted}
            />
            <label> Course ID: </label>
            <input
                type="text"
                onChange={this.handleCourse_idChange}
                name="course_id"
                value={this.state.course_id}
            />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default UpdateEmployee;