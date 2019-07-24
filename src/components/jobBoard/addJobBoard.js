import React, { Component } from 'react'; 
import '../App.css';

class AddJobBoard extends Component {
    state = {
        date : "",
        jobType_id : "",
        employee_id : "",
        comments : "",
    };

    handleDateChange = e => {
        this.setState({
            date: e.target.value
        });
    };

    handleJobTypeChange = e => {
        this.setState({
            jobType_id: e.target.value
        });
    };

    handleEmployeeChange = e => {
        this.setState({
            employee_id: e.target.value
        });
    };

    handleCommentSChange = e => {
        this.setState({
            comments: e.target.value
        });
    };

    handleSubmit = () => {

        const date = this.state.date;
        const jobType_id = this.state.jobType_id;
        const employee_id = this.state.employee_id;
        const comments = this.state.comments;
        const data = { date, jobType_id, employee_id, comments };
        const url = `http://localhost:3000/jobboard/post/add`;
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

    };

    render() {
        return(
            <>
                <h4>New Job Board</h4>
                <form onSubmit={this.handleSubmit}>
                    <label> Date: </label>
                    <input
                        type="text"
                        onChange={this.handleDateChange}
                        name="date"
                        value={this.state.date}
                    />
                    <label> Job: </label>
                    <input
                        type="text"
                        onChange={this.handleJobTypeChange}
                        name="jobType_id"
                        value={this.state.jobType_id}
                    />
                    <label> Employee: </label>
                    <input
                        type="text"
                        onChange={this.handleEmployeeChange}
                        name="employee_id"
                        value={this.state.employee_id}
                    />
                    <label> Comments: </label>
                    <input
                        type="text"
                        onChange={this.handleCommentsChange}
                        name="comments"
                        value={this.state.comments}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default AddJobBoard;