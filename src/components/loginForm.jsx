import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './form';
import { Link } from 'react-router-dom';
import '../index.css';


class LoginForm extends Form {
    state = {
        data : {
            email: '',
            password : ''
           
        },

        errors : {}
    }

    schema = {
        email : Joi.string().required().label('Email'),
        password : Joi.string().required().min(8).label('Password'),
    }



    doSubmit = () => {
        //Calling the server
        console.log('Regsitered')
    }
    

    render() { 

        return ( 
    <div className="login-container">
    <h1>Login</h1>
    <form onSubmit={this.handleSubmit} >
        {this.renderInput("email", "Email" )}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton('Login')}
    </form>

<br/><br/><br/>
    <h3>Don't have an account?</h3>
    <Link to="/registerForm" className="btn btn-outline btn-success btn-sm m-2">Create new Account</Link>
 </div> );
    }
}
export default LoginForm;