import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route component={Login} exact path="/login" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
