import React, { Component } from 'react'

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import SignInAndSignUp from '../../pages/sign-in-sign-up/sign-in-sign-up.component';


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await SignInAndSignUp(email,password);
            this.setState({email: '', password: ''})

        }catch {
            alert('RETARDE')
        }

    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({[name] : value});
    }

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
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google 
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn