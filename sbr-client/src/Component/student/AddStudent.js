import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const AddStudent = () => {
    let navigate = useNavigate();
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    })
    const { firstName, lastName, email, department } = student;

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    };


    const saveStudent = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8081/students", student);
        navigate("/view-students");
    };

    return (
        <div className='col-sm-8 py-2 px-5 offset-2 shadow container '>
            <form onSubmit={(e) => saveStudent(e)}>
                <div className='input-group mb-5 '>
                    <label className='input-group-text' htmlFor='firstName'>First Name</label>
                    <input className='form-control col-sm-6 ' value={firstName} type='text' name="firstName" id="firstName" required onChange={(e) => handleInputChange(e)}></input>

                </div>
                <div className='input-group mb-5 '>
                    <label className='input-group-text' htmlFor='lastName'>Last Name</label>
                    <input className='form-control col-sm-6 ' value={lastName} type='text' name="lastName" id="lastName" required onChange={(e) => handleInputChange(e)}></input>

                </div>

                <div className='input-group mb-5 '>
                    <label className='input-group-text' htmlFor='email'>Email</label>
                    <input className='form-control col-sm-6 ' value={email} type='email' name="email" id="email" required onChange={(e) => handleInputChange(e)}></input>

                </div>

                <div className='input-group mb-5 '>
                    <label className='input-group-text' htmlFor='department'>Department</label>
                    <input className='form-control col-sm-6 ' value={department} type='text' name="department" id="department" required onChange={(e) => handleInputChange(e)}></input>

                </div>
                <div className='d-flex '>
                    <div className='col-sm-2'>
                        <button type='submit' className='btn btn-outline-primary btn-md'>
                            Save
                        </button>
                    </div>

                    <div className='col-sm-2'>
                        <Link to={"/view-students"} type='submit' className='btn btn-outline-warning btn-md'>
                            Cancel
                        </Link>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddStudent;