import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';

import { stateToHTML } from 'draft-js-export-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import FormField from '../../components/commons/FormField';

import { firebaseTeams } from '../../firebase';

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(), 
            edit: true,
            loading: false,
            postError: '',
            formData: {
                author: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'author_input',
                        type: 'text',
                        placeholder: 'Enter your name'
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                },
                title: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'title_input',
                        type: 'text',
                        placeholder: 'Enter the title'
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                },
                body: {
                    element: 'texteditor',
                    value: '',
                    valid: true,

                },
                teams: {
                    element: 'select',
                    value: '',
                    config: {
                        name: 'teams_input',
                        options: []
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                },
            }
        }
        this.submitForm = this.submitForm.bind(this);
        this.validate = this.validate.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.submitButton = this.submitButton.bind(this);
        this.showError = this.showError.bind(this);
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    submitForm(event) {
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;

        for (const key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
        }
        for (const key in this.state.formData) {
            formIsValid = this.state.formData[key].valid && formIsValid;
        }
        if (formIsValid) {
            console.log('[Submit]');
        } else {
            console.log('[Not Submit]');
            this.setState({
                postError: 'Something went wrong'
            })
        }
        console.log(dataToSubmit);
        
    }

    updateForm(element, content = '') {
        const newFormData = {
            ...this.state.formData
        }
        const newElement = {
            ...newFormData[element.id]
        }
        if (content === '') {
            newElement.value = element.event.target.value;
        } else {
            newElement.value = content;
        }

        if(element.blur) {
            let validData = this.validate(newElement);
            newElement.valid = validData[0];
            newElement.validationMessage = validData[1];
        }

        newElement.touched = element.blur;
        newFormData[element.id] = newElement;

        this.setState({
            formData: newFormData
        })
    }
    validate(element) {
        let error = [true, ""];
        if(element.validation.required) {
            const valid = element.value.trim() !== '';
            const message = !valid ? 'This field is Required!' : '';
            error = !valid ? [valid, message] : error;
        }
        return error;
    }
    submitButton() {
        let submitButtons = null;
        this.state.loading ? 
            submitButtons = 'loading...'
        : 
            submitButtons = <div>
                <button type="submit">Add Post</button>
            </div>;
        return submitButtons;
    }
    showError() {
        return this.state.registerError !== '' ?
        <div className="error">{this.state.registerError}</div>
        : '';
    }

    onEditorStateChange(editorState) {
        let contentState = editorState.getCurrentContent();
        let html = stateToHTML(contentState);
        this.updateForm({ id:'body'}, html)

        this.setState({
            editorState
        });
    }

    componentDidMount() {
        this.loadItems();
    }
    loadItems = () => {
        firebaseTeams.once('value')
        .then((snapshot) => {
            let teams = [];
            snapshot.forEach((childSnapshot) => {
                teams.push({
                    id: childSnapshot.val().teamId,
                    name: childSnapshot.val().city
                });
            });

            const newFormData = { ...this.state.formData };
            
        });
    }
    render() {
        return (
            <div className="postContainer">
                <form onSubmit={this.submitForm}>
                    <h2>Add Post</h2>
                    <FormField 
                        id={'author'}
                        formData={this.state.formData.author}
                        change={(e) => this.updateForm(e)}
                    />
                    <FormField 
                        id={'title'}
                        formData={this.state.formData.title}
                        change={(e) => this.updateForm(e)}
                    />
                    <Editor 
                        editorState={this.state.editorState}
                        wrapperClassName="myEditor-wrapper"
                        editorClassName="myEditor-editor"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                    <FormField 
                        id={'teams'}
                        formData={this.state.formData.teams}
                        change={(e) => this.updateForm(e)}
                    />
                    {this.submitButton()}
                    {this.showError()}
                </form>
            </div>
        )
    }
}

export default DashBoard;
