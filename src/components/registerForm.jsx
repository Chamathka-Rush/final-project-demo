import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './form';
import '../index.css';


class Signup extends Form {
    state = {
        data : {
            fullname: '',
            email: '',
            password : ''
           
        },

        errors : {}
    }

    schema = {
        fullname : Joi.string().required().label('Fullname'),
        email : Joi.string().required().label('Email'),
        password : Joi.string().required().min(8).label('Password'),
    }



    doSubmit = () => {
        //Calling the server
        console.log('Registered')
    }
    

    render() { 

        return ( 
    <div className="login-container">
    <h1>Register</h1>
    <button className="btn btn-success btn-sm m-2">Create new account</button>
    <form onSubmit={this.handleSubmit} >
        {this.renderInput("fullname", "Fullname")}
        {this.renderInput("email", "Email" )}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton('Register')}
    </form>
 </div> );
    }
}
export default Signup;