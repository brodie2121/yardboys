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
                    <tbody>
                        <tr>
                            <td className='is-selected'>Date Applied</td>
                            <td>{spraychart.dateapplied}</td>
                        </tr>
                        <tr>
                            <td className='is-selected'>Employee</td>
                            <td>{spraychart.employee_id}</td>
                        </tr>
                        <tr>
                            <td className='is-selected'>Holes Treated</td>
                            <td>{spraychart.holestreated}</td>
                        </tr>
                        <tr>
                            <td className='is-selected'>Length of Cut</td>
                            <td>{spraychart.lengthofcuttreated}</td>
                        </tr>
                        <tr>
                            <td className='is-selected'>Chemicals</td>
                            <td>{spraychart.chemicalsbeingused}</td>
                        </tr>
                        <tr>
                            <td className='is-selected'>Rate Applied</td>
                            <td>{spraychart.rateapplied}</td>
                        </tr>
                        <tr>
                            <td className='is-selected'>Total Gallons</td>
                            <td>{spraychart.totalgallons}</td>
                        </tr>
                        <tr>
                            <td className='is-selected'>Spray Rig Used</td>
                            <td>{spraychart.sprayrig}</td>
                        </tr>
                        <tr>
                            <td className='is-selected'>Pest of Disease Controlled</td>
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