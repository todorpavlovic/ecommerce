import React, { Component } from 'react'

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({[name] : value});
    }

    //auth

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    handleChange={this.handleChange}
                    name="email"
                    type="email"
                    value={this.state.email}
                    label="Email"
                    />
                    <FormInput 
                    handleChange={this.handleChange}
                    name="password"
                    type="password"
                    value={this.state.password}
                    label="Password"
                    />
                    <CustomButton type="submit">
                        Sign up
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        Sign in with Google 
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn