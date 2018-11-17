import React, { Component } from 'react';
import { connect } from 'react-redux';
import './static/css/headerStyle.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
    renderLinks() {
      console.log('authenticated:'+this.props.authenticated);
      console.log('jwt token:' + `${localStorage.getItem('jwttoken')}`);
        if (this.props.authenticated) {
        // if (`${localStorage.getItem('jwttoken')}` !==null) {
            return (
                <div>
                  <Navbar>
                    <Navbar.Header>
                      <Navbar.Brand>
                        <a href="#home"> <font size="6">Crypto Tracker</font></a>
                      </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                      <LinkContainer to="/">
                        <NavItem eventKey={1}>
                          Home
                        </NavItem>
                      </LinkContainer>
                      <NavDropdown eventKey={2} title={<span><i className="fa fa-user-circle"></i>User</span>} id="basic-nav-dropdown">
                          <LinkContainer to="/user/portfolio">
                            <MenuItem eventKey={2.1}>Portfolio</MenuItem>
                          </LinkContainer>
                          <LinkContainer to="/user/transaction">
                            <MenuItem eventKey={2.2}>Transaction</MenuItem>
                          </LinkContainer>
                          <LinkContainer to="/user/setting">
                            <MenuItem eventKey={2.3}>Security Setting</MenuItem>
                          </LinkContainer>
                          <LinkContainer to="/user/profile">
                            <MenuItem eventKey={2.4}>Profile Information</MenuItem>
                          </LinkContainer>
                          <LinkContainer to="/signout">
                            <MenuItem eventKey={2.5}>Sign Out</MenuItem>
                          </LinkContainer>
                      </NavDropdown>
                      <LinkContainer to="/search">
                        <NavItem eventKey={3}>
                          Search
                        </NavItem>
                      </LinkContainer>
                    </Nav>
                  </Navbar>
                </div>
            );
        } else {
            return (
              <div>
                <Navbar>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="/"><font size="6">Crypto Tracker</font></a>
                    </Navbar.Brand>
                    <nav>
                    <img src={require('../assets/logo.png')} width="53pd" height="53pd" />
                    </nav>
                  </Navbar.Header>
                  <Nav pullRight>
                    <LinkContainer to="/">
                      <NavItem eventKey={1}>
                        Home
                      </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                      <NavItem eventKey={2}>
                        Sign Up
                      </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/signin">
                      <NavItem eventKey={3}>
                        Log In
                      </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/search">
                      <NavItem eventKey={4}>
                        Search
                      </NavItem>
                    </LinkContainer>
                  </Nav>
                </Navbar>
              </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div> {this.renderLinks()}</div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
