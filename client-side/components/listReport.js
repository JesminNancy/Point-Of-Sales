import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";

class ListReport extends Component {



    render() {

        const columns = [
            {
                name: 'Invoice No',
                selector: 'invoice_no',
                sortable: true,

            },
            {
                name: 'Invoice Date',
                selector: 'invoice_date',
                sortable: true,
            },
            {
                name: 'Product Name',
                selector: 'product_name',
                sortable: true,
            },
            {
                name: 'Quantity',
                selector: 'quantity',
                sortable: true,
            },
            {
                name: 'Total Price',
                selector: 'total_price',
                sortable: true,
            },

            {
                name: 'Seller Name',
                selector: 'seller_name',
                sortable: true,
            },

            {
                name: 'Invoice',
                selector: 'id',
                sortable: true,
                cell: row => <button className="btn btn-sm btn-danger">Print</button>
            },

        ];

        const dataTable = [
            {
                id: 1,
                invoice_no:"0101",
                invoice_date:"22/12/2021",
                product_name:"Rice",
                product_category:"Rice",
                product_code:"Rice",
                quantity:"100kg",
                unit_price:"60",
                total_price:"6000",
                discount_price:"10",
                seller_name:"Nancy",
            },
            {
                id: 2,
                invoice_no:"0101",
                invoice_date:"22/12/2021",
                product_name:"Rice",
                product_category:"Rice",
                product_code:"Rice",
                quantity:"100kg",
                unit_price:"60",
                total_price:"6000",
                discount_price:"10",
                seller_name:"Nancy",
            },
            {
                id: 3,
                invoice_no:"0101",
                invoice_date:"22/12/2021",
                product_name:"Rice",
                product_category:"Rice",
                product_code:"Rice",
                quantity:"100kg",
                unit_price:"60",
                total_price:"6000",
                discount_price:"10",
                seller_name:"Nancy",
            },
            {
                id: 4,
                invoice_no:"0101",
                invoice_date:"22/12/2021",
                product_name:"Rice",
                product_category:"Rice",
                product_code:"Rice",
                quantity:"100kg",
                unit_price:"60",
                total_price:"6000",
                discount_price:"10",
                seller_name:"Nancy",
            },
            {
                id: 5,
                invoice_no:"0101",
                invoice_date:"22/12/2021",
                product_name:"Rice",
                product_category:"Rice",
                product_code:"Rice",
                quantity:"100kg",
                unit_price:"60",
                total_price:"6000",
                discount_price:"10",
                seller_name:"Nancy",
            },
            {
                id: 6,
                invoice_no:"0101",
                invoice_date:"22/12/2021",
                product_name:"Rice",
                product_category:"Rice",
                product_code:"Rice",
                quantity:"100kg",
                unit_price:"60",
                total_price:"6000",
                discount_price:"10",
                seller_name:"Nancy",
            }

        ]

        return (
            <Fragment>
                <Container className="animated zoomIn">

                    <Row className="mt-2">
                        <Col sm={12} xs={12} md={12} lg={12}>
                            <Card>
                                <Card.Body>
                                    <Container fluid={true}>
                                        <Row>
                                            <Col md={6}>
                                                <div className="input-group">
                                                    <h4 className="table-title mr-2">Report</h4>
                                                </div>
                                            </Col>

                                            <Col md={6}>
                                                <div className="input-group">
                                                    <input className="form-control form-control-sm mx-2" type="date"/>
                                                    <input className="form-control form-control-sm mx-2" type="date"/>
                                                    <button className="btn btn-sm btn-danger mx-2">Report</button>
                                                </div>
                                            </Col>


                                        </Row>
                                    </Container>
                                    <hr className="bg-secondary"/>
                                    <Container fluid={true}>
                                        <Row>
                                            <Col sm={12} xs={12} md={12} lg={12}>
                                                <DataTable
                                                    noHeader={true}
                                                    paginationPerPage={5}
                                                    pagination={true}
                                                    columns={columns}
                                                    data={dataTable}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ListReport;