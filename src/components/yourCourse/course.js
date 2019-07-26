import React, { Component } from "react";
import {Link } from 'react-router-dom';

class YourCourse extends Component {
    state = {
        course: [] 
    }

async componentDidMount() {
    const course = await this.loadData();
    this.setState({
        course
    });
}

    loadData = async () => {
        const courseId = this.props.match.params.yourcourse_id;
        const url = `http://localhost:3000/yourcourse/courses/${courseId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
    };
    
    render() {
        const { course } = this.state;
        return (
            <div>
                <h4>Yard Boy Info</h4>
                <p>{course.clubname}</p>
                <p>{course.admin}</p>
                <p>{course.employees}</p>
                <p>{course.city}</p>
                <p>{course.state}</p>
                <Link to={`/courses/update/${course.id}`}>Update My Course</Link>
            </div>
        );
    }
}

export default YourCourse;