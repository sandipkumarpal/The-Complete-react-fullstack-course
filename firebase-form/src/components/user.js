import React, { Component } from 'react';

import FormFields from './Forms/FormFields';
import { firebaseDB } from '../firebase';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: {
                    element: 'input',
                    value: '',
                    label: true,
                    labelText: 'Name',
                    config: {
                        name: 'name_input',
                        text: 'text',
                        placeholder: 'Enter your Name'
                    },
                    validation: {
                        required: true,
                        minLength: 5
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                },
                lastName: {
                    element: 'input',
                    value: '',
                    label: true,
                    labelText: 'Last Name',
                    config: {
                        name: 'lastName_input',
                        text: 'text',
                        placeholder: 'Enter your Last Name'
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                },
                massage: {
                    element: 'textarea',
                    value: '',
                    label: true,
                    labelText: 'Massage',
                    config: {
                        name: 'massage_area',
                        placeholder: 'Enter your Massage',
                        row: 4,
                        cols: 36
                    },
                    validation: {
                        required: true
                    },
                    valid: true,
                },
                age: {
                    element: 'select',
                    value: '',
                    label: true,
                    labelText: 'Age',
                    config: {
                        name: 'age_select',
                        placeholder: 'Enter your Age',
                        options: [
                            {
                                val: '1',
                                text: '10-20'
                            },
                            {
                                val: '2',
                                text: '20-30'
                            },
                            {
                                val: '3',
                                text: '+30'
                            }
                        ]
                    },
                    validation: {
                        required: true
                    },
                    valid: true,
                }
            }
        }
        this.submitForm = this.submitForm.bind(this);
        this.updateForm = this.updateForm.bind(this);
    }
    
    updateForm(newState) {
        this.setState(() => ({
            formData: newState
        }))
    }

    submitForm(event) {
        event.preventDefault();
        let dataToSubmit = {};
        let formValid = true;

        for (const key in this.state.formData) {
           dataToSubmit[key] = this.state.formData[key].value;
        }

        for (const key in this.state.formData) {
            formValid = this.state.formData[key].valid && formValid;
        }

        if(formValid) {
            firebaseDB.ref('user').push(dataToSubmit)
                .then(() => {
                    console.log('New User Added');
                }).catch(e => {
                    console.log(e);
                });
        }
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <FormFields 
                        formData={this.state.formData}
                        onblur={newState => this.updateForm(newState)}
                        change={newState => this.updateForm(newState)}
                    />
                    <button type="submit">Submit</button>  
                </form>
            </div>
        )
    }
}

export default User;