import axios from 'axios';
import React, { Component } from 'react';
import ViewModal from './Modals/ViewModal';

class TableActionButtons extends Component {

    constructor(props){
        super(props);
    }

    // Getting Individual Employee Data

    getEmployeeDetails = (id) => {
        axios.post('/get/individual/employee/details', {
            employeeId: id
        }).then((response) => {
            console.log(response.data);
        })
    }

    render(){
        return (
            <div className="btn-group" role="group">
                <button type="button" 
                    className="btn btn-primary"
                    data-toggle="modal" 
                    data-target="#exampleModal"
                    onClick={() => this.getEmployeeDetails(this.props.eachRowId)}
                >
                    View
                </button>
                <ViewModal modalId = { this.props.eachRowId } />
                <button type="button" className="btn btn-info">Update</button>
                <button type="button" className="btn btn-danger">Delete</button>
                
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default TableActionButtons; 