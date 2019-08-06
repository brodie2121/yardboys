import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddJobBoard from "./addJobBoard";
import { Table, Title } from "bloomer";

import "../../stylesheets/jobBoardHome.css";

const listyle = {
  textAlign: "center",
  color: "transparent"
};

class JobBoardHome extends Component {
  state = {
    jobs: []
  };

  async componentDidMount() {
    const jobs = await this.loadData();
    console.log("jobs", jobs);
    this.setState({
      jobs
    });
  }

  loadData = async () => {
    const url = "http://localhost:3000/jobboard/all";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  handleChange = async event => {
    const changeValue = await this.setState({
      jobs: event.target.value
    });
    console.log(changeValue);
    return changeValue;
  };
  render() {
    const { jobs } = this.state;

    return (
      <div className="job__board">
        <div className="parallax">
          <div className="ui container div-emp-table">
            <Title style={{ color: "white" }} isSize={3}>
              Employees Working
            </Title>
            <table className="ui selectable celled table inverted">
              <thead>
                <tr className="is-selected">
                  <td>Employee</td>
                  <td>Date</td>
                  <td>Job Type</td>
                  <td>Comments</td>
                  <td>Details</td>
                </tr>
              </thead>
              <tbody>
                {jobs.map(job => {
                  return (
                    <tr key={`job-${job.id}`}>
                      <td>
                        {job.fullname}
                        {/* {job.firstname} {job.lastname} */}
                      </td>
                      <td>{job.date}</td>
                      <td>{job.jobtype}</td>

                      <td>{job.comments}</td>
                      <td>
                        <Link to={`/jobs/${job.id}`}>View Details</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <AddJobBoard />
          </div>
        </div>
      </div>
    );
  }
}

//     render() {
//         const { jobs } = this.state;

//         return(
//             <>
//             <div className="parallax"></div>
//             <Title isSize={3}>Job Board Home</Title>
//             <AddJobBoard />
//             <Title isSize={3}>Employees Working</Title>
//                 <ul>
//                     {jobs.map(job => {
//                         return (

//                                 <Table isBordered isStriped isNarrow>
//                                     <thead>
//                                         <tr>
//                                             <th>
//                                                 <li style={listyle} key={`job-${job.id}`}>
//                                                     <Link to={`/jobs/${job.id}`}> {job.fullname}  </Link>
//                                                 </li>
//                                             </th>
//                                         </tr>
//                                     </thead>
//                                 </Table>

//                         );
//                     })}
//                 </ul>

//             </>
//         );
//     }
// }

export default JobBoardHome;
