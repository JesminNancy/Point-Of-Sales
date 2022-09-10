import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import DataTable from 'react-data-table-component';

export default class listDashboard extends Component {

  constructor(){
    super();
    this.state= {
    TotalTransaction:"100",
    TotalIncome:"100",
    TotalCategory:"100",
    TotalProduct:"100",
    }
  }

  render() {

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

    return (
        <Fragment>
        <Container>
            <Row className="mt-2">
                <Col md={6} lg={6} sm={12}>
                    <Row>
                        <Col className="text-center animated zoomIn p-1" sm={6} xs={6} md={6} lg={6}>
                            <Card>
                                <Card.Body>
                                    <h1 className="count-number">{this.state.TotalTransaction}</h1>
                                    <h6 className="count-title">Total Transaction</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="text-center animated zoomIn p-1" sm={6} xs={6} md={6} lg={6}>
                            <Card>
                                <Card.Body>
                                    <h1 className="count-number">{this.state.TotalIncome}</h1>
                                    <h6 className="count-title">Total Income</h6>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="text-center animated zoomIn p-1" sm={6} xs={6} md={6} lg={6}>
                            <Card>
                                <Card.Body>
                                    <h1 className="count-number">{this.state.TotalCategory}</h1>
                                    <h6 className="count-title">Total Category</h6>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="text-center animated zoomIn p-1" sm={6} xs={6} md={6} lg={6}>
                            <Card>
                                <Card.Body>
                                    <h1 className="count-number">{this.state.TotalProduct}</h1>
                                    <h6 className="count-title">Total Product</h6>
                                </Card.Body>
                            </Card>
                        </Col>


                        {/* <Col className="p-1 animated zoomIn" sm={12} xs={12} md={12} lg={12}>
                            <Card>
                                <Card.Body>
                                    <h1 className="count-title">Last 7 Days</h1>
                                    <ResponsiveContainer width="100%" height={200}>
                                         <AreaChart  data={this.state.dataChart}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Tooltip />
                                            <Area type="monotone" dataKey="income" stroke="#CB4D85" fill="#CB4D85" />
                                        </AreaChart> 
                                    </ResponsiveContainer>
                                </Card.Body>
                            </Card>
                        </Col> */}

                    </Row>
                </Col>

                <Col className="p-1 animated zoomIn" sm={12} xs={12} md={6} lg={6}>
                    <Card>
                        <Card.Body>
                            <DataTable
                                paginationPerPage={6}
                                pagination={true}
                                title="Recent Transaction"
                                columns={this.state.dataTableColumn}
                                data={this.state.dataTable}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Fragment>
    )
  }
}
