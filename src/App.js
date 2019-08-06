import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { Navbar, NavbarStart, NavbarEnd, NavbarItem } from "bloomer";
import SprayCharts from "./components/spraychart/spraychart";
import UpdateSpraychart from "./components/spraychart/updateSpraychart";
import AddSpraychart from "./components/spraychart/addSpraychart";
import SpraychartHome from "./components/spraychart/spraychartHome";
import UpdateJobBoard from "./components/jobBoard/updateJobBoard";
import Jobs from "./components/jobBoard/jobBoard";
import AddJobBoard from "./components/jobBoard/addJobBoard";
import JobBoardHome from "./components/jobBoard/jobBoardHome";
import UpdateJobType from "./components/jobType/updateJobType";
import JobTypes from "./components/jobType/jobType";
import AddJobType from "./components/jobType/addJobType";
import JobTypeHome from "./components/jobType/jobTypeHome";
import Login from "./components/employee/login";
import Register from "./components/employee/register";
import UpdateEmployee from "./components/employee/updateEmployee";
import JobBoardDate from "./components/jobBoard/jobBoardDate";
import Employees from "./components/employee/employee";
import EmployeeHome from "./components/employee/employeehome";
import CourseHome from "./components/yourCourse/courseHome";
import YourCourse from "./components/yourCourse/course";
import UpdateCourse from "./components/yourCourse/updateCourse";
import HomePage from "./components/home";
import LandingPage from "./components/landingPage";

class App extends Component {
  state = {
    isLoggedIn: false,
    id: 0,
    fullname: "",
    phone: "",
    email: "",
    experience: "",
    datestarted: "",
    adminstatus: "",
    course_id: "",
    employee: {}
  };

  componentDidMount() {
    const employeeStatus = JSON.parse(
      window.sessionStorage.getItem("employee")
    );
    if (!!employeeStatus) {
      this.setInitialState(employeeStatus);
    }
  }

  handleLoginState = async employee => {
    this.setInitialState(employee);
    window.sessionStorage.setItem("employee", JSON.stringify(employee));
  };

  setInitialState = employee => {
    const {
      login,
      id,
      fullname,
      phone,
      email,
      experience,
      datestarted,
      adminstatus,
      course_id
    } = employee;

    this.setState({
      id,
      login,
      fullname,
      phone,
      email,
      experience,
      datestarted,
      adminstatus,
      course_id
    });
  };

  handleLogoutState = () => {
    window.sessionStorage.clear();
    console.log("logout handler fired");
    this.setState({
      login: false,
      id: 0,
      fullname: "",
      phone: "",
      email: "",
      experience: "",
      datestarted: "",
      adminstatus: "",
      course_id: "",
      employee: {}
    });
  };

  render() {
    const { login } = this.state;
    window.sessionStorage.setItem("loggedInStatus", login);
    return (
      <Router>
        <Navbar
          style={{
            margin: "0",
            background: "black",
            color: "white"
          }}
        >
          <NavbarStart>
            {!!login ? (
              <>
                <NavbarItem>
                  <Link to="/home" style={{ color: "white" }}>
                    Home
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link to="/jobboard/all" style={{ color: "white" }}>
                    Job Board
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link to="/spraychart/all" style={{ color: "white" }}>
                    Spray Chart
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link to="/employee/all" style={{ color: "white" }}>
                    Yard Boys
                  </Link>
                </NavbarItem>
              </>
            ) : null}
          </NavbarStart>
          <NavbarEnd>
            {!!login ? (
              <NavbarItem>
                <Link
                  onClick={this.handleLogoutState}
                  style={{ color: "white" }}
                >
                  Logout
                </Link>
              </NavbarItem>
            ) : (
              <>
                <NavbarItem>
                  <Link to="/employee/login" style={{ color: "white" }}>
                    Login
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link to="/employee/register" style={{ color: "white" }}>
                    Sign Up
                  </Link>
                </NavbarItem>
              </>
            )}
          </NavbarEnd>
        </Navbar>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" exact component={HomePage} />
        <Route
          path="/employee/login"
          render={props => (
            <Login
              {...props}
              employee={this.state}
              handleLoginState={this.handleLoginState}
            />
          )}
        />
        <Route path="/spraychart/post/add" exact component={AddSpraychart} />
        <Route path="/spraychart/all" exact component={SpraychartHome} />
        <Route path="/spraycharts/:spraychart_id?" component={SprayCharts} />
        <Route
          path="/spraycharts/update/:spraychart_id?"
          component={UpdateSpraychart}
        />
        <Route path="/jobboard/all" exact component={JobBoardHome} />
        <Route path="/jobboard/post/add" exact component={AddJobBoard} />
        <Route path="/jobs/date/:date?" exact component={JobBoardDate} />
        <Route path="/jobs/:jobboard_id?" component={Jobs} />
        <Route path="/jobs/update/:job_id?" component={UpdateJobBoard} />
        <Route path="/jobtype/all" exact component={JobTypeHome} />
        <Route path="/jobtype/post/add" exact component={AddJobType} />
        <Route path="/jobtypes/:jobtype_id?" component={JobTypes} />
        <Route path="/jobtypes/update/:jobtype_id?" component={UpdateJobType} />
        <Route path="/employee/register" component={Register} />
        <Route
          path="/employees/update/:employee_id?"
          component={UpdateEmployee}
        />
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
