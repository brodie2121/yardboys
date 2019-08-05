import React, { Component } from 'react'; 
import {
    Field,
    Label,
    Control,
    Button,
    Input,
    TextArea,
    Card,
    Title
  } from "bloomer";
  import 'bulma';

class AddJobBoard extends Component {
    state = {
        date : "",
        jobtype : "",
        firstname : "",
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

    handleFirstNameChange = e => {
        this.setState({
            firstname: e.target.value
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
        const firstname = this.state.firstname;
        const comments = this.state.comments;
        const data = { date, jobtype, firstname, comments };
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
                <Card>
                <Title isSize={5}>Add Job Board</Title>
                    <Field onSubmit={this.handleSubmit}>
                        <Label>Date</Label>
                        <Control>
                            <Input 
                            type="date" 
                            placeholder="Date"
                            onChange={this.handleDateChange}
                            name="date"
                            value={this.state.date}
                            />
                        </Control>
                    </Field>

                    <Field onSubmit={this.handleSubmit}>
                        <Label>Job</Label>
                        <Control>
                            <Input 
                            type="text" 
                            placeholder="Job"
                            onChange={this.handleJobTypeChange}
                            name="jobtype"
                            value={this.state.jobtype}
                            />
                        </Control>
                    </Field>

                    <Field onSubmit={this.handleSubmit}>
                        <Label>First Name</Label>
                        <Control>
                            <Input 
                            type="text" 
                            placeholder="firstname"
                            onChange={this.handleFirstNameChange}
                            name="firstname"
                            value={this.state.firstname}
                            />
                        </Control>
                    </Field>

                    <Field onSubmit={this.handleSubmit}>
                        <Label>Comments</Label>
                        <Control>
                            <TextArea 
                                placeholder={'Comments '} 
                                type="text" 
                                onChange={this.handleCommentsChange}
                                name="comments"
                                value={this.state.comments}
                            />
                        </Control>
                    </Field>

                    <Field isGrouped>
                        <Control>
                            <Button iscolor="primary" onClick={this.handleSubmit}>
                            Submit
                            </Button>
                        </Control>
                    </Field>
                </Card>
            </>
        );
    }
}

export default AddJobBoard;