import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddSpraychart from "./addSpraychart";
import { Title, Container, Column } from "bloomer";

class SpraychartHome extends Component {
  state = {
    spraycharts: []
  };

  async componentDidMount() {
    const spraycharts = await this.loadData();
    console.log("spraycharts", spraycharts);
    this.setState({
      spraycharts
    });
  }

  loadData = async () => {
    const url = "http://localhost:3000/spraychart/all";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  handleChange = async event => {
    const changeValue = await this.setState({
      spraychart: event.target.value
    });
    console.log(changeValue);
    return changeValue;
  };

  render() {
    const { spraycharts } = this.state;

    return (
      <div className="job__board">
        <div className="parallaxTwo">
          <Title isSize={1}>Spray Chart Home</Title>
          <AddSpraychart />

          <div className="ui container div-emp-table">
            <Title isSize={3}>Previous Spray Chart</Title>
            <table className="ui selectable celled table inverted">
              <thead>
                <tr className="is-selected">
                  <td>Date Applied</td>
                  <td>Length of Cut</td>
                  <td>Chemicals</td>
                  <td>Details</td>
                </tr>
              </thead>
              <tbody>
                {spraycharts.map(spraychart => {
                  return (
                    <tr key={`spraychart-${spraychart.id}`}>
                      <td>{spraychart.dateapplied}</td>
                      <td>{spraychart.lengthofcuttreated}</td>
                      <td>
                        {spraychart.chemicalsbeingused}
                        {/* {job.firstname} {job.lastname} */}
                      </td>
                      <td>
                        <Link to={`/spraycharts/${spraychart.id}`}>
                          View Details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {this.state.admin === true && <AddSpraychart />}
        </div>
      </div>
    );
  }
}

export default SpraychartHome;
