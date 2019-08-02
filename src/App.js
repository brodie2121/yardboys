import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar';
import SprayCharts from './components/spraychart/spraychart';
import UpdateSpraychart from './components/spraychart/updateSpraychart';
import AddSpraychart from './components/spraychart/addSpraychart';
import SpraychartHome from './components/spraychart/spraychartHome';
import UpdateJobBoard from './components/jobBoard/updateJobBoard';
import Jobs from './components/jobBoard/jobBoard';
import AddJobBoard from './components/jobBoard/addJobBoard';
import JobBoardHome from './components/jobBoard/jobBoardHome';
import UpdateJobType from './components/jobType/updateJobType';
import JobTypes from './components/jobType/jobType';
import AddJobType from './components/jobType/addJobType';
import JobTypeHome from './components/jobType/jobTypeHome';
import EmployeeLogin from './components/employee/login';
import EmployeeRegister from './components/employee/register';
import UpdateEmployee from './components/employee/updateEmployee';
import JobBoardDate from './components/jobBoard/jobBoardDate';
import Employees from './components/employee/employee';
import EmployeeHome from './components/employee/employeehome';
import CourseHome from './components/yourCourse/courseHome';
import YourCourse from './components/yourCourse/course';
import UpdateCourse from './components/yourCourse/updateCourse';
import Weather from './components/weather/weather';
import HomePage from './components/home';

class App extends Component {
  state = {
    isLoggedIn: false,
    id: 0,
    firstname: "",
    lastname: "",
		phone : "",
		email : "",
		experience : "",
		datestarted : "",
		adminstatus : "",
		course_id : ""
  };

  handleLoginState = employee => {
    const { login, id, firstname, lastname, phone, email, experience, datestarted, adminstatus, course_id } = employee;
    this.setState({
      isLoggedIn: login,
      id,
      firstname,
      lastname,
      phone,
      email,
      experience,
      datestarted,
      adminstatus,
      course_id
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <Router>
        <Route path="/" component={Navbar} />
        
        <Route path="/" exact component={HomePage} />
        <Route 
          path="/employee/login"
          render={props => (
              <EmployeeLogin
                {...props}
                employee={this.state}
                handleEmployeeLoginState={this.handleEmployeeLoginState}
              /> 
            )} 
          />
        <Route path="/spraychart/post/add" exact component={AddSpraychart} />
        <Route path="/spraychart/all" exact component={SpraychartHome} />
        <Route path="/spraycharts/:spraychart_id?" component={SprayCharts} />
        <Route path="/spraycharts/update/:spraychart_id?" component={UpdateSpraychart} />
        <Route path="/jobboard/all" exact component={JobBoardHome} />
        <Route path="/jobboard/post/add" exact component={AddJobBoard} />
        <Route path="/jobs/date/:date?" exact component={JobBoardDate} />
        <Route path="/jobs/:jobboard_id?" component={Jobs} />
        <Route path="/jobs/update/:job_id?" component={UpdateJobBoard} />
        <Route path="/jobtype/all" exact component={JobTypeHome} />
        <Route path="/jobtype/post/add" exact component={AddJobType} />
        <Route path="/jobtypes/:jobtype_id?" component={JobTypes} />
        <Route path="/jobtypes/update/:jobtype_id?" component={UpdateJobType} />
        <Route path="/employee/register" component={EmployeeRegister} />
        <Route path="/employees/update/:employee_id?" component={UpdateEmployee} />
        <Route path="/employee/all" component={EmployeeHome} />
        <Route path="/employees/:employee_id?" component={Employees} />
        <Route path="/yourcourse/all" component={CourseHome} />
        <Route path="/courses/:course_id?" component={YourCourse} />
        <Route path="/courses/update/:course_id?" component={UpdateCourse} />
      </Router>
    );
  }
}

export default App;
