import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={AllCourses} />
          <Route path="/fullstack" component={FullStackDevelopment} />
          <Route path="/datascience" component={DataScience} />
          <Route path="/cybersecurity" component={CyberSecurity} />
          <Route path="/career" component={Career} />
        </Switch>
      </div>
    </Router>
  );
};

const AllCourses = () => {
  return <h2>All Courses Content</h2>;
};

export default App;
