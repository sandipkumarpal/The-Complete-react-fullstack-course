import React from 'react';

import FormField from '../../components/commons/FormField';
import { firebase } from '../../firebase';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registerError: '',
            loading: false,
            formData: {
                email: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'email_input',
                        type: 'email',
                        placeholder: 'Enter your email'
                    },
                    validation: {
                        required: true,
                        email: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                },
                password: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'password_input',
                        type: 'password',
                        placeholder: 'Enter your Password'
                    },
                    validation: {
                        required: true,
                        password: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                }
            }
        }
        this.updateForm = this.updateForm.bind(this);
        this.valiDate = this.valiDate.bind(this);
        this.submitButton = this.submitButton.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.showError = this.showError.bind(this);
    }

    updateForm(element) {
        const newFormData = {
            ...this.state.formData
        };
        const newElement = {
            ...newFormData[element.id]
        }
        newElement.value = element.event.target.value;
        newFormData[element.id] = newElement;

        if(element.blur) {
            let validData = this.valiDate(newElement);
            newElement.valid = validData[0];
            newElement.validationMessage = validData[1];
        };
        newElement.touched = element.blur;
        this.setState({
            formData: newFormData
        });
        console.log(newFormData)
    }

    valiDate(element) {
        let error = [true, ""];
        if(element.validation.required) {
            const valid = element.value.trim() !== '';
            const message = !valid ? 'This field is Required!' : '';
            error = !valid ? [valid, message] : error;
        }
        if(element.validation.email) {
            const valid = /\S+@\S+\.\S+/.test(element.value);
            const message = !valid ? 'Must be a valid email!' : '';
            error = !valid ? [valid, message] : error;
        }
        if(element.validation.password) {
            const valid = element.value.length >= 5;
            const message = !valid ? 'Must be greater than 5!' : '';
            error = !valid ? [valid, message] : error;
        }
        return error;
    }

    submitForm(event, type) {
        event.preventDefault();
        if(type !== null) {
            let dataToSubmit = {};
            let formIsValid = true;

            for (const key in this.state.formData) {
                dataToSubmit[key] = this.state.formData[key].value;
            }
            for (const key in this.state.formData) {
                formIsValid = this.state.formData[key].valid && formIsValid;
            }
            if (formIsValid) {
                console.log(dataToSubmit);
                this.setState({
                    loading: true,
                    registerError: ''
                });
                if (type) {
                    console.log('[Login]');
                    firebase.auth()
                    .signInWithEmailAndPassword(
                        dataToSubmit.email, 
                        dataToSubmit.password
                    ).then(() => {
                        this.props.history.push('/');

                    }).catch(error => {
                        this.setState({
                            loading: false,
                            registerError: error.message
                        });
                    });
                } else {
                    console.log('[Register]');
                    firebase.auth()
                    .createUserWithEmailAndPassword(
                        dataToSubmit.email, 
                        dataToSubmit.password
                    ).then(() => {
                        this.props.history.push('/');

                    }).catch(error => {
                        this.setState({
                            loading: false,
                            registerError: error.message
                        });
                    });
                }
            }
        }
    }

    submitButton() {
        let submitButtons = null;
        this.state.loading ?
            submitButtons = 'loading...'
        :
            submitButtons = <div>
                <button onClick={(event) => this.submitForm(event, false)}>Register Now</button>
                <button onClick={(event) => this.submitForm(event, true)}>Log In</button>
            </div>
        return submitButtons;
    }

    showError() {
        return this.state.registerError !== '' ?
        <div className="error">{this.state.registerError}</div>
        : '';
    }

    render() {
        return (
            <div className="logContainer">
                <form onSubmit={(event) => this.submitForm(event, null)}>
                    <h2>Register / Login</h2>
                    <FormField 
                        id={'email'}
                        formData={this.state.formData.email}
                        change={(e) => this.updateForm(e)}
                    />
                    <FormField 
                        id={'password'}
                        formData={this.state.formData.password}
                        change={(e) => this.updateForm(e)}
                    />
                    {this.submitButton()}
                    {this.showError()}
                </form>
            </div>
        );
    }
}

export default SignIn;
