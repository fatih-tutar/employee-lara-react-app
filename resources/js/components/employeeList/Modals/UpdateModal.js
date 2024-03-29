import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UpdateModal extends Component {

    constructor(props){
        super(props);
        this.state ={
           employeeName: null,
           employeeSalary: null, 
        }
    }

    // Updating employee name state
    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value, 
        })
    }

    // Updating employee salary state
    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value, 
        })
    }

    static getDerivedStateFromProps(props, current_state) {
        let employeeUpdate = {
            employeeName: null,
            employeeSalary: null
        }

        // Updating data from input.

        if(current_state.employeeName && (current_state.employeeName !== props.employeeData.currentEmployeeName)){
            return null; 
        }

        if(current_state.employeeSalary && (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary)){
            return null; 
        }

        // Updating data from props below.
        
        if(current_state.employeeName !== props.employeeData.currentEmployeeName || current_state.employeeName === props.employeeData.currentEmployeeName){
            employeeUpdate.employeeName = props.employeeData.currentEmployeeName;
        }

        if(current_state.employeeSalary !== props.employeeData.currentEmployeeSalary || current_state.employeeSalary === props.employeeData.currentEmployeeSalary){
            employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary;
        }

        return employeeUpdate;
    }

    // Updating employee data.

    updateEmployeeData = () => {
        axios.post('/update/employee/data', {
            employeeId: this.props.modalId,
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary
        }).then((response) => {
            toast.success("Employee updated successfully!");
            setTimeout(() => {
                location.reload();
            }, 2500)
        })
    }

    render(){
        return (
            <div className="modal fade" id={"updateModal"+this.props.modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form action="" className='form'>
                            <div className="form-group">
                                <input type="text"
                                    id='employeeName'
                                    className='form-control mb-3'
                                    value={this.state.employeeName ?? ""}
                                    onChange={this.inputEmployeeName}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    id='employeeSalary'
                                    className='form-control mb-3'
                                    value={this.state.employeeSalary ?? ""}
                                    onChange={this.inputEmployeeSalary}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <input type="submit"
                                className='btn btn-info'
                                value="Update"
                                onClick={this.updateEmployeeData}
                        />
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateModal; 