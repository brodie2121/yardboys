import React, { Component } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import { Table } from 'bloomer';
import 'bulma';

class SprayCharts extends Component {
    state = {
        spraychart: [] 
    }

async componentDidMount() {
    const spraychart = await this.loadData();
    this.setState({
        spraychart
    });
}

    loadData = async () => {
        const spraychartId = this.props.match.params.spraychart_id;
        const url = `http://localhost:3000/spraychart/spraycharts/${spraychartId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    deleteData = async () => {
        const spraychartId = this.props.match.params.spraychart_id;
        const url = `http://localhost:3000/spraychart/delete/${spraychartId}`;
        const response = await fetch(url);
        return response;
    };

    render() {
        const { spraychart } = this.state;
        return (
            <div>
                <Table isBordered isStriped isNarrow>
                    <thead>
                        <tr className='is-selected'>
                            <th>Date Applied</th>
                            <th>id</th>
                            <th>Employee</th>
                            <th>Holes Treated</th>
                            <th>Length of Cut</th>
                            <th>Chemicals</th>
                            <th>Rate Applied</th>
                            <th>Total Gallons</th>
                            <th>Spray Rig Used</th>
                            <th>Pest of Disease Controlled</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{spraychart.dateapplied}</td>
                            <td>{spraychart.id}</td>
                            <td>{spraychart.employee_id}</td>
                            <td>{spraychart.holestreated}</td>
                            <td>{spraychart.lengthofcuttreated}</td>
                            <td>{spraychart.chemicalsbeingused}</td>
                            <td>{spraychart.rateapplied}</td>
                            <td>{spraychart.totalgallons}</td>
                            <td>{spraychart.sprayrig}</td>
                            <td>{spraychart.pestordiseasecontrolled}</td>
                        </tr>
                </tbody>
            </Table>
                <Link onClick={this.deleteData} to={`/spraychart/all`}>
                    Delete spraychart
                </Link>
                <Link to={`/spraycharts/update/${spraychart.id}`}>Update Spraychart</Link>
            </div>
        );
    }
}

export default SprayCharts;