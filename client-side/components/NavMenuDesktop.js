import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class NavMenuDesktop extends Component {
  render() {
    return (
     
      <Navbar className='nav-bar sticky-top' variant="light" expand="lg">
     
        <Navbar.Brand>
        <img alt="logo" className="nav-logo" src="/logo6.png"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-center" href="/">
                <div className="nav-item-div">
                  <i className="fa fa-home mx-1"/>Dashboard
                </div>
            </Nav.Link>
            <Nav.Link className="text-center" href="/users">
               <div className="nav-item-div">
                  <i className="fa fa-user-alt mx-1"/>Users
               </div>
             </Nav.Link>

             <Nav.Link className="text-center" href="/category">
               <div className="nav-item-div">
                  <i className="fa fa-list-ul mx-1"/>category
               </div>
             </Nav.Link>

             <Nav.Link className="text-center" href="/product">
               <div className="nav-item-div">
                  <i className="fa mx-1 fa-shopping-bag"/>Product
               </div>
             </Nav.Link>
             <Nav.Link className="text-center" href="/transaction">
               <div className="nav-item-div">
                  <i className="fa fa-money-bill mx-1"/>Transaction
               </div>
             </Nav.Link>
             <Nav.Link className="text-center" href="/report">
               <div className="nav-item-div">
                  <i className="fa fa-file-invoice mx-1"/>Report
               </div>
             </Nav.Link>

          </Nav>
        </Navbar.Collapse>
    </Navbar>

    )
  }
}

