import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import SprayCharts from './components/spraychart/spraychart';
import UpdateSpraychart from './components/spraychart/updateSpraychart';
import AddSpraychart from './components/spraychart/addSpraychart';
import SpraychartHome from './components/spraychart/spraychartHome';
import UpdateJobBoard from './components/jobBoard/updateJobBoard';
import Jobs from './components/jobBoard/jobBoard';
import AddJobBoard from './components/jobBoard/addJobBoard';
import JobBoardHome from './components/jobBoard/jobBoardHome';
import UpdateJobType from './components/jobType/updateJobType';
import JobTypes from './components/jobType/jobType';
import AddJobType from './components/jobType/addJobType';
import JobTypeHome from './components/jobType/jobTypeHome';
import EmployeeLogin from './components/employee/login';
import EmployeeRegister from './components/employee/register';
import UpdateEmployee from './components/employee/updateEmployee';

function App() {
  return (
    <Router>
      <Route path="/spraychart/post/add" exact component={AddSpraychart} />
      <Route path="/spraychart/all" exact component={SpraychartHome} />
      <Route path="/spraycharts/:spraychart_id?" component={SprayCharts} />
      <Route path="/spraycharts/update/:spraychart_id?" component={UpdateSpraychart} />
      <Route path="/jobboard/all" exact component={JobBoardHome} />
      <Route path="/jobboard/post/add" exact component={AddJobBoard} />
      <Route path="/jobs/:job_id?" component={Jobs} />
      <Route path="/jobs/update/:jobboard_id?" component={UpdateJobBoard} />
      <Route path="/jobtype/all" exact component={JobTypeHome} />
      <Route path="/jobtype/post/add" exact component={AddJobType} />
      <Route path="/jobtype/:jobtype_id?" component={JobTypes} />
      <Route path="/jobtypes/update/:jobtype_id?" component={UpdateJobType} />
      <Route path="/login" component={EmployeeLogin} />
      <Route path="/register" component={EmployeeRegister} />
      <Route path="/employees/update/:employee_id?" component={UpdateEmployee} />
    </Router>
  );
}

export default App;
