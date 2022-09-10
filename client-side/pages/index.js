export async function getStaticProps() {
    const dataChart = [
        {
            t_date: '22/11/2021',
            income: 4000,
        },
        {
            t_date: '22/11/2021',
            income: 3000,
        },
        {
            t_date: '22/11/2021',
            income: 2000,
        },
        {
            t_date: '22/11/2021',
            income: 2780,
        },
        {
            t_date: '22/11/2021',
            income: 1890,
        },
        {
            t_date: '22/11/2021',
            income: 2390,
        },
        {
            t_date: '22/11/2021',
            income: 3490,
        },
    ];
    const dataTable = [
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        }
    ]
    const dataTableColumn = [
        {
            name: 'Receipt',
            selector: 'receipt_no',
            sortable: true,
        },
        {
            name: 'Date',
            selector: 'receipt_date',
            sortable: true,
        },
        {
            name: 'Qty',
            selector: 'qty',
            sortable: true,
        },
        {
            name: 'Total',
            selector: 'total',
            sortable: true,
        },
    ];
    return {
        props: {
            dataTableColumn:dataTableColumn,
            TotalTransaction:"200",
            TotalIncome:"400",
            TotalCategory:"600",
            TotalProduct:"900",
             dataChart:dataChart,
            dataTable:dataTable,
        }
    }
  }
  


import React, { Component } from 'react';
import ListDashboard from "../components/listDashboard";
import NavMenuDesktop from '../components/NavMenuDesktop';

export default class index extends Component {
  render() {
    return (
      <div>
        <NavMenuDesktop/>
        <ListDashboard
        
          dataTableColumn={this.props.dataTableColumn}
          dataTable={this.props.dataTable}
          // dataChart={this.props.dataChart}
          TotalTransaction={this.props.TotalTransaction}
          TotalIncome={this.props.TotalIncome}
          TotalCategory={this.props.TotalCategory}
          TotalProduct={this.props.TotalProduct}
        
        />
      </div>
    )
  }
}
