import React from 'react';

import FormField from '../../components/commons/FormField';

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

    render() {
        return (
            <div className="logContainer">
                <form>
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
                </form>
            </div>
        );
    }
}

export default SignIn;
