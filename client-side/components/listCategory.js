import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";

class ListCategory extends Component {
    constructor() {
        super();
        this.state={
            show:false,
            showEdit:false,
            deleteID:"",
            editID:""
        }
    }


    handleClose=()=>{
        this.setState({ show:false})
    }
    handleOpen=()=>{
        this.setState({ show:true})
    }

    handleCloseEdit=()=>{
        this.setState({ showEdit:false})
    }
    handleOpenEdit=()=>{
        this.setState({ showEdit:true})
    }




    deleteIconOnClick=(id)=>{
        alert(id)
    }


    editIconOnClick=(id)=>{
        this.handleOpenEdit();
        this.setState({editID:id})

    }


    render() {

        const columns = [
            {
                name: 'Category Icon',
                selector: 'cat_icon',
                sortable: true,
                cell: row => <img src={row.cat_icon} className="cat-icon"/>


            },
            {
                name: 'Category Name',
                selector: 'cat_name',
                sortable: true,

            },
            {
                name: 'Category Code',
                selector: 'cat_code',
                sortable: true,
            },
            {
                name: 'Delete',
                selector: 'id',
                sortable: true,
                cell: row => <button onClick={this.deleteIconOnClick.bind(this,row.id)}  className="btn text-danger"><i className="fa fa-trash-alt"/></button>
            },
            {
                name: 'Edit',
                selector: 'id',
                sortable: true,
                cell: row => <button onClick={this.editIconOnClick.bind(this,row.id)}  className="btn text-primary"><i className="fa fa-edit"/></button>
            },
        ];

        return (
            <Fragment>
                <Container className="animated zoomIn">

                    <Row className="mt-2">
                        <Col sm={12} xs={12} md={12} lg={12}>
                            <Card>
                                <Card.Body>
                                    <Container fluid={true}>
                                        <Row>
                                            <Col><h4 className="table-title">Category List</h4></Col>
                                            <Col><button onClick={this.handleOpen} className="float-end circular-btn"><i className="fa fa-plus"/></button></Col>
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
                                                    data={this.props.dataTable}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>

                <Modal animation={false} className="animated zoomIn" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <h6>Add Category</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <label className="form-label">Category Name</label>
                        <input className="form-control form-control-sm" type="text"/>
                        <label className="form-label">Category Icon</label>
                        <input className="form-control form-control-sm form-control-file" type="file"/>
                    </Modal.Body>
                    <Modal.Footer>
                        <button  className="btn btn-sm btn-site" onClick={this.handleClose}>
                            Close
                        </button>
                        <button className="btn btn-sm btn-site"  onClick={this.handleClose}>
                            Save Changes
                        </button>
                    </Modal.Footer>
                </Modal>

                <Modal animation={false} className="animated zoomIn" show={this.state.showEdit} onHide={this.handleCloseEdit}>
                    <Modal.Header>
                        <h6>{this.state.editID} Edit Category </h6>
                    </Modal.Header>
                    <Modal.Body>
                        <label className="form-label">Category Name</label>
                        <input className="form-control form-control-sm" type="text"/>
                        <label className="form-label">Category Icon</label>
                        <input className="form-control form-control-sm form-control-file" type="file"/>

                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-sm btn-site" onClick={this.handleCloseEdit}>
                            Close
                        </button>
                        <button className="btn btn-sm btn-site"  onClick={this.handleCloseEdit}>
                            Save Changes
                        </button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default ListCategory;
