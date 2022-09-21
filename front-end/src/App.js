import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route exact path="/"><Redirect to="/login" /></Route>
    </Switch>
  );
}

export default App;
