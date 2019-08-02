import React, { Component } from 'react'; 


class AddJobBoard extends Component {
    state = {
        date : "",
        jobtype : "",
        employee : "",
        comments : "",
    };

    handleDateChange = e => {
        this.setState({
            date: e.target.value
        });
    };

    handleJobTypeChange = e => {
        this.setState({
            jobtype: e.target.value
        });
    };

    handleEmployeeChange = e => {
        this.setState({
            employee: e.target.value
        });
    };

    handleCommentsChange = e => {
        this.setState({
            comments: e.target.value
        });
    };

    handleSubmit = () => {

        const date = this.state.date;
        const jobtype = this.state.jobtype;
        const employee = this.state.employee;
        const comments = this.state.comments;
        const data = { date, jobtype, employee, comments };
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
                this.props.history.push("/");
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
                        type="date"
                        onChange={this.handleDateChange}
                        name="date"
                        value={this.state.date}
                    />
                    <label> Job: </label>
                    <input
                        type="text"
                        onChange={this.handleJobTypeChange}
                        name="jobtype"
                        value={this.state.jobtype}
                    />
                    <label> Employee: </label>
                    <input
                        type="text"
                        onChange={this.handleEmployeeChange}
                        name="employee"
                        value={this.state.employee}
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