import React, { Component } from "react";

class UpdateSpraychart extends Component {
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

  async componentDidMount() {
    const spraychart = await this.loadData();
    console.log(spraychart);
    this.setState({
        dateApplied: spraychart.dateapplied,
        employee_id: spraychart.employee_id,
        holesTreated: spraychart.holestreated,
        lengthOfCutTreated: spraychart.lengthofcuttreated,
        chemicalsBeingUsed: spraychart.chemicalsbeingused, 
        rateApplied: spraychart.rateapplied,
        totalGallons: spraychart.totalgallons,
        sprayRig: spraychart.sprayrig,
        pestOrDiseaseControlled: spraychart.pestordiseasecontrolled
    });
  }

    loadData = async () => {
        const spraychartId = this.props.match.params.spraychart_id;
        const url = `http://localhost:3000/spraychart/spraycharts/${spraychartId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
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

  handleSubmit = e => {
    e.preventDefault();
    const spraychartId = this.props.match.params.spraychart_id;
    const dateApplied = this.state.dateApplied;
    const employee_id = this.state.employee_id;
    const holesTreated = this.state.holesTreated;
    const lengthOfCutTreated = this.state.lengthOfCutTreated;
    const chemicalsBeingUsed = this.state.chemicalsBeingUsed;
    const rateApplied = this.state.rateApplied;
    const totalGallons = this.state.totalGallons;
    const sprayRig = this.state.sprayRig;
    const pestOrDiseaseControlled = this.state.pestOrDiseaseControlled;
    const data = { dateApplied, employee_id, holesTreated, lengthOfCutTreated, chemicalsBeingUsed, rateApplied, totalGallons, sprayRig, pestOrDiseaseControlled };
    const url = `http://localhost:3000/spraychart/spraycharts/update/${spraychartId}`;
    const response = fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        
      },
      
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200) {
          this.props.history.push("/spraychart/all");
        }
      })
      .catch(err => {
        console.log(err);
    });
  };
  
  render() {
    return (
      <>
        <h2>{this.state.spraychartId}</h2>
        <form onSubmit={this.handleSubmit}>
            <label> Date Applied: </label>
            <input
                type="date"
                onChange={this.handleDateAppliedChange}
                name="dateApplied"
                value={this.state.dateApplied}
            />
            <label> Emoloyee Id </label>
            <input
                type="text"
                onChange={this.handleEmployee_idChange}
                name="employee_id"
                value={this.state.employee_id}
            />
            <label> Holes Treated: </label>
            <input 
                type="text"
                onChange={this.handleHolesTreatedChange}
                name="holesTreated"
                value={this.state.holesTreated}
            />
            <label> Length of Cut Treated: </label>
            <input
                type="text"
                onChange={this.handleLengthOfCutTreatedChange}
                name="lengthOfCutTreated"
                value={this.state.lengthOfCutTreated}
            />
            <label> Chemicals Being Used: </label>
            <input
                type="text"
                onChange={this.handleChemicalsBeingUsedChange}
                name="chemicalsBeingUsed"
                value={this.state.chemicalsBeingUsed}
            />
            <label> Rate Applied: </label>
            <input
                type="text"
                onChange={this.handleRateAppliedChange}
                name="rateApplied"
                value={this.state.rateApplied}
            />
            <label> Total Gallons: </label>
            <input
                type="text"
                onChange={this.handleTotalGallonsChange}
                name="totalGallons"
                value={this.state.totalGallons}
            />
            <label> Spray Rig: </label>
            <input
                type="text"
                onChange={this.handleSprayRigChange}
                name="sprayRig"
                value={this.state.sprayRig}
            />
            <label> Pest or Disease Controlled: </label>
            <input
                type="text"
                onChange={this.handlePestOrDiseaseControlledChange}
                name="pestOrDiseaseControlled"
                value={this.state.pestOrDiseaseControlled}
            />
            <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default UpdateSpraychart;