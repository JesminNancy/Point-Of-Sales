import React, { Component } from 'react';
import ListReport from "../components/listReport";
import NavMenuDesktop from "../components/NavMenuDesktop";

class Report extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ListReport/>
            </div>
        );
    }
}

export default Report;
