import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma";
import { Title } from "bloomer";
import Registe from "./register";

class EmployeeHome extends Component {
  state = {
    employees: []
  };

  async componentDidMount() {
    const employees = await this.loadData();
    console.log("employees", employees);
    this.setState({
      employees
    });
  }

  loadData = async () => {
    const url = "http://localhost:3000/employee/all";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  render() {
    const { employees } = this.state;

    return (
      <div className="job__board">
        <div className="parallaxthree">
          <div className="ui container div-emp-table">
            <Title style={{ color: "white" }} isSize={1}>
              Employees
            </Title>
            <table className="ui selectable celled table inverted">
              <thead>
                <tr className="is-selected">
                  <td>Full Name</td>
                  <td>Phone</td>
                  <td>Experience</td>
                  <td>Details</td>
                </tr>
              </thead>
              <tbody>
                {employees.map(employee => {
                  return (
                    <tr key={`employee-${employee.id}`}>
                      <td>{employee.fullname}</td>
                      <td>{employee.phone}</td>
                      <td>
                        {employee.experience}
                        {/* {job.firstname} {job.lastname} */}
                      </td>
                      <td>
                        <Link to={`/employees/${employee.id}`}>
                          View Details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeHome;
