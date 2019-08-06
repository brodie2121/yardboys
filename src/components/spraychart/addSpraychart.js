import React, { Component } from "react";
import { Title, Card, Box, Field, Control, Input, Button } from "bloomer";

const boxstyle = {
  background: "black",
  width: "50%",
  fontSize: "4rem",
  textAlign: "center",
  margin: "0 auto"
};
const cardstyle = {
  padding: "0px",
  background: "white"
};

class AddSpraychart extends Component {
  state = {
    dateApplied: "",
    employee_id: "",
    holesTreated: "",
    lengthOfCutTreated: "",
    chemicalsBeingUsed: "",
    rateApplied: "",
    totalGallons: "",
    sprayRig: "",
    pestOrDiseaseControlled: ""
  };

  handleDateAppliedChange = e => {
    this.setState({
      dateApplied: e.target.value
    });
  };

  handleEmployee_idChange = e => {
    this.setState({
      employee_id: e.target.value
    });
  };

  handleHolesTreatedChange = e => {
    this.setState({
      holesTreated: e.target.value
    });
  };

  handleLengthOfCutTreatedChange = e => {
    this.setState({
      lengthOfCutTreated: e.target.value
    });
  };

  handleChemicalsBeingUsedChange = e => {
    this.setState({
      chemicalsBeingUsed: e.target.value
    });
  };

  handleRateAppliedChange = e => {
    this.setState({
      rateApplied: e.target.value
    });
  };

  handleTotalGallonsChange = e => {
    this.setState({
      totalGallons: e.target.value
    });
  };

  handleSprayRigChange = e => {
    this.setState({
      sprayRig: e.target.value
    });
  };

  handlePestOrDiseaseControlledChange = e => {
    this.setState({
      pestOrDiseaseControlled: e.target.value
    });
  };

  handleSubmit = () => {
    const dateApplied = this.state.dateApplied;
    const employee_id = this.state.employee_id;
    const holesTreated = this.state.holesTreated;
    const lengthOfCutTreated = this.state.lengthOfCutTreated;
    const chemicalsBeingUsed = this.state.chemicalsBeingUsed;
    const rateApplied = this.state.rateApplied;
    const totalGallons = this.state.totalGallons;
    const sprayRig = this.state.sprayRig;
    const pestOrDiseaseControlled = this.state.pestOrDiseaseControlled;
    const data = {
      dateApplied,
      employee_id,
      holesTreated,
      lengthOfCutTreated,
      chemicalsBeingUsed,
      rateApplied,
      totalGallons,
      sprayRig,
      pestOrDiseaseControlled
    };

    const url = `http://localhost:3000/spraychart/post/add`;
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
    console.log("response", response);
  };

  render() {
    return (
      <>
        <div className="form-container">
          <Box style={boxstyle}>
            <Card style={cardstyle}>
              <Title isSize={1}>New Spray Chart</Title>
              <Field onSubmit={this.handleSubmit}>
                <Control>
                  <label> Date Applied: </label>
                  <Input
                    style={{ color: "black" }}
                    type="date"
                    onChange={this.handleDateAppliedChange}
                    name="dateApplied"
                    value={this.state.dateApplied}
                  />
                </Control>
              </Field>
              <Field onSubmit={this.handleSubmit}>
                <Control>
                  <label> Emoloyee Id </label>
                  <Input
                    style={{ color: "black" }}
                    type="text"
                    onChange={this.handleEmployee_idChange}
                    name="employee_id"
                    value={this.state.employee_id}
                  />
                </Control>
              </Field>
              <Field onSubmit={this.handleSubmit}>
                <Control>
                  <label> Holes Treated: </label>
                  <Input
                    style={{ color: "black" }}
                    type="text"
                    onChange={this.handleHolesTreatedChange}
                    name="holesTreated"
                    value={this.state.holesTreated}
                  />
                </Control>
              </Field>
              <Field onSubmit={this.handleSubmit}>
                <Control>
                  <label> Length of Cut Treated: </label>
                  <Input
                    style={{ color: "black" }}
                    type="text"
                    onChange={this.handleLengthOfCutTreatedChange}
                    name="lengthOfCutTreated"
                    value={this.state.lengthOfCutTreated}
                  />
                </Control>
              </Field>
              <Field onSubmit={this.handleSubmit}>
                <Control>
                  <label> Chemicals Being Used: </label>
                  <Input
                    style={{ color: "black" }}
                    type="text"
                    onChange={this.handleChemicalsBeingUsedChange}
                    name="chemicalsBeingUsed"
                    value={this.state.chemicalsBeingUsed}
                  />
                </Control>
              </Field>
              <Field onSubmit={this.handleSubmit}>
                <Control>
                  <label> Rate Applied: </label>
                  <Input
                    style={{ color: "black" }}
                    type="text"
                    onChange={this.handleRateAppliedChange}
                    name="rateApplied"
                    value={this.state.rateApplied}
                  />
                </Control>
              </Field>
              <Field onSubmit={this.handleSubmit}>
                <Control>
                  <label> Total Gallons: </label>
                  <Input
                    style={{ color: "black" }}
                    type="text"
                    onChange={this.handleTotalGallonsChange}
                    name="totalGallons"
                    value={this.state.totalGallons}
                  />
                </Control>
              </Field>
              <Field onSubmit={this.handleSubmit}>
                <Control>
                  <label> Spray Rig: </label>
                  <Input
                    style={{ color: "black" }}
                    type="text"
                    onChange={this.handleSprayRigChange}
                    name="sprayRig"
                    value={this.state.sprayRig}
                  />
                </Control>
              </Field>
              <Field onSubmit={this.handleSubmit}>
                <Control>
                  <label> Pest or Disease Controlled: </label>
                  <Input
                    style={{ color: "black" }}
                    type="text"
                    onChange={this.handlePestOrDiseaseControlledChange}
                    name="pestOrDiseaseControlled"
                    value={this.state.pestOrDiseaseControlled}
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
          </Box>
        </div>
      </>
    );
  }
}

export default AddSpraychart;
