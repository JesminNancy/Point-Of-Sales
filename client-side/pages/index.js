import React, { Component } from 'react';
import ListDashboard from "../components/listDashboard";
import NavMenuDesktop from '../components/NavMenuDesktop';

export default class index extends Component {
  render() {
    return (
      <div>
        <NavMenuDesktop/>
        <ListDashboard/>
      </div>
    )
  }
}
