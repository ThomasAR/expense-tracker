import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import Tracker from './pages/Tracker/Tracker';
import Analysis from './pages/Analysis/Analysis';
import Configuration from './pages/Configuration/Configuration';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Expense Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/track">Tracker</NavLink>
            <NavLink to="/analyze">Analysis</NavLink>
            <NavLink to="/settings">Settings</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="page">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/track">
            <Tracker />
          </Route>
          <Route path="/analyze">
            <Analysis />
          </Route>
          <Route path="/settings">
            <Configuration />
          </Route>
          <Route path="/">
            <Redirect to="/track" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
