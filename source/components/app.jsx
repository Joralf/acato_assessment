import React from 'react';
import { NavDropdown, MenuItem, Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap';

import EmployeesContainer from '../containers/employeesContainer.js';
import NameFilter from '../containers/nameFilter.js';
import RoleFilter from '../containers/roleFilter.js';

import Logo from '../../assets/logo.svg';
import '../../assets/css/common.scss';
import './app.scss';

const App = () => (
  <div className="app">
    <Navbar className="navbar" inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Redux</NavItem>
          <NavItem eventKey={2} href="#">React</NavItem>
          <NavDropdown eventKey={3} title="State" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Grid className="content">
      <Row>
        <Col xs={12} sm={12} md={3}>
          <div className="card">
            <h4>Who are you looking for?</h4>
            <NameFilter />
            <h4>Interested in specific roles?</h4>
            <RoleFilter />
          </div>
        </Col>
        <Col xs={12} sm={12} md={9}>
          <div className="results-container">
            <EmployeesContainer />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default App;
