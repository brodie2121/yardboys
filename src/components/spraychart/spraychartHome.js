import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddSpraychart from './addSpraychart';
import { Title } from 'bloomer';

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

        return(
            <>
                <Title isSize={3}>Spray Chart Home</Title>
                <ul>
                    {spraycharts.map(spraychart => {
                        console.log('spraychart', spraychart);
                        return ( 
                            <li key={`spraychart-${spraychart.id}`}>
                                <Link to={`/spraycharts/${spraychart.id}`}>{spraychart.dateapplied}</Link>
                            </li>
                        );
                    })}
                </ul>
                <AddSpraychart />
            </>
        );
    }
}

export default SpraychartHome;