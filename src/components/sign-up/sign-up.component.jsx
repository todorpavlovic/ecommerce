import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword( email, password )
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch {
            console.log('error!!!');
        }

    }

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                    handleChange={this.handleChange}
                    type="text"
                    name="displayName"
                    value={this.state.displayName}
                    label="Name"
                    required
                    />
                    <FormInput 
                    handleChange={this.handleChange}
                    type="email"
                    name="email"
                    value={this.state.email}
                    label="Email"
                    required
                    />
                    <FormInput 
                    handleChange={this.handleChange}
                    type="password"
                    name="password"
                    value={this.state.password}
                    label="Password"
                    required
                    />
                    <FormInput 
                    handleChange={this.handleChange}
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    label="Confirm Password"
                    required
                    />
                    <CustomButton type="submit" >
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        )
    }
}


export default SignUp